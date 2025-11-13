import { onboardingImages } from './data.js';
import { initMap } from './map.js';
import { SplashScreen } from './templates/SplashScreen.js';
import { OnboardingScreen, OnboardingForm } from './templates/OnboardingScreen.js';
import { MainApp, renderBottomNav } from './templates/MainApp.js';
import { renderExploreContent, renderMapWidget } from './templates/ExploreScreen.js';

// --- STATE ---
let appState = 'splash'; // 'splash', 'onboarding', 'loggedIn'
let activeScreen = 'Inicio'; // 'Inicio', 'Explorar', etc.
let onboardingState = {
    currentImage: 0,
    authMode: 'none' // 'none', 'login', 'register'
};
let userLocation = null;
let locationError = null;

const root = document.getElementById('root');

// --- RENDER FUNCTIONS ---
function render() {
  if (appState === 'splash') {
    root.innerHTML = SplashScreen();
  } else if (appState === 'onboarding') {
    root.innerHTML = OnboardingScreen(onboardingState);
    addOnboardingListeners();
  } else if (appState === 'loggedIn') {
    root.innerHTML = MainApp();
    document.getElementById('app-container').style.display = 'block';
    renderBottomNav(activeScreen);
    renderActiveScreen();
    addNavListeners();
  }
}

function renderOnboardingForm() {
  const container = document.getElementById('auth-container');
  if (container) {
    container.innerHTML = OnboardingForm(onboardingState.authMode);
    addOnboardingListeners();
  }
}

function renderActiveScreen() {
  ['Inicio', 'Explorar', 'Medallas', 'Comunidad', 'Perfil'].forEach(screen => {
      const el = document.getElementById(`screen-${screen}`);
      if (el) el.style.display = screen === activeScreen ? 'block' : 'none';
  });

  if (activeScreen === 'Explorar') {
      renderExploreContent(userLocation, locationError, handleGetLocation);
      if(userLocation) initMap(userLocation);
  }
}

// --- LOGIC & EVENT HANDLERS ---
function handleLoginSuccess() {
  appState = 'loggedIn';
  activeScreen = 'Inicio';
  render();
}

function addOnboardingListeners() {
  document.getElementById('show-login-btn')?.addEventListener('click', () => { onboardingState.authMode = 'login'; renderOnboardingForm(); });
  document.getElementById('show-register-btn')?.addEventListener('click', () => { onboardingState.authMode = 'register'; renderOnboardingForm(); });
  document.getElementById('tab-login-btn')?.addEventListener('click', () => { onboardingState.authMode = 'login'; renderOnboardingForm(); });
  document.getElementById('tab-register-btn')?.addEventListener('click', () => { onboardingState.authMode = 'register'; renderOnboardingForm(); });
  document.getElementById('login-form')?.addEventListener('submit', (e) => { e.preventDefault(); handleLoginSuccess(); });
  document.getElementById('register-form')?.addEventListener('submit', (e) => { e.preventDefault(); handleLoginSuccess(); });
}

function addNavListeners() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      activeScreen = item.dataset.screen;
      renderBottomNav(activeScreen);
      renderActiveScreen();
      addNavListeners(); // Re-add listeners to the new nav
    });
  });
}

function handleGetLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = position;
                locationError = null;
                renderMapWidget(userLocation, locationError, handleGetLocation);
                initMap(userLocation);
            },
            (err) => {
                locationError = `Error: ${err.message}`;
                renderMapWidget(userLocation, locationError, handleGetLocation);
            }
        );
    } else {
        locationError = "La geolocalización no es soportada.";
        renderMapWidget(userLocation, locationError, handleGetLocation);
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  render(); // Initial render of splash screen
  
  setTimeout(() => {
    appState = 'onboarding';
    render();
    
    let imageInterval = setInterval(() => {
      if (appState !== 'onboarding') {
        clearInterval(imageInterval);
        return;
      }
      onboardingState.currentImage = (onboardingState.currentImage + 1) % onboardingImages.length;
      const images = document.querySelectorAll('.onboarding-image');
      const dots = document.querySelectorAll('#onboarding-dots > div');
      images.forEach((img, idx) => {
        img.classList.toggle('opacity-100', idx === onboardingState.currentImage);
        img.classList.toggle('opacity-0', idx !== onboardingState.currentImage);
      });
      dots.forEach((dot, idx) => {
          dot.className = `w-2.5 h-2.5 rounded-full transition-all ${idx === onboardingState.currentImage ? 'bg-white scale-125' : 'bg-white/50'}`;
      });
    }, 4000);

  }, 2000);
});
