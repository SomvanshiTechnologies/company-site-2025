import React, { useState } from 'react';
import { supabase } from '../../config/supabase';

const ImageUpload = ({ currentImage, onImageUpload, bucket }) => {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(currentImage || '');

  const handleFileUpload = async (event) => {
    try {
      setUploading(true);

      const file = event.target.files[0];
      if (!file) return;

      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      setImageUrl(publicUrl);
      onImageUpload(publicUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleUrlInput = (url) => {
    setImageUrl(url);
    onImageUpload(url);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-body font-medium text-gray-700 mb-2">
          Image
        </label>

        {/* File Upload */}
        <div className="mb-3">
          <label className="block">
            <span className="sr-only">Choose image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={uploading}
              className="block w-full text-sm text-gray-500 font-body
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-primary file:text-white
                file:cursor-pointer
                hover:file:bg-primary/90
                disabled:opacity-50"
            />
          </label>
          {uploading && (
            <p className="text-sm text-gray-600 font-body mt-2">Uploading...</p>
          )}
        </div>

        {/* URL Input */}
        <div className="mb-3">
          <label className="block text-xs font-body text-gray-600 mb-1">
            Or paste image URL:
          </label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => handleUrlInput(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent font-body text-sm"
          />
        </div>

        {/* Image Preview */}
        {imageUrl && (
          <div className="mt-3">
            <p className="text-xs font-body text-gray-600 mb-2">Preview:</p>
            <img
              src={imageUrl}
              alt="Preview"
              className="w-full max-w-md h-48 object-cover rounded-md border border-gray-300"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
