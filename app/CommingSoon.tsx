import React from "react";
import { FaInstagram } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-l from-gray-900 to-purple-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
          Coming Soon!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          We are working on something awesome. Stay tuned!
        </p>

        {/* Instagram handle with clickable icon */}
        <div className="flex items-center justify-center mb-4">
          <a
            href="https://www.instagram.com/workforclient/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl md:text-2xl lg:text-3xl text-white"
          >
            <FaInstagram className="h-8 md:h-10 lg:h-12 mr-2" />
            @workforclient
          </a>
        </div>

        <p className="text-sm opacity-50">Follow us on Instagram for updates</p>

        {/* Optionally, add a countdown timer */}
        {/* <div className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">Countdown Timer</div> */}

        {/* Add other content as needed */}
      </div>
    </div>
  );
};

export default ComingSoon;
