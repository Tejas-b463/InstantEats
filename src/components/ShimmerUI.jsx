import React from 'react'

const ShimmerUI = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md my-4 animate-pulse">
    {/* Shimmer Effect for Image */}
    <div className="w-full h-40 md:h-48 lg:h-56 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></div>

    {/* Card Content with Shimmer Effect */}
    <div className="p-6">
      {/* Shimmer Effect for Title */}
      <div className="h-6 md:h-8 lg:h-10 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 w-3/4 mb-4"></div>

      {/* Shimmer Effect for Description */}
      <div className="h-4 md:h-6 lg:h-8 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 w-1/2 mb-4"></div>

      {/* Shimmer Effect for Action Button */}
      <div className="h-8 md:h-10 lg:h-12 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 w-1/3"></div>
    </div>
  </div>

  

    );
  };
  
 

export default ShimmerUI