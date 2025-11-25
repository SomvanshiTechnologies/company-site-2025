import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/supabase';
import ImageUpload from './ImageUpload';

const NewsManagement = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image_url: '',
    author_name: 'By Name',
    author_avatar_url: 'https://placehold.co/40x40/E0E7FF/4F46E5?text=AV',
    category: '',
    display_priority: null,
    is_published: true,
  });

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setNews(data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
      alert('Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSave = {
        ...formData,
        display_priority: formData.display_priority === '' ? null : formData.display_priority,
      };

      if (editingId) {
        const { error } = await supabase
          .from('news')
          .update(dataToSave)
          .eq('id', editingId);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('news')
          .insert([dataToSave]);

        if (error) throw error;
      }

      resetForm();
      fetchNews();
      alert(editingId ? 'News updated successfully!' : 'News created successfully!');
    } catch (error) {
      console.error('Error saving news:', error);
      alert('Failed to save news: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      image_url: item.image_url || '',
      author_name: item.author_name,
      author_avatar_url: item.author_avatar_url,
      category: item.category,
      display_priority: item.display_priority || '',
      is_published: item.is_published,
    });
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this news?')) return;

    try {
      const { error } = await supabase
        .from('news')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchNews();
      alert('News deleted successfully!');
    } catch (error) {
      console.error('Error deleting news:', error);
      alert('Failed to delete news');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image_url: '',
      author_name: 'By Name',
      author_avatar_url: 'https://placehold.co/40x40/E0E7FF/4F46E5?text=AV',
      category: '',
      display_priority: null,
      is_published: true,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const getPriorityBadge = (priority) => {
    if (!priority) return null;
    return (
      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
        Homepage Priority {priority}
      </span>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold text-gray-900">Latest News</h2>
          <p className="text-sm text-gray-600 font-body mt-1">
            Manage news articles. Set display priority 1-3 to show on homepage (3 items max)
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary text-white rounded-md font-body font-medium hover:bg-primary/90 transition-colors"
        >
          {showForm ? 'Cancel' : '+ Add News'}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
            {editingId ? 'Edit News' : 'Add New News'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                />
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  placeholder="e.g., Technology, Business"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                required
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body"
              />
            </div>

            <div>
              <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                Content * (HTML supported)
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
                rows="8"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body font-mono text-sm"
              />
            </div>

            <ImageUpload
              currentImage={formData.image_url}
              onImageUpload={(url) => setFormData({ ...formData, image_url: url })}
              bucket="news-images"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                  Display Priority (1-3 for homepage)
                </label>
                <select
                  value={formData.display_priority || ''}
                  onChange={(e) => setFormData({ ...formData, display_priority: e.target.value ? parseInt(e.target.value) : null })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                >
                  <option value="">Not on homepage</option>
                  <option value="1">1 (First)</option>
                  <option value="2">2 (Second)</option>
                  <option value="3">3 (Third)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                  Author Name
                </label>
                <input
                  type="text"
                  value={formData.author_name}
                  onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                />
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                  Published
                </label>
                <select
                  value={formData.is_published}
                  onChange={(e) => setFormData({ ...formData, is_published: e.target.value === 'true' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-primary text-white rounded-md font-body font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {loading ? 'Saving...' : (editingId ? 'Update' : 'Create')}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-body font-medium hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {loading && !showForm ? (
          <div className="p-8 text-center text-gray-600 font-body">Loading...</div>
        ) : news.length === 0 ? (
          <div className="p-8 text-center text-gray-600 font-body">No news found. Create your first one!</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-body font-medium text-gray-700 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-body font-medium text-gray-700 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-body font-medium text-gray-700 uppercase">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-body font-medium text-gray-700 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-body font-medium text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {news.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {item.image_url && (
                          <img src={item.image_url} alt="" className="w-12 h-12 object-cover rounded" />
                        )}
                        <div>
                          <div className="font-body font-medium text-gray-900">{item.title}</div>
                          <div className="font-body text-sm text-gray-500">{item.excerpt.substring(0, 60)}...</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-gray-700">{item.category}</td>
                    <td className="px-6 py-4">{getPriorityBadge(item.display_priority)}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${item.is_published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {item.is_published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 font-body"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 font-body"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsManagement;
