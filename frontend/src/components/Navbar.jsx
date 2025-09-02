import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            FreelanceHub
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 font-medium">
            <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link to="/post-project" className="hover:text-indigo-600 transition">Post Project</Link>
            <Link to="/messages" className="hover:text-indigo-600 transition">Messages</Link>
            <Link to="/dashboard" className="hover:text-indigo-600 transition">Dashboard</Link>
            <Link to="/contracts" className="hover:text-indigo-600 transition">Contracts</Link>
            <Link to="/project-data" className="hover:text-indigo-600 transition">Projects</Link>
            <Link to="/login" className="hover:text-indigo-600 transition">Login</Link>
            <Link to="/register" className="hover:text-indigo-600 transition">Register</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-4 space-y-3">
          <Link to="/" className="block hover:text-indigo-600 transition">Home</Link>
          <Link to="/post-project" className="block hover:text-indigo-600 transition">Post Project</Link>
          <Link to="/messages" className="block hover:text-indigo-600 transition">Messages</Link>
          <Link to="/dashboard" className="block hover:text-indigo-600 transition">Dashboard</Link>
          <Link to="/contracts" className="block hover:text-indigo-600 transition">Contracts</Link>
          <Link to="/project-data" className="block hover:text-indigo-600 transition">Projects</Link>
          <Link to="/login" className="block hover:text-indigo-600 transition">Login</Link>
          <Link to="/register" className="block hover:text-indigo-600 transition">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
