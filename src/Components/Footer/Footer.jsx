import React from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';
import './footer.css';
import Swal from 'sweetalert2';

const Footer = () => {
  const { user } = React.useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-indigo-400'
              : 'hover:text-indigo-300 transition-colors'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-indigo-400'
              : 'hover:text-indigo-300 transition-colors'
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? 'text-indigo-400'
              : 'hover:text-indigo-300 transition-colors'
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-indigo-400'
              : 'hover:text-indigo-300 transition-colors'
          }
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? 'text-indigo-400 border '
                : 'hover:text-indigo-300 transition-colors '
            }
          >
            Profile
          </NavLink>
        </li>
      )}
    </>
  );

  const handelSubscribe = () => {
    Swal.fire({
      title: 'Your Subscribe Successfully Done!',
      icon: 'success',
      draggable: true,
    });
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex justify-center items-center py-5">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white md:text-center">
              Quick Links
            </h3>
            <ul className="space-y-2 flex gap-7 md:gap-10 lg:gap-20 ">
              {links}
            </ul>
          </div>
        </div>
        <div className="md:flex md:justify-around md:items-center gap-8 md:py-9">
          {/* Social Media */}
          <div className="space-y-4 mb-10 md:mb-0">
            <h3 className="text-lg font-semibold text-white">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                to="https://twitter.com/"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                target="_blank"
                to="https://www.youtube.com/"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </Link>
              <Link
                target="_blank"
                to="https://www.facebook.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                target="_blank"
                to="https://www.instagram.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm">
              Subscribe to get updates on upcoming events
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 bg-white"
              />
            </div>
            <button
              onClick={handelSubscribe}
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} Hood Happenings - All rights
            reserved
          </p>
        </div>
        <div className="h-20 bg-purple-700 mt-16 rounded-t-xl text-2xl text-white flex items-center justify-center">
          <h2 className="font-bold" style={{ fontFamily: '-moz-initial' }}>
            Hood Happenings{' '}
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
