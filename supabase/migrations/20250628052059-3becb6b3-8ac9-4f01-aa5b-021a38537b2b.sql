
-- Enable RLS on okrs table if not already enabled
ALTER TABLE public.okrs ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own OKRs" ON public.okrs;
DROP POLICY IF EXISTS "Users can create their own OKRs" ON public.okrs;
DROP POLICY IF EXISTS "Users can update their own OKRs" ON public.okrs;
DROP POLICY IF EXISTS "Users can delete their own OKRs" ON public.okrs;

-- Create RLS policies for okrs table
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
