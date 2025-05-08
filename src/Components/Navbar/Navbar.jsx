import { NavLink, useLocation, useNavigate } from 'react-router';
import './navbar.css';
import { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, userLogout } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handelLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire({
          title: 'Google login successful!!',
          icon: 'success',
          draggable: true,
        });
      })
      .catch(error => {
        toast.error(error);
      });
  };

  return (
    <div className="px-2 lg:px-0 bg-[#2F2F2F] text-white shadow-sm py-5 md:py-6">
      <div className="flex justify-between items-center md:w-11/12 md:mx-auto">
        <div className="flex items-center ">
          <div className="dropdown mr-2">
            <div
              tabIndex={0}
              role="button"
              className=" lg:hidden cursor-pointer "
            >
              <GiHamburgerMenu size={29} />{' '}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#2F2F2F] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <button
            className="cursor-pointer text-xl"
            onClick={() => navigate('/')}
          >
            Hood Happenings
          </button>
        </div>
        {/* for mobile */}
        <div className=" hidden lg:flex ">
          <ul className="menu-horizontal px-1 navLink">{links}</ul>
        </div>
        <div className="flex  justify-between lg:hidden w-36 ">
          <div className="flex justify-center items-center ">
            {user && (
              <>
                <img
                  className="w-10 rounded-full mr-1"
                  src={user.photoURL || ''}
                  alt="Profile"
                  data-tooltip-id="mobile-profile-tooltip"
                  data-tooltip-content={user.displayName}
                />
                <Tooltip
                  id="mobile-profile-tooltip"
                  className="z-50 !bg-black !text-white !text-sm !px-3 !py-1 !rounded"
                />
              </>
            )}
          </div>
          <div className="flex justify-center items-center">
            {user ? (
              <button
                onClick={handelLogout}
                className="bg-indigo-600 font-medium py-1 px-3 rounded-lg transition duration-200 btn-sm text-white"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className={`bg-indigo-600 font-medium py-2 px-4 rounded-lg transition duration-200btn-sm ${
                  pathname === '/login' ? 'bg-indigo-600 text-white' : ''
                }`}
              >
                Login
              </button>
            )}
          </div>
        </div>
        <div className="flex hidden lg:flex">
          <div className="flex justify-center items-center gap-4 mr-5">
            {user && (
              <>
                <img
                  className="w-12 rounded-full"
                  src={user.photoURL || ''}
                  alt="Profile"
                  data-tooltip-id="desktop-profile-tooltip"
                  data-tooltip-content={user.displayName}
                />
                <Tooltip
                  id="desktop-profile-tooltip"
                  className="z-50 !bg-black !text-white !text-sm !px-3 !py-1 !rounded"
                />
              </>
            )}
          </div>
          <div>
            {user ? (
              <button
                onClick={handelLogout}
                className=" bg-indigo-600 font-medium py-2 px-4 rounded-lg transition "
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className={`bg-indigo-600 font-medium py-2 px-4 rounded-lg transition duration-200 ${
                  pathname === '/login' ? 'hover:bg-indigo-700 text-white' : ''
                }`}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
