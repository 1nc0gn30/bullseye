import { motion } from 'motion/react';
import { Layers, MousePointer2, Sparkles, UserCheck } from 'lucide-react';

const features = [
  {
    title: "Laser-Targeted Scraper",
    desc: "Our algo doesn't just look for titles. It looks for INTENT. We find people who are actually looking for what you have.",
    icon: Layers,
    accent: "bg-blue-500"
  },
  {
    title: "AI-Vetted Quality",
    desc: "Every lead passes through a 12-point personality filter. If they look grumpy or like they'll 'ignore' you, we toss 'em.",
    icon: UserCheck,
    accent: "bg-purple-500"
  },
  {
    title: "Micro-Group Segmentation",
    desc: "Don't message 'Recruiters'. Message 'SaaS recruiters in Austin who just raised Series B and are hiring 5+ devs'.",
    icon: Sparkles,
    accent: "bg-green-500"
  },
  {
    title: "1-Click Integration",
    desc: "Push perfectly vetted groups directly to your CRM. No csv bullshit. No manual entry. Just action.",
    icon: MousePointer2,
    accent: "bg-pink-500"
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
            <div className="relative grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl border border-black/5 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all group"
                >
                  <div className={`w-12 h-12 ${f.accent} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:rotate-12 transition-transform`}>
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:pl-12">
            <h2 className="text-5xl font-black mb-8 italic tracking-tighter leading-tight">
              MORE GRAPHICS. <br/> LESS TALKING. <br/> <span className="text-accent underline">BULLSEYE WORKS.</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xl">01</div>
                <div>
                  <h4 className="text-2xl font-black mb-2 uppercase">Connect your mess</h4>
                  <p className="text-gray-500 text-lg">Bring your existing LinkedIn or generic lists. We'll show you why they're garbage in under 30 seconds.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xl">02</div>
                <div>
                  <h4 className="text-2xl font-black mb-2 uppercase italic text-accent">Apply the laser</h4>
                  <p className="text-gray-500 text-lg">Our engine strips away the time-wasters. You're left with a list of humans who actually NEED your solution.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xl">03</div>
                <div>
                  <h4 className="text-2xl font-black mb-2 uppercase">Message with confidence</h4>
                  <p className="text-gray-500 text-lg">Finally send messages that don't get 'marked as spam'. Watch your reply rates quadruple overnight.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
