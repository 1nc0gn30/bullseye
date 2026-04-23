import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldAlert, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end border-b border-white/10 pb-20 mb-20">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter"
            >
              READY TO <span className="text-accent italic">GUARANTEE</span> YOUR ROI?
            </motion.h2>
            <p className="text-gray-400 text-2xl mb-12 max-w-xl">
              Don't spend another f****** dime on generic lists. Get the precision your team deserves.
            </p>
            <Link to="/laser" className="million-dollar-gradient text-white px-12 py-6 rounded-2xl text-2xl font-black bouncy-hover bounce-shadow flex items-center justify-center gap-4 group uppercase italic w-fit">
              SIGN UP OR KEEP LOSING MONEY
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-4 p-6 glass-card bg-white/5 border-white/10">
              <Zap className="text-accent w-8 h-8 shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">Instant Setup</h4>
                <p className="text-gray-400">Connect your account and start finding real humans in under 5 minutes.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 glass-card bg-white/5 border-white/10">
              <ShieldAlert className="text-danger w-8 h-8 shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">99.9% Spam Protection</h4>
                <p className="text-gray-400">Our AI filters out the 'I don't give a f***' profiles automatically.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          <Link to="/" className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
            <Logo className="scale-75 origin-left" />
            <span className="ml-2">SYSTEM © 2026 — STOP GUESSING. START WINNING.</span>
          </Link>
          
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Integrations</a>
            <a href="#" className="hover:text-white transition-colors">API</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
          
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Verified by high-performers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
