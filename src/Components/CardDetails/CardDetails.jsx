import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import Swal from 'sweetalert2';

const CardDetails = () => {
  TabTitle('Hood Happenings | Event Details');
  const { id } = useParams();
  const data = useLoaderData();

  const [card, setCard] = useState({});
  const { thumbnail, name, category, date, location, entry_fee, description } =
    card;

  useEffect(() => {
    const cardDetails = data.find(singleCard => singleCard.id == id);
    setCard(cardDetails);
  }, [data, id]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 lg:px-4 sm:px-6 ">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Event Image */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={thumbnail}
              alt={name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {name}
              </h1>
              <p className="text-white/90">{category}</p>
            </div>
          </div>

          {/* Event Details */}
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Event Details
                  </h2>
                  <div className="mt-2 space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {date}
                    </p>
                    <p className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {location}
                    </p>
                    <p className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Entry Fee: {entry_fee}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Description
                  </h2>
                  <p className="mt-2 text-gray-700">{description}</p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Book Your Spot
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <button
                  onClick={() => {
                    Swal.fire({
                      title: 'Your Booking Successful !',
                      icon: 'success',
                      draggable: true,
                    });
                  }}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Reserve Seat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
