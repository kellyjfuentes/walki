
import React from 'react';
import WalkiLogo from './icons/WalkiLogo';

const SplashScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white animate-fadeIn">
      <div className="text-center">
        <WalkiLogo className="w-48 h-auto text-green-700 mx-auto" />
        <p className="text-gray-600 mt-2 text-lg">Tu compañero de montaña</p>
      </div>
    </div>
  );
};

export default SplashScreen;
