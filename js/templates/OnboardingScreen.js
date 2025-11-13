import { WalkiLogo } from '../icons.js';
import { onboardingImages } from '../data.js';

export const OnboardingScreen = (onboardingState) => `
  <div id="onboarding-screen" class="min-h-screen bg-gray-50 flex flex-col">
    <div class="relative h-1/2 w-full">
      ${onboardingImages.map((img, index) => `
        <img 
          src="${img}" 
          alt="Hiking scenery"
          class="onboarding-image absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === onboardingState.currentImage ? 'opacity-100' : 'opacity-0'}"
        />`).join('')}
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>
      <div id="onboarding-dots" class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        ${onboardingImages.map((_, index) => `<div class="w-2.5 h-2.5 rounded-full transition-all ${index === onboardingState.currentImage ? 'bg-white scale-125' : 'bg-white/50'}"></div>`).join('')}
      </div>
    </div>
    <div class="flex-grow flex flex-col items-center justify-center p-6 -mt-10">
      <div class="relative z-10 w-full max-w-sm text-center">
        ${WalkiLogo("w-40 h-auto text-green-700 mx-auto")}
        <p class="text-gray-600 mt-1 text-md">Tu compañero de montaña</p>
        <div id="auth-container">
          ${OnboardingForm(onboardingState.authMode)}
        </div>
      </div>
    </div>
  </div>`;

export const OnboardingForm = (authMode) => {
    if (authMode === 'none') return `
      <div class="mt-8 space-y-4 animate-fadeIn">
          <button id="show-login-btn" class="w-full py-3 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-transform transform hover:scale-105">Iniciar sesión</button>
          <button id="show-register-btn" class="w-full py-3 bg-white text-green-700 font-bold border-2 border-green-700 rounded-full hover:bg-green-50 transition-transform transform hover:scale-105">Regístrate</button>
      </div>
    `;

    const commonInputClasses = "w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all";
    const commonButtonClasses = "w-full py-3 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-transform transform hover:scale-105";

    return `
      <div class="w-full mt-8 p-6 bg-white rounded-3xl shadow-lg animate-slideUp">
        <div class="flex justify-around mb-6 border-b">
          <button id="tab-login-btn" class="w-1/2 pb-3 font-semibold transition-colors ${authMode === 'login' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}">Iniciar sesión</button>
          <button id="tab-register-btn" class="w-1/2 pb-3 font-semibold transition-colors ${authMode === 'register' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}">Regístrate</button>
        </div>
        ${authMode === 'login' ? `
          <form id="login-form" class="space-y-4">
            <h2 class="text-xl font-bold text-center text-gray-800 mb-4">¡Bienvenido de nuevo!</h2>
            <input type="email" placeholder="Correo electrónico" class="${commonInputClasses}" required />
            <input type="password" placeholder="Contraseña" class="${commonInputClasses}" required />
            <button type="submit" class="${commonButtonClasses}">Iniciar sesión</button>
          </form>
        ` : `
          <form id="register-form" class="space-y-4">
            <h2 class="text-xl font-bold text-center text-gray-800 mb-4">Crea una cuenta</h2>
            <input type="text" placeholder="Nombre de usuario" class="${commonInputClasses}" required />
            <input type="email" placeholder="Correo electrónico" class="${commonInputClasses}" required />
            <input type="password" placeholder="Crear contraseña" class="${commonInputClasses}" required />
            <button type="submit" class="${commonButtonClasses}">Registrarse</button>
          </form>
        `}
        <div class="text-center my-4 text-gray-400">o</div>
        <div class="flex justify-center space-x-4">
          <button class="w-12 h-12 bg-gray-200 rounded-full"></button>
          <button class="w-12 h-12 bg-gray-200 rounded-full"></button>
          <button class="w-12 h-12 bg-gray-200 rounded-full"></button>
        </div>
      </div>`;
};
