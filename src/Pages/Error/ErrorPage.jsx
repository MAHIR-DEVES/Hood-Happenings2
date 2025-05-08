import React from 'react';
import { FaHome } from 'react-icons/fa';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    // Error from loader/action like 404 or 401
    return (
      <div className="min-h-screen flex  justify-center items-center text-center">
        <div className="bg-white px-50 py-15">
          <h1 className="font-bold text-4xl">
            {error.status} - {error.statusText}
          </h1>

          <p className="font-semibold text-xl">
            {error.data?.message || 'Something went wrong.'}
          </p>
          <button onClick={() => navigate('/')} className="btn w-full mt-10">
            Back To Home <FaHome size={20}></FaHome>
          </button>
        </div>
      </div>
    );
  }

  // General error (e.g. JS runtime or network)
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <pre>{error.message || JSON.stringify(error)}</pre>
    </div>
  );
};

export default ErrorPage;
