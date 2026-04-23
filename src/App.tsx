import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Laser from './pages/Laser';
import ContactForm from './components/ContactForm';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-accent selection:text-white">
        <Navbar onCtaClick={() => setIsContactOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home onCtaClick={() => setIsContactOpen(true)} />} />
            <Route path="/laser" element={<Laser />} />
          </Routes>
        </main>
        <Footer onCtaClick={() => setIsContactOpen(true)} />
        <ContactForm 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
      </div>
    </BrowserRouter>
  );
}
