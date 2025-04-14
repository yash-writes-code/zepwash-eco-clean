
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-zep-blue-500 to-zep-green-500">
      {/* Subtle background pattern overlay */}
      <div className="absolute inset-0 bg-pattern-overlay opacity-15"></div>
      
      <div className="relative container max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Premium Car Wash at Your Society Doorstep
              </h1>
              <p className="text-xl text-white/90 max-w-xl">
                Experience world-class car cleaning with eco-friendly methods, delivered right where you live.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-zep-blue-600 hover:bg-gray-100 rounded-full py-6 font-semibold flex items-center justify-center gap-2 text-base">
                <Download size={20} />
                Download App
              </Button>
              <Link to="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full py-6 font-semibold w-full sm:w-auto flex justify-center text-base">
                  Our Services
                </Button>
              </Link>
            </div>

            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full py-2 px-6 border border-white/10">
                <p className="text-white text-sm font-medium">Join 500+ Happy Car Owners</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            {/* Replaced floating animation with a simple card design */}
            <div className="relative">
              <div className="absolute -inset-1 bg-white/20 blur-md rounded-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/30 shadow-xl">
                <img 
                  src="/lovable-uploads/059f1128-7374-403c-a6ef-a4480a1aabd4.png" 
                  alt="Car being washed" 
                  className="rounded-2xl w-full h-auto object-cover shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-zep-green-500 text-white p-4 rounded-full text-sm font-bold shadow-lg">
                  95% Water Saved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
