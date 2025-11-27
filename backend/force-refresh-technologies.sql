-- ============================================
-- Force Refresh Technologies Table for PostgREST
-- Run this entire script in Supabase SQL Editor
-- ============================================

-- 1. Verify the table is in the public schema
SELECT schemaname, tablename
FROM pg_tables
WHERE tablename = 'technologies';

-- 2. Grant permissions to anon and authenticated roles
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON public.technologies TO anon, authenticated;
GRANT ALL ON public.technologies TO authenticated;

-- 3. Ensure the table is exposed in the API
-- Check if the table is in the allowed schemas for PostgREST
DO $$
BEGIN
    -- This ensures the public schema is available
    PERFORM set_config('pgrst.db_schemas', 'public', false);
END $$;

-- 4. Verify RLS is properly configured
ALTER TABLE public.technologies ENABLE ROW LEVEL SECURITY;

-- 5. Drop and recreate the public read policy with explicit schema
DROP POLICY IF EXISTS "Public can view published technologies" ON public.technologies;

CREATE POLICY "Public can view published technologies"
    ON public.technologies
    FOR SELECT
    TO anon, authenticated
    USING (is_published = true);

-- 6. Force PostgREST to reload the schema cache
NOTIFY pgrst, 'reload schema';
NOTIFY pgrst, 'reload config';

-- 7. Verify the setup
SELECT
    'Table exists in public schema' as status,
    COUNT(*) as total_rows,
    COUNT(*) FILTER (WHERE is_published = true) as published_rows
FROM public.technologies;

-- 8. Check API exposure
SELECT
    tablename,
    schemaname,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE tablename = 'technologies';

-- 9. List all policies
SELECT
    schemaname,
    tablename,
    policyname,
    roles,
    cmd as operation
FROM pg_policies
WHERE tablename = 'technologies';
