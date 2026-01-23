import { useEffect, useState } from 'react';
import { blogService } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    blogService.getAll()
      .then(res => setBlogs(res.data.blogs || [])) 
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b pb-4">Latest Stories</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition duration-300">
             {blog.coverImage && (
               <img src={blog.coverImage} alt={blog.title} className="w-full h-48 object-cover"/>
             )}
             <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.body}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-500 font-medium">
                    By {blog.createdBy?.fullName || 'Anonymous'}
                  </span>
                  <Link 
                    to={`/blog/${blog._id}`} 
                    className="text-blue-600 font-semibold hover:underline text-sm"
                  >
                    Read More →
                  </Link>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;