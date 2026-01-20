export default function Overlay() {
    return (
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        {/* Section 1: Intro */}
        <section className="h-screen w-full flex flex-col justify-center p-20">
          <h1 className="text-9xl font-bold text-white uppercase font-serif">
            BMW <br />
            <span className="text-red-500">M4</span>
          </h1>
          <p className="text-white text-xl mt-4 max-w-lg">
            The ultimate driving machine. Experience the power and precision.
          </p>
        </section>
  
        {/* Section 2: Engine Info */}
        <section className="h-screen w-full flex flex-col items-end justify-center p-20">
          <h1 className="text-8xl font-bold text-white uppercase text-right">
            Twin Power <br />
            <span className="text-blue-500">Turbo</span>
          </h1>
          <p className="text-white text-xl mt-4 max-w-lg text-right bg-black/50 p-4 rounded">
            3.0-liter BMW M TwinPower Turbo inline 6-cylinder engine.
            Unleash the beast within.
          </p>
        </section>
  
        {/* Section 3: Details */}
        <section className="h-screen w-full flex flex-col items-center justify-start pt-32">
          <h1 className="text-8xl font-bold text-white uppercase text-center">
            Pure <br />
            <span className="text-yellow-500">Control</span>
          </h1>
          <div className="mt-10 bg-white/10 p-6 rounded-xl backdrop-blur-md">
             <ul className="text-white space-y-2">
               <li>🚀 0-60 mph in 3.4 seconds</li>
               <li>🐎 503 Horsepower</li>
               <li>🔧 479 lb-ft Torque</li>
             </ul>
          </div>
        </section>
      </div>
    );
  }