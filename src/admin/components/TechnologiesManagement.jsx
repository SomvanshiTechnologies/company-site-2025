import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/supabase';
import ImageUpload from './ImageUpload';
import { FiSearch, FiFilter, FiPlus, FiX, FiEye, FiEdit2, FiTrash2, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const TechnologiesManagement = () => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterPublished, setFilterPublished] = useState('All');
  const [previewTechnology, setPreviewTechnology] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image_url: '',
    icon: '',
    category: 'Web',
    display_priority: null,
    is_published: true,
  });

  const TECHNOLOGY_CATEGORIES = ['Web', 'Backend', 'Cloud', 'AI/ML', 'Mobile', 'Database', 'DevOps', 'Other'];

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const fetchTechnologies = async () => {
    try {
      const { data, error } = await supabase
        .from('technologies')
        .select('*')
        .order('display_priority', { ascending: true, nullsLast: true });

      if (error) throw error;
      setTechnologies(data || []);
    } catch (error) {
      console.error('Error fetching technologies:', error);
      setTechnologies([]);
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
          .from('technologies')
          .update(dataToSave)
          .eq('id', editingId);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('technologies')
          .insert([dataToSave]);

        if (error) throw error;
      }

      resetForm();
      fetchTechnologies();
      alert(editingId ? 'Technology updated successfully!' : 'Technology created successfully!');
    } catch (error) {
      console.error('Error saving technology:', error);
      alert('Failed to save technology: ' + error.message);
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
      icon: item.icon || '',
      category: item.category,
      display_priority: item.display_priority || '',
      is_published: item.is_published,
    });
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this technology?')) return;

    try {
      const { error } = await supabase
        .from('technologies')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchTechnologies();
      alert('Technology deleted successfully!');
    } catch (error) {
      console.error('Error deleting technology:', error);
      alert('Failed to delete technology');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image_url: '',
      icon: '',
      category: 'Web',
      display_priority: null,
      is_published: true,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const togglePublish = async (id, currentStatus) => {
    try {
      const { error } = await supabase
        .from('technologies')
        .update({ is_published: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      fetchTechnologies();
      alert(`Technology ${!currentStatus ? 'published' : 'unpublished'} successfully!`);
    } catch (error) {
      console.error('Error updating publish status:', error);
      alert('Failed to update publish status');
    }
  };

  // Get unique categories
  const categories = ['All', ...TECHNOLOGY_CATEGORIES];

  // Filter technologies
  const filteredTechnologies = technologies.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    const matchesPublished = filterPublished === 'All' ||
                            (filterPublished === 'Published' && item.is_published) ||
                            (filterPublished === 'Draft' && !item.is_published);
    return matchesSearch && matchesCategory && matchesPublished;
  });

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold text-gray-900">Technologies Management</h2>
          <p className="text-sm text-gray-600 font-body mt-1">
            Manage your technology stack and frameworks
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-body font-medium transition-all shadow-sm hover:shadow-md ${
            showForm
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              : 'bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary'
          }`}
        >
          {showForm ? (
            <>
              <FiX className="w-5 h-5" />
              Cancel
            </>
          ) : (
            <>
              <FiPlus className="w-5 h-5" />
              Add New Technology
            </>
          )}
        </button>
      </div>

      {/* Enhanced Search and Filters */}
      {!showForm && (
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <FiFilter className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-heading font-semibold text-gray-900">Search & Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                Search Technologies
              </label>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, excerpt, or category..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-body transition-all"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className={`w-full px-4 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-primary font-body font-semibold transition-all appearance-none cursor-pointer ${
                  filterCategory === 'All'
                    ? 'border-gray-300 bg-white text-gray-700'
                    : 'border-primary bg-primary/5 text-primary'
                }`}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                Publication Status
              </label>
              <select
                value={filterPublished}
                onChange={(e) => setFilterPublished(e.target.value)}
                className={`w-full px-4 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-primary font-body font-semibold transition-all appearance-none cursor-pointer ${
                  filterPublished === 'All'
                    ? 'border-gray-300 bg-white text-gray-700'
                    : 'border-primary bg-primary/5 text-primary'
                }`}
              >
                <option value="All">All Status</option>
                <option value="Published">✓ Published</option>
                <option value="Draft">✎ Draft</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600 font-body">
              Showing <span className="font-semibold text-primary">{filteredTechnologies.length}</span> of <span className="font-semibold">{technologies.length}</span> technologies
            </div>
            {(searchQuery || filterCategory !== 'All' || filterPublished !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterCategory('All');
                  setFilterPublished('All');
                }}
                className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
              >
                <FiX className="w-4 h-4" />
                Clear Filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
            {editingId ? 'Edit Technology' : 'Add New Technology'}
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
                  placeholder="e.g., React, Node.js, Python"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                />
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                >
                  {TECHNOLOGY_CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
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
                placeholder="Short description of the technology"
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
                placeholder="Detailed information about the technology (HTML tags supported)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body font-mono text-sm"
              />
            </div>

            <ImageUpload
              currentImage={formData.image_url}
              onImageUpload={(url) => setFormData({ ...formData, image_url: url })}
              bucket="technologies-images"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                  Icon Name (optional)
                </label>
                <input
                  type="text"
                  value={formData.icon || ''}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  placeholder="e.g., SiReact"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                />
                <p className="text-xs text-gray-500 mt-1">React Icons name (for future use)</p>
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                  Display Priority
                </label>
                <input
                  type="number"
                  value={formData.display_priority || ''}
                  onChange={(e) => setFormData({ ...formData, display_priority: e.target.value ? parseInt(e.target.value) : null })}
                  placeholder="Optional: lower = higher priority"
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
        ) : filteredTechnologies.length === 0 ? (
          <div className="p-8 text-center text-gray-600 font-body">No technologies found. Create your first one!</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-body font-medium text-gray-700 uppercase">Technology</th>
                  <th className="px-6 py-3 text-left text-xs font-body font-medium text-gray-700 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-body font-medium text-gray-700 uppercase">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-body font-medium text-gray-700 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-body font-medium text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTechnologies.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {item.image_url && (
                          <img src={item.image_url} alt="" className="w-12 h-12 object-contain rounded" />
                        )}
                        <div>
                          <div className="font-body font-medium text-gray-900">{item.title}</div>
                          <div className="font-body text-sm text-gray-500">{item.excerpt.substring(0, 60)}...</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-gray-700">{item.category}</td>
                    <td className="px-6 py-4 font-body text-sm text-gray-700">{item.display_priority || '-'}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${item.is_published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {item.is_published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => setPreviewTechnology(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 font-body transition-all"
                          title="Preview"
                        >
                          <FiEye className="w-4 h-4" />
                          <span className="hidden sm:inline">Preview</span>
                        </button>
                        <button
                          onClick={() => togglePublish(item.id, item.is_published)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-sm rounded-lg font-body transition-all ${item.is_published ? 'bg-orange-600 hover:bg-orange-700' : 'bg-green-600 hover:bg-green-700'}`}
                          title={item.is_published ? 'Unpublish' : 'Publish'}
                        >
                          {item.is_published ? <FiXCircle className="w-4 h-4" /> : <FiCheckCircle className="w-4 h-4" />}
                          <span className="hidden sm:inline">{item.is_published ? 'Unpublish' : 'Publish'}</span>
                        </button>
                        <button
                          onClick={() => handleEdit(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 font-body transition-all"
                          title="Edit"
                        >
                          <FiEdit2 className="w-4 h-4" />
                          <span className="hidden sm:inline">Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 font-body transition-all"
                          title="Delete"
                        >
                          <FiTrash2 className="w-4 h-4" />
                          <span className="hidden sm:inline">Delete</span>
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

      {/* Preview Modal */}
      {previewTechnology && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-heading font-semibold text-gray-900">Preview: {previewTechnology.title}</h3>
              <button
                onClick={() => setPreviewTechnology(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {previewTechnology.category}
                  </span>
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${previewTechnology.is_published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {previewTechnology.is_published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <h1 className="text-3xl font-heading font-bold text-primary mb-4">
                  {previewTechnology.title}
                </h1>
                <p className="font-body text-gray-600 italic mb-4">
                  {previewTechnology.excerpt}
                </p>
              </div>

              {previewTechnology.image_url && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={previewTechnology.image_url}
                    alt={previewTechnology.title}
                    className="max-w-sm h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none font-body">
                <div dangerouslySetInnerHTML={{ __html: previewTechnology.content }} />
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => setPreviewTechnology(null)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-body font-medium hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleEdit(previewTechnology);
                    setPreviewTechnology(null);
                  }}
                  className="px-6 py-2 bg-primary text-white rounded-md font-body font-medium hover:bg-primary/90 transition-colors"
                >
                  Edit This Technology
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologiesManagement;
