-- ============================================
-- Technologies Table Schema
-- ============================================

-- Technologies Table
CREATE TABLE IF NOT EXISTS technologies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    icon TEXT,
    category TEXT NOT NULL CHECK (category IN ('Web', 'Backend', 'Cloud', 'AI/ML', 'Mobile', 'Database', 'DevOps', 'Other')),
    display_priority INTEGER DEFAULT NULL,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================

-- Index for sorting by priority
CREATE INDEX IF NOT EXISTS idx_technologies_display_priority
    ON technologies(display_priority)
    WHERE display_priority IS NOT NULL;

-- Index for sorting by created date
CREATE INDEX IF NOT EXISTS idx_technologies_created_at
    ON technologies(created_at DESC);

-- Index for filtering by published status
CREATE INDEX IF NOT EXISTS idx_technologies_published
    ON technologies(is_published);

-- Index for category filtering
CREATE INDEX IF NOT EXISTS idx_technologies_category
    ON technologies(category);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE technologies ENABLE ROW LEVEL SECURITY;

-- Public can read published content
CREATE POLICY "Public can view published technologies"
    ON technologies FOR SELECT
    USING (is_published = true);

-- Only authenticated users (admin) can insert
CREATE POLICY "Authenticated users can insert technologies"
    ON technologies FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Only authenticated users (admin) can update
CREATE POLICY "Authenticated users can update technologies"
    ON technologies FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Only authenticated users (admin) can delete
CREATE POLICY "Authenticated users can delete technologies"
    ON technologies FOR DELETE
    TO authenticated
    USING (true);

-- Authenticated users can view all technologies (including drafts)
CREATE POLICY "Authenticated can view all technologies"
    ON technologies FOR SELECT
    TO authenticated
    USING (true);

-- ============================================
-- TRIGGERS
-- ============================================

-- Trigger for technologies table (uses existing update_updated_at_column function)
DROP TRIGGER IF EXISTS update_technologies_updated_at ON technologies;
CREATE TRIGGER update_technologies_updated_at
    BEFORE UPDATE ON technologies
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- STORAGE BUCKET
-- ============================================

-- Create storage bucket for technology images (Run this in Supabase Dashboard Storage section)
-- Or use SQL Editor:
-- INSERT INTO storage.buckets (id, name, public)
-- VALUES ('technologies-images', 'technologies-images', true);

-- Storage policies for images (Run after creating bucket)
-- CREATE POLICY "Public can view technology images"
--     ON storage.objects FOR SELECT
--     USING (bucket_id = 'technologies-images');
--
-- CREATE POLICY "Authenticated users can upload technology images"
--     ON storage.objects FOR INSERT
--     TO authenticated
--     WITH CHECK (bucket_id = 'technologies-images');
--
-- CREATE POLICY "Authenticated users can update technology images"
--     ON storage.objects FOR UPDATE
--     TO authenticated
--     USING (bucket_id = 'technologies-images');
--
-- CREATE POLICY "Authenticated users can delete technology images"
--     ON storage.objects FOR DELETE
--     TO authenticated
--     USING (bucket_id = 'technologies-images');
