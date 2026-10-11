import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Invasion } from './components/Invasion';
import { Ministries } from './components/Ministries';
import { Schedule } from './components/Schedule';
import { PrayerForm } from './components/PrayerForm';
import { Footer } from './components/Footer';

export function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  return (
    <div className="app-container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Mission />
        <Invasion />
        <Ministries />
        <Schedule />
        <PrayerForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
