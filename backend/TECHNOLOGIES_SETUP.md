# Technologies Feature Setup Guide

This guide will help you set up the Technologies feature in your application.

## Database Setup

### Step 1: Create the Technologies Table

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Create a new query
4. Copy and paste the contents of `technologies-schema.sql`
5. Click **Run** to execute the SQL

This will create:
- The `technologies` table with all necessary columns
- Indexes for better performance
- Row Level Security (RLS) policies
- Triggers for automatic timestamp updates

### Step 2: Add Sample Data (Optional but Recommended)

1. In the SQL Editor, create another new query
2. Copy and paste the contents of `technologies-dummy-data.sql`
3. Click **Run** to execute the SQL

This will populate your database with 20+ sample technologies across different categories:
- **Web**: React, Vue.js, Angular, Next.js, Tailwind CSS
- **Backend**: Node.js, Python, Django, Express.js
- **Cloud**: AWS, Google Cloud, Docker
- **Database**: PostgreSQL, MongoDB, Redis
- **AI/ML**: TensorFlow, PyTorch
- **Mobile**: React Native, Flutter

### Step 3: Verify the Setup

1. Go to **Table Editor** in Supabase
2. Find the `technologies` table
3. Verify that you see all the sample records (if you added dummy data)

## Routes Created

The following routes are now available in your application:

- **`/technologies`** - View all technologies
- **`/technologies/web`** - View only Web technologies
- **`/technologies/backend`** - View only Backend technologies
- **`/technologies/cloud`** - View only Cloud technologies
- **`/technologies/ai-ml`** - View only AI/ML technologies
- **`/technologies/mobile`** - View only Mobile technologies
- **`/technologies/database`** - View only Database technologies
- **`/technologies/devops`** - View only DevOps technologies
- **`/technologies/detail/:id`** - View individual technology details

## Testing

After setting up the database:

1. Navigate to http://localhost:5173/technologies
   - You should see all technologies in a grid/list view
   - You can filter by category using the buttons

2. Navigate to http://localhost:5173/technologies/web
   - You should see only Web technologies (React, Vue.js, Angular, Next.js, Tailwind CSS)

3. Click on any technology card to view its details
   - You'll be taken to the detail page with full information

## Features

- **Category Filtering**: Filter technologies by category (Web, Backend, Cloud, etc.)
- **View Modes**: Toggle between Grid and List views
- **Search & Filter**: Real-time filtering using category buttons
- **Related Technologies**: Each detail page shows related technologies from the same category
- **Responsive Design**: Fully responsive on all devices
- **Database-Driven**: All content managed through Supabase

## Admin Management

To add, edit, or delete technologies:

1. Log in to your admin panel at `/admin/login`
2. Navigate to the Manage page
3. You'll need to add a "Technologies" section to your ManagePage component (similar to how News, Trends, and Solutions are managed)

## Category Options

The following categories are available (as defined in the schema):
- Web
- Backend
- Cloud
- AI/ML
- Mobile
- Database
- DevOps
- Other

## File Structure

```
backend/
├── technologies-schema.sql          # Database schema
├── technologies-dummy-data.sql      # Sample data
└── TECHNOLOGIES_SETUP.md           # This file

src/
├── pages/
│   ├── AllTechnologiesPage.jsx     # List page with filtering
│   └── TechnologyDetailPage.jsx    # Individual technology page
└── App.jsx                         # Routes configuration
```

## Troubleshooting

### Issue: "Table does not exist" error
**Solution**: Make sure you ran the `technologies-schema.sql` script in Supabase

### Issue: No technologies showing up
**Solution**:
1. Check if you ran the dummy data script
2. Verify RLS policies are set up correctly
3. Check the browser console for any errors

### Issue: Can't see unpublished technologies as admin
**Solution**: Make sure you're logged in and the RLS policy "Authenticated can view all technologies" is active

### Issue: Images not loading
**Solution**:
1. The dummy data uses CDN URLs which should work automatically
2. If you're adding custom images, make sure to set up the storage bucket (see commented section in schema file)

## Next Steps

1. Run the SQL scripts in Supabase ✓
2. Test the routes in your browser ✓
3. Customize the technologies content as needed
4. Add technologies management to your admin panel
5. Update the Navbar to include a link to `/technologies`

## Support

If you encounter any issues, check:
- Supabase console for error logs
- Browser console for JavaScript errors
- Network tab for failed API requests
