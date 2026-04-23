import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', old: 10, new: 45 },
  { name: 'Tue', old: 12, new: 52 },
  { name: 'Wed', old: 8, new: 61 },
  { name: 'Thu', old: 15, new: 58 },
  { name: 'Fri', old: 9, new: 75 },
  { name: 'Sat', old: 11, new: 82 },
  { name: 'Sun', old: 14, new: 90 },
];

export default function DataVisuals() {
  return (
    <section id="results" className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="w-12 h-1 bg-accent mb-8" />
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase">
              THE DATA DOESN'T <br/> <span className="italic">BULLSHIT.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              We tracked 5,000 campaigns over 6 months. Users of Bullseye saw a literal skyrocket in intentional engagement while their "spray and pray" competitors went bankrupt.
            </p>
            
            <ul className="space-y-6">
              {[
                "Targeted groups are 8x more likely to convert",
                "Reduced 'I don't give a f***' replies by 99%",
                "CFOs actually like you because you save money",
                "Instant scaling without adding headless headcount"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium group text-gray-700">
                  <div className="w-6 h-6 bg-accent rounded-md flex items-center justify-center group-hover:scale-125 transition-transform shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 h-[400px] md:h-[500px]"
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-black italic">Engagement Spike</h3>
                <p className="text-gray-500 font-bold uppercase text-xs">Bullseye vs Old Bullshit</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <span className="text-xs font-bold">BULLSEYE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full" />
                  <span className="text-xs font-bold">OLD BS</span>
                </div>
              </div>
            </div>
            
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF3D00" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#FF8A00" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#999', fontSize: 12, fontWeight: 700 }}
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="new" 
                    stroke="#FF3D00" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorNew)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="old" 
                    stroke="#D1D1D1" 
                    strokeWidth={2}
                    fill="transparent" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
