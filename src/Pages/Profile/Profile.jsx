import React from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Profile = () => {
  TabTitle('Hood Happenings | Profile');
  const { user, setUser, updateUser2 } = React.useContext(AuthContext);

  const handleUpdateProfile = e => {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const photoURL = document.querySelector(
      'input[placeholder="Photo URL"]'
    ).value;

    if (!name || !photoURL) {
      toast.error("Name and Photo URL can't be empty!");
      return;
    }

    updateUser2({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        Swal.fire({
          title: 'Profile updated successfully!',
          icon: 'success',
          draggable: true,
        });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
            <div className="relative mx-auto w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={user?.photoURL || 'https://via.placeholder.com/150'}
                alt="User Profile"
                onError={e => {
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {user?.displayName || 'User'}
            </h2>
            <p className="text-blue-100">{user?.email}</p>
          </div>

          {/* Profile Form */}
          <div className="p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Edit Profile
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    defaultValue={user?.displayName || ''}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Picture URL
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    defaultValue={user?.photoURL || ''}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                onClick={handleUpdateProfile}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
