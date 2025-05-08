import React, { useState } from 'react';
import { FaHome, FaPhone } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import Swal from 'sweetalert2';

const ContactPage = () => {
  TabTitle('Hood Happenings | Contact ');
  const [setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    Swal.fire({
      title: 'Message submitted!',
      icon: 'success',
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 md:px-6 pb-12 flex flex-col justify-center">
      {/* Contact Info Cards Section */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-700 py-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-orange-500 text-4xl">
            <i className="fas fa-home">
              {' '}
              <FaHome size={50}></FaHome>
            </i>{' '}
            {/* Replace with a proper icon if using a library like Lucide */}
          </div>
          <h3 className="text-lg font-bold uppercase">Visit Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
          <p className="text-orange-600 font-semibold">
            2 Elizabeth, London, UK
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="text-orange-500 text-4xl">
            <i className="fas fa-phone-alt">
              {' '}
              <IoMdCall size={50} />
            </i>
          </div>
          <h3 className="text-lg font-bold uppercase">Call Us</h3>
          <p>Bibendum bibendum quis sit amet monderim.</p>
          <p className="text-orange-600 font-semibold">+44 (0) 203 116 7711</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="text-orange-500 text-4xl">
            <i className="fas fa-envelope">
              {' '}
              <HiOutlineMail size={50} />
            </i>
          </div>
          <h3 className=" text-xl md:text-lg font-bold uppercase">
            Contact Us
          </h3>
          <p>Donec leo nunc, tincidunt sed consectetur vel.</p>
          <p className="text-orange-600 font-semibold">noreply@noland.com</p>
        </div>
      </div>
      {/*  */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact us</h1>
          <p className="text-gray-600 text-lg">
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the{' '}
            <a
              href="mailto:support@example.com"
              className="text-purple-600 underline"
            >
              department email
            </a>{' '}
            you'd like to contact below.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                required
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="What can we help you with?"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Purple footer bar mimic */}
      <div className="h-20 bg-purple-700 mt-16 rounded-t-xl text-2xl text-white flex items-center justify-center">
        <h2 className="font-bold" style={{ fontFamily: '-moz-initial' }}>
          Hood Happenings{' '}
        </h2>
      </div>
    </div>
  );
};

export default ContactPage;
