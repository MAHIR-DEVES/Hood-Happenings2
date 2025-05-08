import React from 'react';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { motion } from 'framer-motion';

const About = () => {
  TabTitle('Hood Happenings | About');
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-indigo-800 mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>

        <div className="lg:flex gap-5 py-3 lg:py-10">
          <img
            className="rounded-xl "
            src="https://i.ibb.co.com/spJ5XzMG/istockphoto-499517325-612x612.jpg"
            alt=""
          />
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg  "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4 text-center">
              Our Mission: Creating Unforgettable Experiences
            </h2>
            <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto">
              We believe not just in hosting events, but in creating meaningful
              connections. Growing better means aligning the success of your
              event with the joy of your guests. Win-win!
            </p>

            <button className="border-2 border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-xl hover:bg-indigo-50 transition w-full mt-2 lg:mt-12">
              Explore More
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Creative Vision',
              text: 'We design every event like a masterpiece, blending aesthetics and innovation.',
              icon: '🎨',
            },
            {
              title: 'Flawless Execution',
              text: 'From logistics to ambiance, every detail is handled with care.',
              icon: '🛠️',
            },
            {
              title: 'Client-Centric',
              text: 'Your satisfaction is our mission. Every event is uniquely yours.',
              icon: '🤝',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-indigo-600 text-white py-8 px-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-center">
            Let's Make Your Next Event Unforgettable
          </h2>
          <p className="mb-4 text-center">
            Ready to get started? Contact our team today!
          </p>
          <div className="text-center">
            <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
