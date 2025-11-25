import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import infoimage from '.././assets/info.png';

const featureTags = [
  'Intelligent Systems',
  'Transformative Systems',
  'Impactful Systems',
];

const Info = () => {
  return (
    <div className=" bg-gray-50 py-16 sm:py-24">
      
      {/* Centering and padding container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main two-column grid
          - 'grid-cols-1' (mobile): Stacks vertically.
          - 'lg:grid-cols-2' (large screens): Side-by-side.
          - 'gap-16' (or 'gap-x-16 gap-y-10'): Spacing between columns/rows.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* --- Left Column: Text Content --- */}
          {/* The content box with the very pale lavender/pink background */}
          <div className="bg-purple-50 p-10 sm:p-12 lg:p-16 rounded-lg shadow-sm flex flex-col justify-between">
            <div>
              {/* Text Block 1 */}
              <p className="text-lg leading-8 text-gray-900">
                At Somvanshi Technologies, we help organizations embrace the
                power of AI to streamline operations, enhance customer
                experiences, and unlock new growth opportunities.
              </p>

              {/* Text Block 2 */}
              <p className="mt-6 text-lg leading-8 text-gray-900">
                Our expertise in AI automation, custom SaaS platforms, and
                digital transformation enables businesses to operate smarter,
                faster, and more efficiently.
              </p>
            </div>

            {/* Button */}
            <div className="mt-10">
              <a
                href="about"
                className="inline-block rounded-lg border-2 border-blue-500 px-8 py-3 text-base font-semibold text-blue-500 hover:bg-blue-50 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* --- Right Column: Image --- */}
          <div className="flex items-center justify-center group relative overflow-hidden rounded-lg">
            <div className="relative w-full h-full">
              <img
                src={infoimage}
                alt="Abstract 3D graphic with vibrant blue and purple flowing ribbons"
                className="w-full h-full object-cover rounded-lg transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2 shadow-md group-hover:shadow-2xl"
              />
              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Info;
