
import { Download, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-zep-blue-600 to-zep-blue-500">
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
              <Button className="bg-white text-zep-blue-600 hover:bg-zep-green-400 hover:text-white rounded-full py-6 font-semibold flex items-center justify-center gap-2 text-base shadow-lg">
                <Download size={20} />
                Download App
              </Button>
              <Link to="/services">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 rounded-full py-6 font-semibold w-full sm:w-auto flex justify-center text-base shadow-md">
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
            {/* Mobile app mockup with enhanced design */}
            <div className="relative">
              <div className="absolute -inset-2 bg-white/30 blur-xl rounded-[40px]"></div>
              <div className="relative bg-black rounded-[35px] border-8 border-black shadow-2xl overflow-hidden w-[280px]">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-xl z-10"></div>
                
                {/* App Screen */}
                <div className="relative bg-gradient-to-b from-zep-blue-100 to-zep-blue-50 pt-10 pb-8 px-4 h-[550px] rounded-2xl overflow-hidden">
                  {/* App Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="bg-zep-blue-500 rounded-full p-1 shadow-sm">
                        <Smartphone className="text-white" size={14} />
                      </div>
                      <div>
                        <h3 className="font-bold text-zep-blue-800">ZepWash</h3>
                        <p className="text-xs text-zep-blue-600">Hello, Alex!</p>
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-zep-blue-500 to-zep-green-500 flex items-center justify-center shadow-md">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                  </div>
                  
                  {/* Main Car Wash Card */}
                  <div className="bg-white rounded-2xl p-4 shadow-md mb-4">
                    <h4 className="font-bold text-sm text-zep-blue-800 mb-2">Your next wash</h4>
                    <div className="bg-zep-blue-50 rounded-xl p-3 mb-3">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-medium text-zep-blue-600">Premium Wash</span>
                        <span className="text-xs font-bold text-zep-green-600">Tomorrow</span>
                      </div>
                      <div className="h-16 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden">
                        <img 
                          src="/lovable-uploads/059f1128-7374-403c-a6ef-a4480a1aabd4.png" 
                          alt="Car wash" 
                          className="h-full w-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 right-0 bg-zep-green-500 text-white text-xs py-1 px-2 rounded-tl-lg font-medium">
                          95% Water Saved
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-zep-blue-600">10:30 AM</span>
                        <span className="text-xs text-zep-blue-600">30 minutes</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-zep-blue-500 to-zep-green-500 text-white text-xs py-2 rounded-lg font-medium">
                      Reschedule Wash
                    </button>
                  </div>
                  
                  {/* Services Buttons */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white rounded-xl p-3 shadow-sm text-center">
                      <div className="h-6 w-6 bg-zep-blue-100 rounded-full mx-auto mb-1 flex items-center justify-center">
                        <span className="text-xs text-zep-blue-600">🚿</span>
                      </div>
                      <span className="text-xs font-medium text-zep-blue-800">Quick Wash</span>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-sm text-center">
                      <div className="h-6 w-6 bg-zep-green-100 rounded-full mx-auto mb-1 flex items-center justify-center">
                        <span className="text-xs text-zep-green-600">✨</span>
                      </div>
                      <span className="text-xs font-medium text-zep-blue-800">Deep Clean</span>
                    </div>
                  </div>
                  
                  {/* Water Saved Indicator */}
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-xs font-bold text-zep-blue-800">Water Saved</h4>
                      <span className="text-xs font-bold text-zep-green-600">95%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-zep-blue-400 to-zep-green-500 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black rounded-full opacity-20"></div>
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
