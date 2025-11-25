// Test script to verify solutions data access
// Run this with: node test-solutions.js

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log('\n=== Testing Supabase Solutions Access ===\n');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables!');
  console.log('VITE_SUPABASE_URL:', supabaseUrl ? 'Set ✓' : 'Missing ✗');
  console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set ✓' : 'Missing ✗');
  process.exit(1);
}

console.log('✓ Environment variables loaded');
console.log('URL:', supabaseUrl);
console.log('Key:', supabaseAnonKey.substring(0, 20) + '...\n');

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSolutionsAccess() {
  try {
    console.log('--- Test 1: Check if table exists ---');
    const { data: tableCheck, error: tableError } = await supabase
      .from('solutions')
      .select('count');

    if (tableError) {
      console.error('❌ Table access error:', tableError.message);
      return;
    }
    console.log('✓ Table exists and is accessible\n');

    console.log('--- Test 2: Count total solutions ---');
    const { count, error: countError } = await supabase
      .from('solutions')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('❌ Count error:', countError.message);
      return;
    }
    console.log('✓ Total solutions:', count);

    if (count === 0) {
      console.log('⚠️  No solutions found in database!\n');
      return;
    }
    console.log();

    console.log('--- Test 3: Fetch all solutions (as public user) ---');
    const { data: allSolutions, error: fetchError } = await supabase
      .from('solutions')
      .select('*')
      .order('display_order', { ascending: true });

    if (fetchError) {
      console.error('❌ Fetch error:', fetchError.message);
      console.log('This might be a Row Level Security (RLS) policy issue!\n');
      return;
    }

    console.log('✓ Successfully fetched:', allSolutions.length, 'solutions');
    console.log();

    console.log('--- Test 4: Check published solutions ---');
    const { data: publishedSolutions, error: publishedError } = await supabase
      .from('solutions')
      .select('*')
      .eq('is_published', true);

    if (publishedError) {
      console.error('❌ Published fetch error:', publishedError.message);
      return;
    }

    console.log('✓ Published solutions:', publishedSolutions.length);
    console.log();

    console.log('--- Test 5: Group by category ---');
    const grouped = {};
    allSolutions.forEach(solution => {
      if (!grouped[solution.category]) {
        grouped[solution.category] = [];
      }
      grouped[solution.category].push(solution.title);
    });

    console.log('✓ Solutions by category:');
    Object.keys(grouped).forEach(category => {
      console.log(`  - ${category}: ${grouped[category].length} solutions`);
      grouped[category].forEach(title => {
        console.log(`    • ${title}`);
      });
    });
    console.log();

    console.log('--- Test 6: Sample solution data ---');
    if (allSolutions.length > 0) {
      const sample = allSolutions[0];
      console.log('Sample solution:');
      console.log('  ID:', sample.id);
      console.log('  Title:', sample.title);
      console.log('  Category:', sample.category);
      console.log('  Excerpt:', sample.excerpt.substring(0, 100) + '...');
      console.log('  Published:', sample.is_published);
      console.log('  Display Order:', sample.display_order);
    }
    console.log();

    console.log('=== ✓ All Tests Passed! ===\n');
    console.log('Solutions data is accessible from the frontend.');
    console.log('If you still don\'t see solutions in the UI:');
    console.log('1. Clear browser cache (Ctrl+Shift+Delete)');
    console.log('2. Hard refresh the page (Ctrl+F5)');
    console.log('3. Check browser console for errors (F12)');
    console.log('4. Verify you\'re logged in for admin panel\n');

  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

testSolutionsAccess();
