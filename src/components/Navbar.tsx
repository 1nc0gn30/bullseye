import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3"
      >
        <Link to="/" className="bouncy-hover">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          <Link to="/" className="hover:text-accent transition-colors">The Waste</Link>
          <Link to="/laser" className="hover:text-accent transition-colors">The Laser</Link>
          <a href="/#results" className="hover:text-accent transition-colors">Results</a>
        </div>

        <button 
          onClick={onCtaClick}
          className="million-dollar-gradient text-white px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 bouncy-hover bounce-shadow group uppercase italic"
        >
          Stop Wasting Time
          <Zap className="w-4 h-4 fill-white text-white group-hover:scale-125 transition-transform" />
        </button>
      </motion.div>
    </nav>
  );
}
