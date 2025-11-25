-- ============================================
-- Fix Row Level Security for Solutions Table
-- ============================================
-- This script ensures the solutions table has proper RLS policies
-- Run this in Supabase SQL Editor if you can't see solutions data

-- First, check if RLS is enabled on solutions table
-- If RLS is enabled without policies, no data will be visible!

-- Enable RLS (if not already enabled)
ALTER TABLE solutions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies (if any)
DROP POLICY IF EXISTS "Public can view published solutions" ON solutions;
DROP POLICY IF EXISTS "Authenticated users can insert solutions" ON solutions;
DROP POLICY IF EXISTS "Authenticated users can update solutions" ON solutions;
DROP POLICY IF EXISTS "Authenticated users can delete solutions" ON solutions;

-- Create new policies

-- 1. Allow everyone to view published solutions
CREATE POLICY "Public can view published solutions"
ON solutions
FOR SELECT
TO public
USING (is_published = true);

-- 2. Allow authenticated users to view all solutions (including drafts)
CREATE POLICY "Authenticated can view all solutions"
ON solutions
FOR SELECT
TO authenticated
USING (true);

-- 3. Allow authenticated users to insert solutions
CREATE POLICY "Authenticated users can insert solutions"
ON solutions
FOR INSERT
TO authenticated
WITH CHECK (true);

-- 4. Allow authenticated users to update solutions
CREATE POLICY "Authenticated users can update solutions"
ON solutions
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 5. Allow authenticated users to delete solutions
CREATE POLICY "Authenticated users can delete solutions"
ON solutions
FOR DELETE
TO authenticated
USING (true);

-- Verify policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename = 'solutions'
ORDER BY policyname;

-- Check if data exists
SELECT COUNT(*) as total_solutions FROM solutions;
SELECT category, COUNT(*) as count FROM solutions GROUP BY category;

-- Sample query to test public access
SELECT id, title, category, is_published FROM solutions WHERE is_published = true LIMIT 5;
