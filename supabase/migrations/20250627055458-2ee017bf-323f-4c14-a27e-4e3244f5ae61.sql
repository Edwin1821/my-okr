
-- Add missing columns to the okrs table
ALTER TABLE public.okrs 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active',
ADD COLUMN IF NOT EXISTS due_date DATE,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT now();

-- Create a trigger to update the updated_at field if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for okrs table
DROP TRIGGER IF EXISTS update_okrs_updated_at ON public.okrs;
CREATE TRIGGER update_okrs_updated_at 
    BEFORE UPDATE ON public.okrs 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
