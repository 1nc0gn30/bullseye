import { motion } from 'motion/react';
import { Target, Zap, Waves, Cpu, Search, MousePointer2 } from 'lucide-react';

export default function Laser() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            PRECISION TECHNOLOGY
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black leading-[0.9] text-primary mb-8 tracking-tight uppercase"
          >
            THE <span className="text-accent italic underline decoration-8">LASER</span> <br />
            IS UNTOUCHABLE.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-medium"
          >
            We don't "scrape". We dissect. The Laser uses predictive intent modeling to find people who are ready to talk before they even know it.
          </motion.p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 italic tracking-tighter uppercase leading-tight">
                HOW WE STRIP <br />
                AWAY THE <span className="text-accent">BULLSHIT.</span>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: Cpu,
                    title: "Intent Engine",
                    desc: "Analyzes social patterns, job history, and implicit signals to confirm professional readiness."
                  },
                  {
                    icon: Search,
                    title: "Deep Context",
                    desc: "We scan 50+ data points per profile. If they aren't a perfect 10/10 fit, they are deleted."
                  },
                  {
                    icon: Waves,
                    title: "Noise Cancellation",
                    desc: "Automatically removes bots, silent profiles, and accounts with 'No Recruiters' in their bio."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-2">{item.title}</h4>
                      <p className="text-gray-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square glass-card bg-white/5 border-white/10 p-8 flex flex-col justify-center"
            >
               <div className="absolute top-0 right-0 p-8">
                  <Zap className="text-accent w-12 h-12 animate-pulse" />
               </div>
               <div className="space-y-6">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Target Acquired</p>
                     <p className="text-xl font-black">Sarah Chen</p>
                     <p className="text-sm text-accent">VP Sales, Fintech • 98% Intent Score</p>
                  </div>
                  <div className="p-4 bg-accent text-black rounded-2xl shadow-xl shadow-accent/20">
                     <p className="text-xs font-bold uppercase tracking-widest mb-2">Automated Analysis</p>
                     <p className="text-lg font-black">Predicted Response: <span className="italic">IMMEDIATE</span></p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl opacity-40">
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Discarded</p>
                     <p className="text-lg font-black">Unqualified Lead</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">
               STOP PLAYING <span className="text-accent underline decoration-8">GAMES.</span>
            </h2>
            <p className="text-gray-500 text-xl font-medium mb-12">
               The Laser is the difference between a successful quarter and a failed one. Deploy it now.
            </p>
            <button className="million-dollar-gradient text-white px-12 py-6 rounded-2xl text-2xl font-black bouncy-hover bounce-shadow flex items-center justify-center gap-4 mx-auto uppercase italic">
               DEPLOY THE LASER
               <Target className="w-8 h-8" />
            </button>
        </div>
      </section>
    </div>
  );
}
