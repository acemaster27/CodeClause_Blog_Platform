import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogService } from '../services/api';
import { useAuth } from '../context/AuthContext';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    blogService.getOne(id)
      .then(res => setBlog(res.data.blog))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = async () => {
    if(!window.confirm("Are you sure?")) return;
    try {
      await blogService.delete(id);
      navigate('/');
    } catch (err) {
      alert("Failed to delete");
    }
  };

  if (!blog) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {blog.coverImage && (
         <img src={blog.coverImage} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-8 shadow-md"/>
      )}
      
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{blog.title}</h1>
      
      <div className="flex items-center space-x-4 mb-8 text-gray-500 text-sm border-b pb-4">
        <span>By <span className="font-semibold text-gray-700">{blog.createdBy?.fullName}</span></span>
        <span>•</span>
        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
        {blog.body}
      </div>

      {/* Show Delete button only if user owns the blog */}
      {user && user._id === blog.createdBy?._id && (
        <div className="mt-10 border-t pt-6 flex space-x-4">
           <button 
             onClick={handleDelete}
             className="bg-red-500 text-white px-6 py-2 rounded shadow hover:bg-red-600 transition"
           >
             Delete Blog
           </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;