import Image from 'next/image';

export default function Ticker() {
  return (
    <section className="py-10 sm:py-16 bg-white relative z-10 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
          Connect locally. <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">Belong globally.</span> <i className="fa-solid fa-earth-asia text-brand-primary ml-1"></i>
        </h3>
      </div>
      
      {/* Seamless scrolling marquee */}
      <div className="relative flex overflow-x-hidden group">
        {/* Gradients to hide the hard edges of the scroll */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee whitespace-nowrap flex items-center shrink-0" aria-label="Countries where Nepalese use uNepal worldwide">
          {/* Group 1 */}
          <div className="flex items-center gap-3 px-3">
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/np.png" width={20} height={15} alt="Nepal flag" className="rounded-sm object-cover" /> Nepal</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/de.png" width={20} height={15} alt="Germany flag" className="rounded-sm object-cover" /> Germany</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/us.png" width={20} height={15} alt="USA flag" className="rounded-sm object-cover" /> USA</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/gb.png" width={20} height={15} alt="UK flag" className="rounded-sm object-cover" /> UK</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/ca.png" width={20} height={15} alt="Canada flag" className="rounded-sm object-cover" /> Canada</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/jp.png" width={20} height={15} alt="Japan flag" className="rounded-sm object-cover" /> Japan</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/kr.png" width={20} height={15} alt="South Korea flag" className="rounded-sm object-cover" /> South Korea</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/ae.png" width={20} height={15} alt="UAE flag" className="rounded-sm object-cover" /> UAE</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/qa.png" width={20} height={15} alt="Qatar flag" className="rounded-sm object-cover" /> Qatar</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/sa.png" width={20} height={15} alt="Saudi Arabia flag" className="rounded-sm object-cover" /> Saudi Arabia</span>
            <span className="country-chip bg-brand-primary/10 border border-brand-primary/20 rounded-full px-5 py-2 text-sm font-bold text-brand-primary flex items-center gap-2 shadow-sm"><i className="fa-solid fa-earth-asia"></i> Over 50 countries</span>
          </div>
        </div>

        <div className="animate-marquee whitespace-nowrap flex items-center shrink-0" aria-hidden="true">
          {/* Duplicate Group for infinite scroll */}
          <div className="flex items-center gap-3 px-3">
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/np.png" width={20} height={15} alt="Nepal flag" className="rounded-sm object-cover" /> Nepal</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/de.png" width={20} height={15} alt="Germany flag" className="rounded-sm object-cover" /> Germany</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/us.png" width={20} height={15} alt="USA flag" className="rounded-sm object-cover" /> USA</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/gb.png" width={20} height={15} alt="UK flag" className="rounded-sm object-cover" /> UK</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/ca.png" width={20} height={15} alt="Canada flag" className="rounded-sm object-cover" /> Canada</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/jp.png" width={20} height={15} alt="Japan flag" className="rounded-sm object-cover" /> Japan</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/kr.png" width={20} height={15} alt="South Korea flag" className="rounded-sm object-cover" /> South Korea</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/ae.png" width={20} height={15} alt="UAE flag" className="rounded-sm object-cover" /> UAE</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/qa.png" width={20} height={15} alt="Qatar flag" className="rounded-sm object-cover" /> Qatar</span>
            <span className="country-chip bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 shadow-sm"><Image src="https://flagcdn.com/w20/sa.png" width={20} height={15} alt="Saudi Arabia flag" className="rounded-sm object-cover" /> Saudi Arabia</span>
            <span className="country-chip bg-brand-primary/10 border border-brand-primary/20 rounded-full px-5 py-2 text-sm font-bold text-brand-primary flex items-center gap-2 shadow-sm"><i className="fa-solid fa-earth-asia"></i> Over 50 countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
