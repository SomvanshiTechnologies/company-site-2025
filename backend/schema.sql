-- ============================================
-- Somvanshi Technologies Database Schema
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLES
-- ============================================

-- News Table
CREATE TABLE IF NOT EXISTS news (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    author_name TEXT NOT NULL DEFAULT 'By Name',
    author_avatar_url TEXT,
    category TEXT NOT NULL,
    display_priority INTEGER DEFAULT NULL,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trends and Insights Table
CREATE TABLE IF NOT EXISTS trends (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    type TEXT NOT NULL CHECK (type IN ('Article', 'Venue')),
    category TEXT NOT NULL,
    display_priority INTEGER DEFAULT NULL,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Solutions Table
CREATE TABLE IF NOT EXISTS solutions (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    category TEXT NOT NULL,
    display_order INTEGER,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================

-- Index for sorting by priority
CREATE INDEX IF NOT EXISTS idx_news_display_priority ON news(display_priority) WHERE display_priority IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_trends_display_priority ON trends(display_priority) WHERE display_priority IS NOT NULL;

-- Index for sorting by created date
CREATE INDEX IF NOT EXISTS idx_news_created_at ON news(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_trends_created_at ON trends(created_at DESC);

-- Index for filtering by published status
CREATE INDEX IF NOT EXISTS idx_news_published ON news(is_published);
CREATE INDEX IF NOT EXISTS idx_trends_published ON trends(is_published);

-- Index for category filtering
CREATE INDEX IF NOT EXISTS idx_news_category ON news(category);
CREATE INDEX IF NOT EXISTS idx_trends_category ON trends(category);
CREATE INDEX IF NOT EXISTS idx_trends_type ON trends(type);

-- Index for solutions
CREATE INDEX IF NOT EXISTS idx_solutions_category ON solutions(category);
CREATE INDEX IF NOT EXISTS idx_solutions_published ON solutions(is_published);
CREATE INDEX IF NOT EXISTS idx_solutions_display_order ON solutions(display_order);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE trends ENABLE ROW LEVEL SECURITY;
ALTER TABLE solutions ENABLE ROW LEVEL SECURITY;

-- Public can read published content
CREATE POLICY "Public can view published news"
    ON news FOR SELECT
    USING (is_published = true);

CREATE POLICY "Public can view published trends"
    ON trends FOR SELECT
    USING (is_published = true);

CREATE POLICY "Public can view published solutions"
    ON solutions FOR SELECT
    USING (is_published = true);

-- Only authenticated users (admin) can insert
CREATE POLICY "Authenticated users can insert news"
    ON news FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Authenticated users can insert trends"
    ON trends FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Authenticated users can insert solutions"
    ON solutions FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Only authenticated users (admin) can update
CREATE POLICY "Authenticated users can update news"
    ON news FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Authenticated users can update trends"
    ON trends FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Authenticated users can update solutions"
    ON solutions FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Only authenticated users (admin) can delete
CREATE POLICY "Authenticated users can delete news"
    ON news FOR DELETE
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated users can delete trends"
    ON trends FOR DELETE
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated users can delete solutions"
    ON solutions FOR DELETE
    TO authenticated
    USING (true);

-- Authenticated users can view all solutions (including drafts)
CREATE POLICY "Authenticated can view all solutions"
    ON solutions FOR SELECT
    TO authenticated
    USING (true);

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- ============================================
-- TRIGGERS
-- ============================================

-- Trigger for news table
DROP TRIGGER IF EXISTS update_news_updated_at ON news;
CREATE TRIGGER update_news_updated_at
    BEFORE UPDATE ON news
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger for trends table
DROP TRIGGER IF EXISTS update_trends_updated_at ON trends;
CREATE TRIGGER update_trends_updated_at
    BEFORE UPDATE ON trends
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger for solutions table
DROP TRIGGER IF EXISTS update_solutions_updated_at ON solutions;
CREATE TRIGGER update_solutions_updated_at
    BEFORE UPDATE ON solutions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- STORAGE BUCKETS
-- ============================================

-- Create storage bucket for images (Run this in Supabase Dashboard)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('news-images', 'news-images', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('trends-images', 'trends-images', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('solutions-images', 'solutions-images', true);

-- Storage policies for images
-- CREATE POLICY "Public can view images" ON storage.objects FOR SELECT USING (bucket_id IN ('news-images', 'trends-images', 'solutions-images'));
-- CREATE POLICY "Authenticated users can upload images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id IN ('news-images', 'trends-images', 'solutions-images'));
-- CREATE POLICY "Authenticated users can update images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id IN ('news-images', 'trends-images', 'solutions-images'));
-- CREATE POLICY "Authenticated users can delete images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id IN ('news-images', 'trends-images', 'solutions-images'));
