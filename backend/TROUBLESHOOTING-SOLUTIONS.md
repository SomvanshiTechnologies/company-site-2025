# Solutions Not Showing - Troubleshooting Guide

## Problem
Solutions data is in the database but not showing in the UI (both admin panel and client-side).

## Root Cause
The **Row Level Security (RLS)** policies were not set up for the `solutions` table, blocking all access to the data.

---

## ✅ SOLUTION - Follow These Steps

### Step 1: Run the RLS Fix Script

1. Open **Supabase SQL Editor**
2. Copy and paste the entire content of `backend/fix-solutions-rls.sql`
3. Click **Run**
4. Check the output to verify policies were created

**What this does:**
- Enables Row Level Security on solutions table
- Creates policies allowing:
  - ✅ Public users to view published solutions
  - ✅ Authenticated users to view all solutions (including drafts)
  - ✅ Authenticated users to create, update, and delete solutions

### Step 2: Verify Data Exists

In Supabase SQL Editor, run:
```sql
SELECT COUNT(*) as total FROM solutions;
SELECT category, COUNT(*) FROM solutions GROUP BY category;
```

**Expected output:**
- Total: 15 solutions
- 3 solutions per category (HealthCare, Education, E-Commerce, Laws & Firms, Banking & Finance)

### Step 3: Test Public Access

In Supabase SQL Editor, run:
```sql
SELECT id, title, category, is_published
FROM solutions
WHERE is_published = true
LIMIT 5;
```

**If this returns data**, the RLS policies are working!

### Step 4: Refresh Your Application

