import { Target } from 'lucide-react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Target className="text-accent w-8 h-8" />
        <div className="absolute inset-0 bg-accent/20 blur-sm rounded-full animate-pulse" />
      </div>
      <div className="text-2xl font-black tracking-tighter italic uppercase text-primary">
        Bulls<span className="text-accent">eye</span>
      </div>
    </div>
  );
}
