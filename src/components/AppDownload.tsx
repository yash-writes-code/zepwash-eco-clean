
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AppDownload = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-zep-blue-600 to-zep-blue-700 text-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold">Download Our App</h2>
            <p className="text-white/90">
              Get the full ZepWash experience on your mobile device. Subscribe to plans, schedule washes, and manage your account - all from one convenient app.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <span>Download the app from your preferred store</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <span>Create an account and select your service plan</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                <span>Schedule your washes and enjoy the premium service</span>
              </div>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-zep-blue-600 hover:bg-gray-100">
                <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                  <path d="M17.9 19.8c-.9.8-1.9 1.7-3.1 1.7-1.2 0-1.5-.7-2.8-.7-1.3 0-1.7.7-2.8.7-1.2 0-2.1-.9-3-1.7-2.1-2.3-3.7-6.5-1.5-9.3.9-1.2 2.5-1.9 3.8-1.9 1.4 0 2.2.7 3.3.7 1.1 0 1.7-.7 3.3-.7 1.3 0 2.6.7 3.5 1.9-3.1 1.7-2.6 5.9.3 7.1-.4 1-1 2-1.8 2.9-1.3-1.8-1.9-4.1-1.6-6.3 1-.7 1.8-1.9 1.9-3.1-1-.1-2 .6-2.7 1.5-.4.5-.7 1.2-.7 1.9h-.2c0-1.3.7-2.5 1.8-3.1.6-.4 1.4-.5 2.1-.5.1-1.1-.7-2.3-1.7-2.9-.7-.4-1.6-.6-2.4-.4-1.8.3-3 2-3 3.9 0 .4 0 .8.2 1.2-.7-.1-1.4-.3-2-.7-.5-.3-.9-.8-1.2-1.4-.7-1.3-.7-3.1.1-4.3.4-.6 1-1.1 1.7-1.3C12 2.1 13.2.3 15 0c0 1.4-.6 2.8-1.6 3.8 1 .3 1.8 1 2.2 1.9.6-.9.9-1.9.9-2.9 1.4 1 2.4 2.7 2.4 4.4 0 .4-.1.9-.2 1.3.6.7 1 1.6 1 2.6 0 .9-.3 1.8-.8 2.6 1.9.7 3.1 2.6 2.8 4.6-.2 1.5-1.1 2.8-2.4 3.7.5-.9.8-2 .8-3.1 0-1.7-.7-3.3-1.9-4.4-.4-.3-.8-.6-1.3-.8z"/>
                </svg>
                App Store
              </Button>
              <Button className="bg-white text-zep-blue-600 hover:bg-gray-100">
                <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.229-3.21z"/>
                </svg>
                Google Play
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center relative order-1 md:order-2">
            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-3xl border border-white/20 shadow-xl relative w-64 h-auto">
              <img 
                src="/lovable-uploads/053abb921-6d57-4855-8085-78c49f30d81d.png" 
                alt="ZepWash App" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -top-3 -right-3 bg-zep-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold">
                New!
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-zep-blue-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-zep-green-400 rounded-full opacity-20 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
