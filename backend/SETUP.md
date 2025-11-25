# Backend Setup Guide - Supabase Integration

## Overview
This project uses Supabase for database, authentication, and storage. Follow these steps to set up the backend.

## Prerequisites
- A Supabase account (https://supabase.com)
- Node.js installed

## Step 1: Create a Supabase Project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Fill in:
   - **Name**: somvanshi-technologies (or your preferred name)
   - **Database Password**: Choose a strong password
   - **Region**: Select closest to your users
4. Wait for the project to be created (~2 minutes)

## Step 2: Get Your API Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (under Project API keys)

## Step 3: Configure Environment Variables

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```env
   VITE_SUPABASE_URL=your_project_url_here
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

## Step 4: Set Up Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy the entire contents of `backend/schema.sql`
4. Paste it into the SQL Editor
5. Click **Run** to execute the SQL

This will create:
- `news` table
- `trends` table
- `solutions` table
- Row Level Security (RLS) policies
- Indexes for better performance
- Triggers for automatic timestamps

### Optional: Load Dummy Data

To populate the database with sample data:

1. **For Solutions**: In SQL Editor, copy and run `backend/solutions-dummy-data.sql`
   - This creates 15 AI solution examples across 5 industries
   - Each solution has detailed content, images, and proper categorization

## Step 5: Create Storage Buckets

1. In Supabase dashboard, go to **Storage**
2. Click **New Bucket**
3. Create three buckets:
   - **Name**: `news-images`
     - **Public bucket**: ✓ Yes
   - **Name**: `trends-images`
     - **Public bucket**: ✓ Yes
   - **Name**: `solutions-images`
     - **Public bucket**: ✓ Yes

### Set Up Storage Policies

For each bucket, add these policies:

1. Go to **Storage** → Select bucket → **Policies**
2. Create the following policies:

**Policy 1: Public can view images**
- Policy name: `Public can view images`
- Allowed operation: SELECT
- Target roles: public
- USING expression: `true`

**Policy 2: Authenticated users can upload**
- Policy name: `Authenticated users can upload`
- Allowed operation: INSERT
- Target roles: authenticated
- WITH CHECK expression: `true`

**Policy 3: Authenticated users can update**
- Policy name: `Authenticated users can update`
- Allowed operation: UPDATE
- Target roles: authenticated
- USING expression: `true`

**Policy 4: Authenticated users can delete**
- Policy name: `Authenticated users can delete`
- Allowed operation: DELETE
- Target roles: authenticated
- USING expression: `true`

## Step 6: Create Admin User

1. In Supabase dashboard, go to **Authentication** → **Users**
2. Click **Add User**
3. Choose **Create new user**
4. Enter:
   - **Email**: your-admin-email@example.com
   - **Password**: your-secure-password
5. Make sure **Auto Confirm User** is checked
6. Click **Create User**

**Important**: Save these credentials - you'll use them to login at `/admin/login`

## Step 7: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:5173/admin/login`
3. Login with your admin credentials
4. You should be redirected to `/manage`

## Features

### Display Priority System

**News (Homepage - 3 items max)**:
- Set display_priority to 1, 2, or 3 to show on homepage
- Priority 1 = First position
- Priority 2 = Second position
- Priority 3 = Third position
- If not set or less than 3 items with priority, latest news will fill remaining spots

**Trends (Homepage - 4 items total)**:
- **Articles** (2 max): Set display_priority to 1 or 2
- **Venues** (2 max): Set display_priority to 1 or 2
- If not set, latest items of each type will be shown

### Admin Dashboard Features

Access at `/manage` after logging in:

The admin panel now features a **modern sidebar navigation** with three sections:

1. **News Management**
   - Create, edit, delete news articles
   - Upload images (to Supabase Storage or use URL)
   - Set display priority (1-3 for homepage)
   - Publish/unpublish articles
   - Rich HTML content support
   - Search and filter functionality

2. **Trends & Insights Management**
   - Create, edit, delete trends
   - Choose type: Article or Venue
   - Upload images
   - Set display priority (1-2 per type)
   - Publish/unpublish items
   - Category-based filtering

3. **Solutions Management** (NEW!)
   - Create, edit, delete AI solutions
   - Organize by industry category
   - Upload solution images
   - Set display order
   - Preview before publishing
   - Rich HTML content for detailed descriptions

## Troubleshooting

### Issue: "Missing Supabase environment variables"
- **Solution**: Make sure `.env` file exists with correct values
- Restart dev server after creating/editing `.env`

### Issue: "Invalid API key"
- **Solution**: Double-check your API keys in Supabase dashboard
- Make sure you're using the **anon public** key, not the service role key

### Issue: "relation does not exist"
- **Solution**: Run the SQL schema again in Supabase SQL Editor
- Check that schema.sql executed without errors

### Issue: Images not uploading
- **Solution**:
  - Check storage buckets are created
  - Verify storage policies are set correctly
  - Ensure buckets are marked as public

### Issue: Can't login to admin
- **Solution**:
  - Verify user was created in Authentication → Users
  - Check email and password are correct
  - Make sure user is confirmed (not pending)

## Security Notes

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use strong passwords** for admin accounts
3. **Row Level Security (RLS)** is enabled - public can only read published content
4. Only authenticated users can create/update/delete content
5. **anon key is safe** to expose in client-side code (it has limited permissions)

## Database Structure

### News Table
- `id` (UUID, primary key)
- `title` (text)
- `excerpt` (text)
- `content` (text, HTML supported)
- `image_url` (text, optional)
- `author_name` (text)
- `author_avatar_url` (text, optional)
- `category` (text)
- `display_priority` (integer, 1-3 for homepage)
- `is_published` (boolean)
- `created_at` (timestamp)
- `updated_at` (timestamp, auto-updated)

### Trends Table
- `id` (UUID, primary key)
- `title` (text)
- `excerpt` (text)
- `content` (text, HTML supported)
- `image_url` (text, optional)
- `type` (text, 'Article' or 'Venue')
- `category` (text)
- `display_priority` (integer, 1-2 for homepage)
- `is_published` (boolean)
- `created_at` (timestamp)
- `updated_at` (timestamp, auto-updated)

### Solutions Table (NEW!)
- `id` (bigserial, primary key)
- `title` (text)
- `excerpt` (text)
- `content` (text, HTML supported)
- `image_url` (text, optional)
- `category` (text, e.g., 'HealthCare', 'Education', 'E-Commerce', 'Laws & Firms', 'Banking & Finance')
- `display_order` (integer, for ordering solutions)
- `is_published` (boolean)
- `created_at` (timestamp)
- `updated_at` (timestamp, auto-updated)

## Next Steps

After setup is complete:
1. Login to admin panel at `/admin/login`
2. Create your first news article
3. Create some trends and insights
4. Add AI solutions for different industries
5. Test the homepage to see your content
6. Test the "Explore all" pages:
   - `/news` - All news articles
   - `/trends` - All trends and insights
   - `/solutions` - All AI solutions by industry

## Support

For issues with:
- **Supabase**: Check Supabase documentation at https://supabase.com/docs
- **Project**: Create an issue in the repository
