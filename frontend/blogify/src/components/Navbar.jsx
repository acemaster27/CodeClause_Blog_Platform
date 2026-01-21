import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-white hover:text-gray-300">
          DevBlog
        </Link>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="hidden md:block text-gray-300">Welcome, {user.fullName}</span>
              <Link 
                to="/create" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
              >
                Write
              </Link>
              <button 
                onClick={logout} 
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">Login</Link>
              <Link 
                to="/signup" 
                className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;