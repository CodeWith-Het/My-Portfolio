import React from "react";
import { motion } from "framer-motion";
import App from "../../App.jsx";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-blue-500 drop-shadow-lg uppercase tracking-wide mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side Info */}
          <motion.div
            className="flex flex-col justify-center text-white space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold">Let’s Connect</h3>
            <p className="text-gray-300">
              Have a project in mind? Or just want to say hi? Drop me a
              message and let’s start something amazing together!
            </p>
            <div className="space-y-2">
              <p>📧 Email: <span className="text-blue-400">youremail@gmail.com</span></p>
              <p>📞 Phone: <span className="text-blue-400">+91 98765 43210</span></p>
              <p>📍 Location: <span className="text-blue-400">Ahmedabad, India</span></p>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
