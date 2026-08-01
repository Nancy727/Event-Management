import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, Share2, Utensils, Flower2, ShieldAlert, Award, Tent } from 'lucide-react';
import { useInquiryModal } from '../../context/InquiryModalContext';

export const BudgetEstimator: React.FC = () => {
  const [guests, setGuests] = useState<number>(100);
  const [eventTier, setEventTier] = useState<'minimal' | 'wedding-minimal' | 'wedding-catering' | 'luxury-custom'>('minimal');
  
  // Toggles available for EVERY event type
  const [includeCatering, setIncludeCatering] = useState<boolean>(false);
  const [cateringItems, setCateringItems] = useState<'standard' | 'luxury-menu'>('standard');
  const [includeFreshFlowers, setIncludeFreshFlowers] = useState<boolean>(false);
  const [needTent, setNeedTent] = useState<boolean>(false);

  const { openModal } = useInquiryModal();

  // Baseline decor pricing at 100 guests:
  let baseMin = 25000;
  let baseMax = 35000;

  if (eventTier === 'minimal') {
    baseMin = 25000;
    baseMax = 35000;
  } else if (eventTier === 'wedding-minimal') {
    baseMin = 100000;
    baseMax = 150000;
  } else if (eventTier === 'wedding-catering') {
    // Moderate Wedding: Standard Menu = ₹3.2L - ₹4.5L, Luxury Menu = ₹4.5L - ₹6L
    if (cateringItems === 'luxury-menu') {
      baseMin = 450000;
      baseMax = 600000;
    } else {
      baseMin = 320000;
      baseMax = 450000;
    }
  } else if (eventTier === 'luxury-custom') {
    baseMin = 1200000;
    baseMax = 2500000;
  }

  // Smooth guest scaling
  const extraGuests = Math.max(0, guests - 100);
  const scalingFactor = 1 + (extraGuests / 2400) * 1.5;

  // Additional costs
  let cateringAddon = 0;
  if (includeCatering) {
    if (eventTier === 'minimal') {
      // Birthday party with catering: + ₹40,000 (Standard) or + ₹60,000 (Luxury)
      cateringAddon = cateringItems === 'luxury-menu' ? 60000 : 40000;
    } else if (eventTier === 'wedding-minimal') {
      cateringAddon = cateringItems === 'luxury-menu' ? 140000 : 100000;
    } else if (eventTier === 'luxury-custom') {
      cateringAddon = cateringItems === 'luxury-menu' ? 500000 : 300000;
    }
  }

  const flowerAddon = includeFreshFlowers ? 1.2 : 1.0;
  const tentAddon = needTent ? (eventTier === 'minimal' ? 15000 : 25000) : 0;

  let calculatedMin = Math.round((baseMin + cateringAddon) * scalingFactor * flowerAddon + tentAddon);
  let calculatedMax = Math.round((baseMax + cateringAddon * 1.25) * scalingFactor * flowerAddon + tentAddon * 1.3);

  // Strictly cap Ultra Luxury max at ₹45 Lakhs
  if (eventTier === 'luxury-custom') {
    calculatedMax = Math.min(calculatedMax, 4500000);
  }

  const handleExportWhatsApp = () => {
    const text = `Hi Sintu Decorators! I calculated an estimate on your website:\n\n` +
      `• Event Tier: ${eventTier.toUpperCase()}\n` +
      `• Guests: ~${guests}\n` +
      `• Catering Included: ${includeCatering ? `YES (${cateringItems === 'luxury-menu' ? '25+ Luxury Dishes' : 'Standard Menu (12-15 Dishes)'})` : 'NO'}\n` +
      `• Fresh Raw Flowers: ${includeFreshFlowers ? 'YES (Exotic Fresh Orchids & Roses)' : 'NO (Silk & Satin Drapery)'}\n` +
      `• Waterproof Pandal: ${needTent ? 'YES' : 'NO'}\n` +
      `• Calculated Estimate Range: ₹${calculatedMin.toLocaleString('en-IN')} - ₹${calculatedMax.toLocaleString('en-IN')}\n\n` +
      `📌 *I understand prices are 100% customizable to fit my budget!* Can we discuss dates near Shiv Mandir, Mungroura?`;
    window.open(`https://wa.me/919431200000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-olive-50 border-2 border-olive-200 rounded-3xl p-6 sm:p-10 shadow-xl text-olive-700 font-sans">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-olive-700 text-white flex items-center justify-center font-bold shadow-md shrink-0">
          <Calculator className="w-8 h-8 text-white stroke-[2.2]" />
        </div>
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-olive-700">Realistic Event, Catering & Floral Budget Calculator</h3>
          <p className="text-xs text-rose-700 font-bold uppercase tracking-widest mt-1 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-rose-700" />
            Customized Jamalpur & Munger Package Rates
          </p>
        </div>
      </div>

      {/* Prominent 100% Budget Customizable Reassurance Banner */}
      <div className="mb-8 p-4 rounded-2xl bg-rose-50 border-2 border-rose-200 text-olive-700 flex items-start gap-3 shadow-sm">
        <ShieldAlert className="w-6 h-6 text-rose-700 shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed">
          <strong className="block text-rose-700 font-bold uppercase tracking-wider text-[11px]">
            💡 100% Fully Customizable To Your Exact Budget!
          </strong>
          <span className="font-light text-olive-600">
            Don't worry about rigid numbers! Every package can be custom-fitted, scaled down, or adjusted based on your exact budget, catering menu choices, and flower preferences. We guarantee the best rates in Jamalpur & Munger.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Package Tier Selection */}
          <div>
            <label className="block text-xs font-bold text-olive-700 uppercase tracking-wider mb-3">
              1. SELECT EVENT CATEGORY
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <button
                type="button"
                onClick={() => setEventTier('minimal')}
                className={`p-5 rounded-2xl text-left font-bold transition-all border shadow-sm ${
                  eventTier === 'minimal'
                    ? 'bg-rose-700 text-white border-rose-700 shadow-md ring-2 ring-rose-300'
                    : 'bg-white text-olive-700 border-olive-200 hover:border-rose-700/50'
                }`}
              >
                <div className="text-xs font-bold leading-tight">Minimal Small Party / Birthday</div>
                <div className="text-[11px] opacity-85 mt-1.5 font-normal">Decor Starts @ ₹25,000 - ₹35,000</div>
              </button>

              <button
                type="button"
                onClick={() => setEventTier('wedding-minimal')}
                className={`p-5 rounded-2xl text-left font-bold transition-all border shadow-sm ${
                  eventTier === 'wedding-minimal'
                    ? 'bg-rose-700 text-white border-rose-700 shadow-md ring-2 ring-rose-300'
                    : 'bg-white text-olive-700 border-olive-200 hover:border-rose-700/50'
                }`}
              >
                <div className="text-xs font-bold leading-tight">Minimal Wedding Event</div>
                <div className="text-[11px] opacity-85 mt-1.5 font-normal">Decor Starts @ ₹1 Lakh - ₹1.5 Lakhs</div>
              </button>

              <button
                type="button"
                onClick={() => { setEventTier('wedding-catering'); setIncludeCatering(true); }}
                className={`p-5 rounded-2xl text-left font-bold transition-all border shadow-sm ${
                  eventTier === 'wedding-catering'
                    ? 'bg-olive-700 text-white border-olive-700 shadow-md ring-2 ring-olive-400'
                    : 'bg-white text-olive-700 border-olive-200 hover:border-olive-700/50'
                }`}
              >
                <div className="text-xs font-bold flex items-center justify-between gap-2 leading-tight">
                  <span>Moderate Wedding Event</span>
                  <Utensils className={`w-5 h-5 shrink-0 ${eventTier === 'wedding-catering' ? 'text-emerald-300' : 'text-olive-700'}`} />
                </div>
                <div className="text-[11px] opacity-85 mt-1.5 font-normal">Starts @ ₹3.2 Lakhs - ₹6 Lakhs</div>
              </button>

              <button
                type="button"
                onClick={() => { setEventTier('luxury-custom'); setIncludeCatering(true); setCateringItems('luxury-menu'); }}
                className={`p-5 rounded-2xl text-left font-bold transition-all border shadow-sm ${
                  eventTier === 'luxury-custom'
                    ? 'bg-olive-700 text-white border-olive-700 shadow-md ring-2 ring-olive-400'
                    : 'bg-white text-olive-700 border-olive-200 hover:border-olive-700/50'
                }`}
              >
                <div className="text-xs font-bold leading-tight">Ultra Luxury Destination</div>
                <div className="text-[11px] opacity-85 mt-1.5 font-normal">Starting @ ₹12 Lakhs - Max ₹45L</div>
              </button>
            </div>
          </div>

          {/* Guest Capacity Slider */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-olive-200 shadow-sm space-y-5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-olive-700 uppercase tracking-wider">2. EXPECTED GUEST CAPACITY</label>
              <span className="text-base font-bold text-rose-700 font-serif px-3.5 py-1 rounded-xl bg-rose-50 border border-rose-200">{guests} Guests</span>
            </div>
            <div className="py-2">
              <input
                type="range"
                min="100"
                max="2500"
                step="50"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                className="w-full h-3 bg-olive-100 rounded-lg appearance-none cursor-pointer accent-rose-700"
              />
            </div>

            <div className="grid grid-cols-3 text-center text-xs font-bold text-olive-700 pt-1 border-t border-olive-100">
              <div className="text-left">
                <span className="block text-rose-700 font-extrabold">100 Guests</span>
                <span className="text-[10px] text-olive-600 font-normal">Intimate Gathering</span>
              </div>
              <div className="text-center">
                <span className="block text-rose-700 font-extrabold">500 Guests</span>
                <span className="text-[10px] text-olive-600 font-normal">Moderate Gathering</span>
              </div>
              <div className="text-right">
                <span className="block text-rose-700 font-extrabold">1500+ Guests</span>
                <span className="text-[10px] text-olive-600 font-normal">Grand Pandal Ground</span>
              </div>
            </div>
          </div>

          {/* OPTIONS AVAILABLE FOR ALL EVENT TYPES */}
          <div className="space-y-4 pt-2">
            <label className="block text-xs font-bold text-olive-700 uppercase tracking-wider">
              3. CUSTOMIZE ADDONS & SERVICES (AVAILABLE FOR ALL TYPES)
            </label>

            {/* Catering Toggle */}
            <div className="p-5 rounded-2xl bg-white border border-olive-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-rose-700 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-olive-700 block">Include Full Multi-Cuisine Catering?</span>
                    <span className="text-[11px] text-olive-600 font-light">Food counters & hospitality staff</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeCatering(!includeCatering)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    includeCatering ? 'bg-emerald-700 text-white shadow-sm' : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  {includeCatering ? 'Catering Included' : 'No Catering'}
                </button>
              </div>

              {includeCatering && (
                <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-cream-200">
                  <button
                    type="button"
                    onClick={() => setCateringItems('standard')}
                    className={`py-2.5 px-3 rounded-xl font-bold transition-all border ${
                      cateringItems === 'standard'
                        ? 'bg-rose-700 text-white border-rose-700 shadow-sm'
                        : 'bg-cream-100 text-olive-700 border-rose-200'
                    }`}
                  >
                    Standard Menu (12-15 Dishes)
                  </button>

                  <button
                    type="button"
                    onClick={() => setCateringItems('luxury-menu')}
                    className={`py-2.5 px-3 rounded-xl font-bold transition-all border ${
                      cateringItems === 'luxury-menu'
                        ? 'bg-rose-700 text-white border-rose-700 shadow-sm'
                        : 'bg-cream-100 text-olive-700 border-rose-200'
                    }`}
                  >
                    Luxury Buffet (25+ Dishes)
                  </button>
                </div>
              )}
            </div>

            {/* Raw Fresh Floral Toggle */}
            <div className="flex items-center justify-between p-5 rounded-2xl bg-white border border-olive-200 shadow-sm">
              <div className="flex items-center gap-3">
                <Flower2 className="w-5 h-5 text-rose-700 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-olive-700 block">Use Fresh Raw Exotic Flowers?</span>
                  <span className="text-[11px] text-olive-600 font-light">Exotic imported Orchids, Roses & Rajnigandha arches</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIncludeFreshFlowers(!includeFreshFlowers)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  includeFreshFlowers ? 'bg-emerald-700 text-white shadow-sm' : 'bg-rose-100 text-rose-700'
                }`}
              >
                {includeFreshFlowers ? 'Fresh Flowers' : 'Satin Drapes'}
              </button>
            </div>

            {/* Waterproof German Pandal Toggle */}
            <div className="flex items-center justify-between p-5 rounded-2xl bg-white border border-olive-200 shadow-sm">
              <div className="flex items-center gap-3">
                <Tent className="w-5 h-5 text-rose-700 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-olive-700 block">Include German Waterproof Pandal?</span>
                  <span className="text-[11px] text-olive-600 font-light">Heavy-duty 3-ply waterproof tent & carpeted flooring</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setNeedTent(!needTent)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  needTent ? 'bg-emerald-700 text-white shadow-sm' : 'bg-rose-100 text-rose-700'
                }`}
              >
                {needTent ? 'Pandal Included' : 'No Pandal'}
              </button>
            </div>
          </div>
        </div>

        {/* Output Column Box in Dark Rose (5 cols) */}
        <div className="lg:col-span-5 bg-rose-700 text-white border-2 border-rose-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-ultra text-rose-200">ESTIMATED EVENT COST RANGE</span>
            <div className="mt-2">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-white">
                ₹{calculatedMin.toLocaleString('en-IN')} - ₹{calculatedMax.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-xs text-rose-100 mt-3 leading-relaxed font-light">
              Final cost depends directly on guest count, decor complexity, luxury demands, and number of food items selected.
            </p>

            {/* Reassurance text inside calculation box */}
            <div className="mt-4 p-3.5 rounded-2xl bg-rose-800/80 border border-rose-600 text-xs leading-relaxed">
              <span className="font-bold text-white block uppercase tracking-wider text-[10px]">✨ Budget Customization Guarantee</span>
              <span className="text-rose-100 text-[11px] font-light">
                Have a specific budget in mind? We customize every element so you get maximum value without exceeding your planned budget.
              </span>
            </div>

            <div className="mt-5 pt-4 border-t border-rose-600/60 space-y-2.5 text-xs text-white font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                <span>Minimal small party decor from ₹25,000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                <span>Minimal wedding mandap & tent from ₹1L - ₹1.5L</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                <span>Moderate wedding with catering from ₹3.2L - ₹6L</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                <span>Ultra luxury destination capped at max ₹45L</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => openModal(`Calculated Estimate: ₹${calculatedMin.toLocaleString('en-IN')} - ₹${calculatedMax.toLocaleString('en-IN')}`)}
              className="w-full py-4 rounded-2xl font-bold bg-white text-olive-700 hover:bg-olive-700 hover:text-white shadow-lg flex items-center justify-center gap-2.5 transition-all text-xs uppercase tracking-widest"
            >
              <Sparkles className="w-5 h-5 text-rose-700" />
              Lock Estimate & Book Date
            </button>

            <button
              onClick={handleExportWhatsApp}
              className="w-full py-3.5 rounded-2xl font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-md flex items-center justify-center gap-2.5 transition-all text-xs uppercase tracking-widest"
            >
              <Share2 className="w-5 h-5 text-white" />
              Send Estimate to Sintu Ji on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
