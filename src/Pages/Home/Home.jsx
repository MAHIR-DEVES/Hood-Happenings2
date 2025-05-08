import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';

const Home = () => {
  TabTitle('Hood Happenings | Home');
  const data = useLoaderData();

  return (
    <div className="bg-gray-50">
      <Slider />

      <section className="py-12 lg:px-4 sm:px-6  lg:w-10/12 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
            Restaurants Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events Section
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the most exciting restaurant events in your area
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map(card => (
            <Cards card={card} key={card.id} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
            View All Events
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
      <div className="relative my-10 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co.com/9995hrR2/images-2.jpg"
            alt="Tech background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center  p-8">
          <div className="lg:flex items-center">
            <div className="max-w-4xl w-full">
              {/* Date */}
              <div className="text-red-500 font-mono text-lg mb-2 tracking-widest">
                May 15-18, 2023
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-7xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="block text-white">LIVEWORX</span>
                <span className="block text-red-500">IS BACK</span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl leading-relaxed">
                Save the code for WTCs preview errands over dedicated to digital
                transformation for the hydraulic enterprise. Learn how you can
                create enterprise value, empower greater worker productivity,
                and make the world a better place through advanced technology.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button className="bg-red-600 hover:bg-red-700 text-white py-4 px-8 text-lg font-bold transition-all duration-300 transform hover:scale-105">
                  Sign Up For Arrangements →
                </button>
              </div>

              {/* Call for Papers */}
              <div className="border-t border-gray-700 pt-6">
                <p className="text-red-500 font-bold text-lg tracking-wider">
                  CALL FOR PAPERS IS OPEN
                </p>
                <p className="text-gray-300 font-mono">
                  Submit your Presentation/Installed
                </p>
              </div>
            </div>
            <div className="">
              <img
                className="lg:w-4xl"
                src="https://i.ibb.co.com/Q7SXpsDZ/Untitled-design-4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
