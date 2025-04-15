import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {Sparkles,Smartphone,UserPlus,CalendarCheck} from "lucide-react"
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
          </div>

          <div className="flex flex-col items-start space-y-6 order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-2">Why ZepWash App?</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-3">
                <Smartphone size={32} className="text-white" />
                <span>All-in-one mobile convenience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CalendarCheck size={32} className="text-white" />
                <span>Easy scheduling & reminders</span>
              </div>
              <div className="flex items-center space-x-3">
                <UserPlus size={32} className="text-white" />
                <span>Quick account setup</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles size={32} className="text-white" />
                <span>Premium wash experience</span>
              </div>
            </div>
            {/* Decorative floating elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-zep-blue-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-zep-green-400 rounded-full opacity-20 animate-float"></div>
      </div>

        </div>
      
      </div>
    </section>
  );
};

export default AppDownload;
