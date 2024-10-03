import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Your Company</h2>
          <p className="text-sm">1234 Street Address, City, State, 56789</p>
        </div>
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-6">
            <li>
              <Link to={"/"} className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4 border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
