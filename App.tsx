
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import OnboardingScreen from './components/OnboardingScreen';
import ExploreScreen from './components/ExploreScreen';
import ProfileScreen from './components/ProfileScreen';
import BottomNav from './components/BottomNav';
import { AppScreen } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<'splash' | 'onboarding' | 'loggedIn'>('splash');
  const [activeScreen, setActiveScreen] = useState<AppScreen>('Inicio');

  useEffect(() => {
    if (appState === 'splash') {
      const timer = setTimeout(() => setAppState('onboarding'), 2000);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  const handleLogin = () => {
    setAppState('loggedIn');
    setActiveScreen('Inicio');
  };

  const renderContent = () => {
    switch (activeScreen) {
      case 'Inicio':
        return <ProfileScreen />;
      case 'Explorar':
        return <ExploreScreen />;
      case 'Medallas':
        return <div className="p-4 text-center">Medallas - Próximamente</div>;
      case 'Comunidad':
        return <div className="p-4 text-center">Comunidad - Próximamente</div>;
      case 'Perfil':
        return <ProfileScreen />; // Using profile screen for Inicio and Perfil
      default:
        return <ProfileScreen />;
    }
  };

  if (appState === 'splash') {
    return <SplashScreen />;
  }

  if (appState === 'onboarding') {
    return <OnboardingScreen onLoginSuccess={handleLogin} />;
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased w-full max-w-md mx-auto shadow-lg relative pb-20">
      <main className="overflow-y-auto">
        {renderContent()}
      </main>
      <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
};

export default App;
