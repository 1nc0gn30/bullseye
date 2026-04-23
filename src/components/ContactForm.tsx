import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg glass-card p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -mr-16 -mt-16" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors text-gray-400 hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-2">
                UN-F*** YOUR <span className="text-accent">PIPELINE</span>
              </h2>
              <p className="text-gray-500 font-medium mb-8">
                Stop guessing. Give us your details and we'll show you how to stop wasting money.
              </p>

              <form 
                name="bullseye-signup" 
                method="POST" 
                data-netlify="true" 
                className="space-y-6"
              >
                {/* Netlify hidden input for form name */}
                <input type="hidden" name="form-name" value="bullseye-signup" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Work Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="john@company.com" 
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Current Pain Point</label>
                  <textarea 
                    name="message" 
                    rows={3} 
                    placeholder="Tell us why your pipeline is currently garbage..." 
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-medium resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full million-dollar-gradient text-white py-5 rounded-2xl font-black text-lg uppercase italic bouncy-hover bounce-shadow flex items-center justify-center gap-3 group"
                >
                  GET THE PRECISION
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
