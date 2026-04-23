import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { OctagonX, MessageSquareX, DollarSign, Clock } from 'lucide-react';

const painPoints = [
  {
    icon: MessageSquareX,
    title: "Vague Outreach",
    desc: "Messaging 1000 people to find 1 who cares. Absolute madness.",
    color: "bg-orange-500"
  },
  {
    icon: DollarSign,
    title: "Burnt Budget",
    desc: "LinkedIn Sales Navigator is a black hole for your company's cash.",
    color: "bg-danger"
  },
  {
    icon: Clock,
    title: "Hours Wasted",
    desc: "Filtering through junk leads like you're pan-handling for gold.",
    color: "bg-yellow-500"
  },
  {
    icon: OctagonX,
    title: "Zero Responses",
    desc: "Because you're annoying people who aren't your target.",
    color: "bg-primary"
  }
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase"
          >
            WHY THE HELL ARE YOU <br/> STILL DOING THIS?
          </motion.h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            The status quo of LinkedIn lead gen is broken. You're shouting at everyone and being heard by no one. It's expensive, it's slow, and it's stupid.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-black/5 hover:border-danger/20 transition-all hover:shadow-2xl hover:shadow-danger/5 bg-[#FDFDFD]"
            >
              <div className={`w-14 h-14 ${p.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <p.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter italic">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass-card overflow-hidden p-12 relative bg-primary text-white"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase">
                STOP BEING A <br/> <span className="text-accent italic">SPAMMER.</span>
              </h3>
              <p className="text-gray-400 text-lg mb-8 font-medium">
                Every time you send a "Hey [Name], we should connect" to the wrong person, a kitten cries. Probably. But more importantly, you lose a potential deal.
              </p>
              <Link to="/laser" className="million-dollar-gradient text-white px-8 py-4 rounded-xl font-black text-lg bouncy-hover bounce-shadow uppercase italic inline-block w-fit">
                FIX MY PIPELINE
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-3xl font-black text-danger mb-1">-92%</p>
                <p className="text-sm text-gray-400 font-bold uppercase">Spam Reports</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-3xl font-black text-accent mb-1">+400%</p>
                <p className="text-sm text-gray-400 font-bold uppercase">Reply Rate</p>
              </div>
            </div>
          </div>
          {/* Abstract elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[120px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-danger/20 blur-[120px] -ml-32 -mb-32" />
        </motion.div>
      </div>
    </section>
  );
}
