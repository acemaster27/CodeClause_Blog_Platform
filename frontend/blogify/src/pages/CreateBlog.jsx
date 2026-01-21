import { useState } from 'react';
import { blogService } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const blogData = {
      title: title,
      body: body
    };

    try {
      await blogService.create(blogData);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Error creating blog');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Write a New Story</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
          <input 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            type="text" 
            placeholder="Enter a catchy title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-lg h-64 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
            placeholder="Tell your story..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
          Publish Story
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;