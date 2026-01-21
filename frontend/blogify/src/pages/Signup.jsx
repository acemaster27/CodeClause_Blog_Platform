import { useState } from 'react';
import { authService } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(form.fullName, form.email, form.password);
      navigate('/login');
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
        
        <input 
          className="w-full mb-4 p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none" 
          placeholder="Full Name" 
          onChange={(e) => setForm({...form, fullName: e.target.value})} 
        />
        <input 
          className="w-full mb-4 p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none" 
          type="email" placeholder="Email" 
          onChange={(e) => setForm({...form, email: e.target.value})} 
        />
        <input 
          className="w-full mb-6 p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none" 
          type="password" placeholder="Password" 
          onChange={(e) => setForm({...form, password: e.target.value})} 
        />
        
        <button className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;