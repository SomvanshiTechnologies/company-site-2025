-- ============================================
-- Technologies Verification Script
-- Run this in your Supabase SQL Editor to verify the setup
-- ============================================

-- 1. Check if the technologies table exists
SELECT EXISTS (
    SELECT FROM information_schema.tables
    WHERE table_schema = 'public'
    AND table_name = 'technologies'
) AS table_exists;

-- 2. Count total records in the technologies table
SELECT COUNT(*) as total_technologies FROM technologies;

-- 3. Count published technologies (what the public can see)
SELECT COUNT(*) as published_technologies FROM technologies WHERE is_published = true;

-- 4. Show all technologies grouped by category
SELECT
    category,
    COUNT(*) as count,
    COUNT(*) FILTER (WHERE is_published = true) as published_count
FROM technologies
GROUP BY category
ORDER BY category;

-- 5. Check RLS policies on technologies table
SELECT
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual
FROM pg_policies
WHERE tablename = 'technologies';

-- 6. Sample of first 5 technologies
SELECT id, title, category, is_published, created_at
FROM technologies
ORDER BY display_priority NULLS LAST, created_at DESC
LIMIT 5;

-- 7. Check if RLS is enabled
SELECT
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables
WHERE tablename = 'technologies';
