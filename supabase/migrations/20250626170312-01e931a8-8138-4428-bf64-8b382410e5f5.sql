
-- Enable RLS on existing tables that need it
ALTER TABLE public.okrs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organisations ENABLE ROW LEVEL SECURITY;

-- Update the okrs table to ensure it has all needed fields
ALTER TABLE public.okrs 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active',
ADD COLUMN IF NOT EXISTS due_date DATE,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT now();

-- Create a trigger to update the updated_at field
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_okrs_updated_at 
    BEFORE UPDATE ON public.okrs 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create profiles table for user data
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create key_results table for OKR key results
CREATE TABLE IF NOT EXISTS public.key_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  okr_id UUID REFERENCES public.okrs ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  target_value NUMERIC,
  current_value NUMERIC DEFAULT 0,
  unit TEXT DEFAULT 'number',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.key_results ENABLE ROW LEVEL SECURITY;

-- RLS Policies for okrs
CREATE POLICY "Users can view their own OKRs" 
  ON public.okrs FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own OKRs" 
  ON public.okrs FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own OKRs" 
  ON public.okrs FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own OKRs" 
  ON public.okrs FOR DELETE 
  USING (auth.uid() = user_id);

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- RLS Policies for key_results
CREATE POLICY "Users can view their own key results" 
  ON public.key_results FOR SELECT 
  USING (auth.uid() = (SELECT user_id FROM public.okrs WHERE id = okr_id));

CREATE POLICY "Users can create key results for their OKRs" 
  ON public.key_results FOR INSERT 
  WITH CHECK (auth.uid() = (SELECT user_id FROM public.okrs WHERE id = okr_id));

CREATE POLICY "Users can update their own key results" 
  ON public.key_results FOR UPDATE 
  USING (auth.uid() = (SELECT user_id FROM public.okrs WHERE id = okr_id));

CREATE POLICY "Users can delete their own key results" 
  ON public.key_results FOR DELETE 
  USING (auth.uid() = (SELECT user_id FROM public.okrs WHERE id = okr_id));

-- Function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile when user signs up
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