1. **Clear browser cache** (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. **Hard refresh** the page (Ctrl+F5 or Cmd+Shift+R)
3. **Restart dev server**:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

### Step 5: Verify UI

**Admin Panel:**
1. Go to `http://localhost:5173/admin/login`
2. Login with your credentials
3. Click on **Solutions** in the sidebar
4. You should see all 15 solutions

**Client Side:**
1. Go to `http://localhost:5173/`
2. Scroll to "Transforming Every Sector with AI" section
3. You should see solutions grouped by category
4. Click "View all" → Should go to `/solutions`
5. Click any solution → Should show detail page

---

## 🔍 Additional Debugging

### Check 1: Verify RLS Policies

Run in Supabase SQL Editor:
```sql
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE tablename = 'solutions'
ORDER BY policyname;
```

**You should see 6 policies:**
1. Public can view published solutions (SELECT, public)
2. Authenticated can view all solutions (SELECT, authenticated)
3. Authenticated users can insert solutions (INSERT, authenticated)
4. Authenticated users can update solutions (UPDATE, authenticated)
5. Authenticated users can delete solutions (DELETE, authenticated)

### Check 2: Browser Console Errors

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Look for any Supabase errors
4. Common errors:
   - ❌ "new row violates row-level security policy" → RLS not configured
   - ❌ "relation does not exist" → Table not created
   - ❌ "column does not exist" → Schema mismatch

### Check 3: Network Tab

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Filter by "Fetch/XHR"
4. Look for requests to Supabase
5. Check the response:
   - ✅ Status 200 with data → Working!
   - ❌ Status 200 with empty array → RLS blocking access
   - ❌ Status 400/500 → Server error

### Check 4: Test Query Directly

In Supabase SQL Editor, run the exact query the app uses:
```sql
-- Public query (client-side)
SELECT *
FROM solutions
WHERE is_published = true
ORDER BY display_order ASC;

-- Admin query
SELECT *
FROM solutions
ORDER BY created_at DESC;
```

---

## 🔧 Manual RLS Setup (If Script Doesn't Work)

If the automated script doesn't work, follow these manual steps:

### 1. Enable RLS
```sql
ALTER TABLE solutions ENABLE ROW LEVEL SECURITY;
```

### 2. Create Public Read Policy
```sql
CREATE POLICY "Public can view published solutions"
ON solutions
FOR SELECT
TO public
USING (is_published = true);
```

### 3. Create Authenticated View Policy
```sql
CREATE POLICY "Authenticated can view all solutions"
ON solutions
FOR SELECT
TO authenticated
USING (true);
```

### 4. Create Insert Policy
```sql
CREATE POLICY "Authenticated users can insert solutions"
ON solutions
FOR INSERT
TO authenticated
WITH CHECK (true);
```

### 5. Create Update Policy
```sql
CREATE POLICY "Authenticated users can update solutions"
ON solutions
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);
```

### 6. Create Delete Policy
```sql
CREATE POLICY "Authenticated users can delete solutions"
ON solutions
FOR DELETE
TO authenticated
USING (true);
```

---

## ❗ Common Issues & Fixes

### Issue 1: "No solutions found"
**Cause:** Data not loaded
**Fix:** Run `backend/solutions-dummy-data.sql`

### Issue 2: Admin can't see solutions
**Cause:** Authenticated SELECT policy missing
**Fix:** Run the "Authenticated can view all solutions" policy above

### Issue 3: Can't create new solutions
**Cause:** INSERT policy missing
**Fix:** Run the INSERT policy creation

### Issue 4: Solutions show on admin but not client
**Cause:** Public SELECT policy missing or `is_published = false`
**Fix:**
1. Run the public SELECT policy
2. Verify solutions are published:
   ```sql
   UPDATE solutions SET is_published = true;
   ```

### Issue 5: 403 Forbidden errors
**Cause:** RLS blocking access
**Fix:** Run `fix-solutions-rls.sql`

### Issue 6: Empty array returned
**Cause:** RLS enabled but no policies
**Fix:** Create all 6 policies listed above

---

## ✅ Verification Checklist

After fixing, verify each point:

- [ ] Table `solutions` exists in Supabase
- [ ] 15 solutions in database (`SELECT COUNT(*)` returns 15)
- [ ] All solutions have `is_published = true`
- [ ] RLS is enabled on solutions table
- [ ] 6 RLS policies exist for solutions
- [ ] Can query solutions as public user
- [ ] Can query solutions as authenticated user
- [ ] Homepage shows solutions section
- [ ] `/solutions` page shows all solutions
- [ ] Individual solution pages work
- [ ] Admin panel shows Solutions tab
- [ ] Admin can view, create, edit solutions
- [ ] No console errors in browser

---

## 🚨 Still Not Working?

If solutions still don't show after following all steps:

### 1. Check Environment Variables
```bash
# Verify .env file exists
cat .env

# Should contain:
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key
```

### 2. Verify Supabase Connection
Add this test to any component:
```javascript
console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Has Anon Key:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
```

### 3. Test Direct Supabase Query
Add this to your component:
```javascript
useEffect(() => {
  const test = async () => {
    const { data, error } = await supabase
      .from('solutions')
      .select('*');
    console.log('Solutions:', data);
    console.log('Error:', error);
  };
  test();
}, []);
```

### 4. Disable RLS Temporarily (Testing Only!)
```sql
ALTER TABLE solutions DISABLE ROW LEVEL SECURITY;
```
If this makes data appear, RLS policies are the issue.
**IMPORTANT:** Re-enable RLS after testing!

---

## 📞 Need More Help?

1. **Check Supabase Logs:**
   - Go to Supabase Dashboard
   - Settings → Database → Logs
   - Look for policy violations

2. **Check Table Permissions:**
   - Supabase Dashboard → Table Editor
   - Click solutions table
   - Check RLS policies tab

3. **Verify Schema Matches:**
   - Compare your table structure with `backend/schema.sql`
   - Ensure all columns exist

---

## ✨ Success Indicators

You'll know it's working when:
- ✅ Homepage shows "Transforming Every Sector with AI" with solutions
- ✅ Tabs switch between industries (HealthCare, Education, etc.)
- ✅ "View all" button goes to `/solutions`
- ✅ `/solutions` shows all 15 solutions with filters
- ✅ Clicking a solution shows detail page
- ✅ Admin panel has Solutions tab in sidebar
- ✅ Admin can see 15 solutions in table
- ✅ Admin can create/edit/delete solutions
- ✅ No errors in browser console

---

**Remember:** The most common issue is RLS policies not being set up. The `fix-solutions-rls.sql` script solves 90% of issues!
