import { WalkiLogo } from '../icons.js';

export const SplashScreen = () => `
  <div id="splash-screen" class="flex flex-col items-center justify-center h-screen bg-white animate-fadeIn">
    <div class="text-center">
      ${WalkiLogo("w-48 h-auto text-green-700 mx-auto")}
      <p class="text-gray-600 mt-2 text-lg">Tu compañero de montaña</p>
    </div>
  </div>`;
