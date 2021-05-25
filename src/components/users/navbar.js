import React from 'react';
import '../../App.css';
import Harbin from '../../img/Harbin.png';

export default function NavBar() {
  return (
    <div>
      <div class="flex justify-between items-center pr-4 pl-4 pt-2 pb-2 bg-white ">
        <a href="/">
          <div class="flex items-center space-x-2">
            <div class="w-7 h-7 ">
              <img src={Harbin} alt="logo" />
            </div>
            <div class="text-lg leading-6 font-semibold text-gray-900">
              Harbin Brasil
            </div>
          </div>
        </a>

        <div class="flex">
          <div class="text-sm leading-5 font-semibold text-gray-500 hover:text-gray-700">
            <a href="/about">About</a>
          </div>
        </div>
      </div>
    </div>
  );
}
