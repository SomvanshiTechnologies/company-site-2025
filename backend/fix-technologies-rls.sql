-- ============================================
-- Fix Technologies RLS Policies
-- This script fixes common Row Level Security issues
-- ============================================

-- First, drop existing policies to start fresh
DROP POLICY IF EXISTS "Public can view published technologies" ON technologies;
DROP POLICY IF EXISTS "Authenticated can view all technologies" ON technologies;
DROP POLICY IF EXISTS "Authenticated users can insert technologies" ON technologies;
DROP POLICY IF EXISTS "Authenticated users can update technologies" ON technologies;
DROP POLICY IF EXISTS "Authenticated users can delete technologies" ON technologies;

-- Recreate the public read policy (this is the most important one for the website)
CREATE POLICY "Public can view published technologies"
    ON technologies
    FOR SELECT
    TO anon, authenticated
    USING (is_published = true);

-- Authenticated users can view all technologies (including drafts)
CREATE POLICY "Authenticated can view all technologies"
    ON technologies
    FOR SELECT
    TO authenticated
    USING (true);

-- Authenticated users can insert
CREATE POLICY "Authenticated users can insert technologies"
    ON technologies
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Authenticated users can update
CREATE POLICY "Authenticated users can update technologies"
    ON technologies
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Authenticated users can delete
CREATE POLICY "Authenticated users can delete technologies"
    ON technologies
    FOR DELETE
    TO authenticated
    USING (true);

-- Ensure RLS is enabled
ALTER TABLE technologies ENABLE ROW LEVEL SECURITY;

-- Grant necessary permissions to anon and authenticated roles
GRANT SELECT ON technologies TO anon;
GRANT ALL ON technologies TO authenticated;

-- Verify the policies
SELECT policyname, permissive, roles, cmd
FROM pg_policies
WHERE tablename = 'technologies';
