import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MousePointer2, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-6">
              No more ghosting
            </div>
            <h1 className="text-5xl md:text-[80px] font-black leading-[0.85] text-primary mb-8 tracking-tight uppercase">
              TIRED OF <br />WASTING YOUR <br/><span className="text-accent underline decoration-8">F****** MONEY?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-md mb-10 font-medium">
              LinkedIn is full of people who don't give a s*** about your pitch. We find the humans who actually answer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/laser" className="million-dollar-gradient text-white px-10 py-5 rounded-2xl font-black text-lg bounce-shadow bouncy-hover flex items-center justify-center gap-3 group uppercase italic">
                UN-F*** MY PIPELINE
                <TrendingUp className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-black/5 bg-white/50">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/${i + 10}/100/100`}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold">4.9/5 from real humans</p>
                  <p className="text-gray-500">No bots, no bullshit.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square glass-card p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 transition-colors group-hover:bg-accent/10" />
              <img 
                src="https://picsum.photos/seed/tech/800/800" 
                className="w-full h-full object-cover rounded-xl"
                alt="High-end Viz"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 glass-card p-4 shadow-xl border-accent/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <MousePointer2 className="text-black w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Conversion Rate</p>
                    <p className="text-xl font-black">82.4%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-6 glass-card p-4 shadow-xl border-danger/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-danger rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Waste Reduced</p>
                    <p className="text-xl font-black">99.0%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-12 border-t border-black/5"
        >
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-10">TRUSTED BY HIGH-PERFORMERS AT</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
            {['VOLT', 'AERIS', 'CORE', 'NEXUS', 'OZONE'].map((brand) => (
              <span key={brand} className="text-3xl font-black font-display tracking-tighter">{brand}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
