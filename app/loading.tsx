import React from 'react';

const Loading = () => {
  return (
    <div className="flex min-h-screen pt-10 flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Animated Glow Ring */}
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing glow */}
        <div className="absolute h-24 w-24 rounded-full bg-sky-500/30 blur-2xl animate-pulse"></div>

        {/* Spinning gradient ring */}
        <div className="h-20 w-20 rounded-full border-4 border-slate-700 border-t-sky-400 border-r-cyan-400 animate-spin"></div>

        {/* Inner dot */}
        <div className="absolute h-3 w-3 rounded-full bg-sky-400 animate-ping"></div>
      </div>

      {/* Loading Text */}
      <h2 className="mt-8 text-lg font-semibold tracking-widest text-slate-200 uppercase">
        Loading
        <span className="animate-pulse">...</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-2 text-sm text-slate-500">
        Preparing something amazing ✨
      </p>

      {/* Progress Dots */}
      <div className="mt-6 flex space-x-2">
        <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce [animation-delay:-0.3s]"></span>
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]"></span>
        <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce"></span>
      </div>
    </div>
  );
};

export default Loading;