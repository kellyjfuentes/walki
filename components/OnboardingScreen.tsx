
import React, { useState, useEffect } from 'react';
import WalkiLogo from './icons/WalkiLogo';

interface OnboardingScreenProps {
  onLoginSuccess: () => void;
}

const images = [
  "https://picsum.photos/800/600?image=1043",
  "https://picsum.photos/800/600?image=1050",
  "https://picsum.photos/800/600?image=200",
  "https://picsum.photos/800/600?image=10"
];

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onLoginSuccess }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [authMode, setAuthMode] = useState<'none' | 'login' | 'register'>('none');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const renderForm = () => {
    if (authMode === 'none') return null;

    const commonInputClasses = "w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all";
    const commonButtonClasses = "w-full py-3 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-transform transform hover:scale-105";

    return (
      <div className="w-full mt-8 p-6 bg-white rounded-3xl shadow-lg animate-slideUp">
        <div className="flex justify-around mb-6 border-b">
          <button 
            onClick={() => setAuthMode('login')} 
            className={`w-1/2 pb-3 font-semibold transition-colors ${authMode === 'login' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}
          >
            Iniciar sesión
          </button>
          <button 
            onClick={() => setAuthMode('register')} 
            className={`w-1/2 pb-3 font-semibold transition-colors ${authMode === 'register' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}
          >
            Regístrate
          </button>
        </div>

        {authMode === 'login' ? (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLoginSuccess(); }}>
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">¡Bienvenido de nuevo!</h2>
            <input type="email" placeholder="Correo electrónico" className={commonInputClasses} required />
            <input type="password" placeholder="Contraseña" className={commonInputClasses} required />
            <button type="submit" className={commonButtonClasses}>Iniciar sesión</button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLoginSuccess(); }}>
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Crea una cuenta</h2>
            <input type="text" placeholder="Nombre de usuario" className={commonInputClasses} required />
            <input type="email" placeholder="Correo electrónico" className={commonInputClasses} required />
            <input type="password" placeholder="Crear contraseña" className={commonInputClasses} required />
            <button type="submit" className={commonButtonClasses}>Registrarse</button>
          </form>
        )}
        <div className="text-center my-4 text-gray-400">o</div>
        <div className="flex justify-center space-x-4">
          <button className="w-12 h-12 bg-gray-200 rounded-full"></button>
          <button className="w-12 h-12 bg-gray-200 rounded-full"></button>
          <button className="w-12 h-12 bg-gray-200 rounded-full"></button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="relative h-1/2 w-full">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt="Hiking scenery"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
         <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <div key={index} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentImage ? 'bg-white scale-125' : 'bg-white/50'}`}></div>
          ))}
        </div>
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center p-6 -mt-10">
        <div className="relative z-10 w-full max-w-sm text-center">
            <WalkiLogo className="w-40 h-auto text-green-700 mx-auto" />
            <p className="text-gray-600 mt-1 text-md">Tu compañero de montaña</p>
            
            {authMode === 'none' ? (
                <div className="mt-8 space-y-4 animate-fadeIn">
                    <button onClick={() => setAuthMode('login')} className="w-full py-3 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-transform transform hover:scale-105">Iniciar sesión</button>
                    <button onClick={() => setAuthMode('register')} className="w-full py-3 bg-white text-green-700 font-bold border-2 border-green-700 rounded-full hover:bg-green-50 transition-transform transform hover:scale-105">Regístrate</button>
                </div>
            ) : renderForm()}
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
