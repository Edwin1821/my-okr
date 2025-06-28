
-- Add Row Level Security policies for okrs table
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

-- Add Row Level Security policies for key_results table
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

-- Add Row Level Security policies for profiles table
CREATE POLICY "Users can view their own profile" 
  ON public.profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);
