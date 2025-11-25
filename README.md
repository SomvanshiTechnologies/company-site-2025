# Somvanshi Technologies Website

A modern, full-stack web application built with React and Supabase for managing and displaying technology news, trends, and insights.

## Features

### Public-Facing Features
- **Homepage** with latest news and trends
- **Latest News Section** - Displays 3 prioritized or latest news articles
- **Trends & Insights Section** - Shows 2 Articles and 2 Venues
- **All News Page** - Browse all published news with category filtering
- **All Trends Page** - Browse all trends with type and category filtering
- **Detail Pages** - Full article view with navigation to previous/next items
- **Responsive Design** - Mobile-first, works on all devices

### Admin Features
- **Secure Admin Login** (`/admin/login`) - Supabase authentication
- **Content Management Dashboard** (`/manage`) - Manage all content
- **News Management**
  - Create, edit, delete news articles
  - Upload images to Supabase Storage or use URLs
  - Set display priority (1-3) for homepage
  - Rich HTML content support
  - Publish/unpublish articles
  - Category management
- **Trends & Insights Management**
  - Create, edit, delete trends
  - Choose type: Article or Venue
  - Set display priority (1-2 per type)
  - Image upload support
  - Category management

### Display Priority System
- **News Homepage**: Set priority 1, 2, or 3 to feature on homepage (max 3)
- **Trends Homepage**:
  - Articles: Priority 1-2 (max 2)
  - Venues: Priority 1-2 (max 2)
- If no priority is set, latest items are displayed

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

### Backend
- **Supabase** - Backend as a Service
  - PostgreSQL database
  - Authentication
  - Storage for images
  - Row Level Security (RLS)
  - Real-time subscriptions

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Supabase

**See `backend/SETUP.md` for detailed instructions!**

Quick steps:
1. Create a Supabase project at https://supabase.com
2. Run the SQL in `backend/schema.sql` in Supabase SQL Editor
3. Create storage buckets: `news-images` and `trends-images`
4. Create an admin user in Authentication
5. Copy your project URL and anon key

### 3. Configure Environment Variables

Create `.env` file in the project root:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 5. Access Admin Panel

1. Navigate to `http://localhost:5173/admin/login`
2. Login with your admin credentials
3. Start managing content at `http://localhost:5173/manage`

## Routes

### Public Routes
- `/` - Homepage
- `/news` - All news listing
- `/news/:id` - Individual news article
- `/trends` - All trends listing
- `/trends/:id` - Individual trend/insight

### Admin Routes
- `/admin/login` - Admin login page
- `/manage` - Content management dashboard (protected)

## Database Schema

### News Table
- UUID primary key
- Title, excerpt, content (HTML)
- Image URL
- Author name and avatar
- Category
- Display priority (1-3 for homepage)
- Published status
- Timestamps

### Trends Table
- UUID primary key
- Title, excerpt, content (HTML)
- Image URL
- Type (Article/Venue)
- Category
- Display priority (1-2 for homepage per type)
- Published status
- Timestamps

## Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Troubleshooting

See `backend/SETUP.md` for detailed troubleshooting steps.

Common issues:
- Environment variables not loaded → Restart dev server
- Database errors → Check schema was run correctly
- Auth errors → Verify user exists and is confirmed
- Image upload fails → Check storage buckets and policies

## Documentation

- **Detailed Setup Guide**: `backend/SETUP.md`
- **Database Schema**: `backend/schema.sql`
- **Environment Template**: `.env.example`

## License

MIT License
