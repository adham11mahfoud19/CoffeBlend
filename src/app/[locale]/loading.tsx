// Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-24 h-24 border-8 border-brown rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;