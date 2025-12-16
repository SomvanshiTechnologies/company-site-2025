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
    <div className="bg-white py-32 sm:py-40">

      {/* Centering and padding container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main two-column grid
          - 'grid-cols-1' (mobile): Stacks vertically.
          - 'lg:grid-cols-2' (large screens): Side-by-side.
          - 'gap-16' (or 'gap-x-16 gap-y-10'): Spacing between columns/rows.
        */}

        <div className="grid grid-cols-1 lg:grid-cols-[60%_35%] gap-12 lg:gap-16 items-stretch">
          {/* --- Left Column: Text Content --- */}
          {/* The content box with the very pale lavender/pink background */}
          <div className="bg-gray-50 p-12 sm:p-14 lg:p-16 rounded-xl flex flex-col justify-between border border-gray-200">
            <div className="space-y-6">
              {/* Text Block 1 */}
              <p className="text-lg leading-relaxed text-gray-900" style={{ lineHeight: '1.8' }}>
                At Somvanshi Technologies, we help organizations embrace the
                power of AI to streamline operations, enhance customer
                experiences, and unlock new growth opportunities.
              </p>

              {/* Text Block 2 */}
              <p className="text-lg leading-relaxed text-gray-900" style={{ lineHeight: '1.8' }}>
                Our expertise in AI automation, custom SaaS platforms, and
                digital transformation enables businesses to operate smarter,
                faster, and more efficiently.
              </p>
            </div>

            {/* Button */}
            <div className="mt-10">
              <a
                href="about"
                className="inline-block rounded-lg border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* --- Right Column: Image --- */}
          <div className="hidden lg:flex items-center justify-center group relative overflow-hidden rounded-lg">
            <div className="relative w-30px h-full">
              <img
                src={infoimage}
                alt="Abstract 3D graphic with vibrant blue and purple flowing ribbons"
                className="w-30px h-full object-cover rounded-lg"
              />
              {/* Overlay effect on hover */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Info;
