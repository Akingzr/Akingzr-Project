import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-video bg-gradient-to-r from-gray-700/50 to-gray-600/50 animate-pulse"></div>
      
      {/* Content skeleton */}
      <div className="p-3 space-y-2">
        {/* Tag skeleton */}
        <div className="h-4 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-full w-12 animate-pulse"></div>
        
        {/* Title skeleton */}
        <div className="h-4 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded w-3/4 animate-pulse"></div>
        
        {/* Client skeleton */}
        <div className="h-3 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader; 