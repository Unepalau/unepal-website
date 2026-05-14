export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      {/* Outer Pulse Ring */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-24 h-24 border-4 border-brand-primary/20 rounded-full animate-ping"></div>
        
        {/* Inner Spinner */}
        <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
        
        {/* Center Logo Placeholder (Optional) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-brand-primary rounded-full"></div>
        </div>
      </div>

      {/* Loading Text */}
      <p className="mt-8 text-brand-primary font-bold tracking-widest uppercase text-sm animate-pulse">
        Loading uNepal
      </p>
    </div>
  );
}
