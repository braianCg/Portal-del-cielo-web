import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useRevealObserver } from './hooks/useRevealObserver';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mision } from './components/Mision';
import { Invasion } from './components/Invasion';
import { Ministerios } from './components/Ministerios';
import { Encuentros } from './components/Encuentros';
import { OracionForm } from './components/OracionForm';
import { Footer } from './components/Footer';

function MainContent() {
  useRevealObserver();

  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Mision />
        <Invasion />
        <Ministerios />
        <Encuentros />
        <OracionForm />
      </main>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
