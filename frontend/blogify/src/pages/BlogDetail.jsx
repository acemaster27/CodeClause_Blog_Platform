import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogService } from '../services/api';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    blogService.getOne(id)
      .then(res => setBlog(res.data.blog))
      .catch(err => console.error(err));
  }, [id]);



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
    </div>
  );
};

export default BlogDetail;