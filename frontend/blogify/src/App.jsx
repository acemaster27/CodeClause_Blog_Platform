import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateBlog from './pages/CreateBlog';
import BlogDetail from './pages/BlogDetail';
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        
        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/create" element={<CreateBlog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;