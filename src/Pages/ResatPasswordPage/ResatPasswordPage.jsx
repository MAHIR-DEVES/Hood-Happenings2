import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { useSearchParams } from 'react-router';

const ResetPasswordPage = () => {
  TabTitle('Hood Happenings | Reset Password');
  const { resetPassword, user } = React.useContext(AuthContext);
  const emailRef = useRef();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const emailFromQuery = searchParams.get('email');
    if (emailFromQuery) {
      setEmail(emailFromQuery);
    }
  }, [searchParams]);

  const handleForgotPassword = e => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success('Password reset email sent! Check your inbox');
      })
      .catch(error => {
        toast.error(error.message);
      });
    window.open('https://mail.google.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Reset Password
            </h1>
            <p className="text-gray-600">
              Enter your email to receive a password reset link
            </p>
          </div>

          <form onSubmit={handleForgotPassword} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  ref={emailRef}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="your@email.com"
                />
                <FiMail className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Remember your password?{' '}
            <a
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              Sign in
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPasswordPage;
