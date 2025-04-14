
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Droplets, 
  Heart, 
  LayoutGrid, 
  Leaf, 
  Shield, 
  Star, 
  Target, 
  ThumbsUp, 
  Users 
} from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />
      
      <div className="pt-16 pb-8 bg-gradient-to-r from-zep-green-500 to-zep-blue-500 text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About ZepWash</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Revolutionizing car cleaning with eco-friendly solutions since 2022.
          </p>
        </div>
      </div>
      
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              ZepWash was founded with a simple mission: to provide premium car cleaning services while minimizing environmental impact. 
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small operation in one residential society has now grown to serve dozens of communities across the city. Our innovative water-saving technology and dedication to customer satisfaction have made us the preferred choice for eco-conscious car owners.
            </p>
            <p className="text-gray-600 mb-6">
              We're committed to evolving our services while staying true to our core values of sustainability, quality, and customer-centricity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button className="btn-primary">Our Services</Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline">Join Us</Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <img 
                src="/lovable-uploads/fa008476-bb06-4f1b-ac9c-1887b4b69ef0.png" 
                alt="ZepWash Team" 
                className="rounded-xl w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zep-green-100 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-zep-blue-100 rounded-full z-[-1]"></div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at ZepWash.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-zep-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Leaf size={32} className="text-zep-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Environmental Responsibility</h3>
              <p className="text-gray-600">
                We're committed to reducing water waste and using eco-friendly cleaning products that protect our environment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-zep-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Star size={32} className="text-zep-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our service, using premium products and thorough cleaning procedures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-zep-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Heart size={32} className="text-zep-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Centricity</h3>
              <p className="text-gray-600">
                Our services are designed with the customer in mind, focusing on convenience, reliability, and satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-zep-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Users size={32} className="text-zep-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Building</h3>
              <p className="text-gray-600">
                We aim to create positive relationships within the communities we serve, becoming more than just a service provider.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-zep-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Shield size={32} className="text-zep-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust & Reliability</h3>
              <p className="text-gray-600">
                Our verified staff and consistent service build the trust necessary for long-term relationships with our customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="rounded-full bg-zep-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Target size={32} className="text-zep-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our methods and technology to provide better, more efficient services.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose ZepWash</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We stand out from traditional car wash services in several key ways.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-zep-blue-100 w-10 h-10 flex items-center justify-center mr-3">
                  <Droplets size={20} className="text-zep-blue-500" />
                </div>
                <h3 className="font-semibold">Water Efficient</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Our process uses 95% less water than traditional car washes.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-zep-green-100 w-10 h-10 flex items-center justify-center mr-3">
                  <Clock size={20} className="text-zep-green-500" />
                </div>
                <h3 className="font-semibold">Convenient</h3>
              </div>
              <p className="text-gray-600 text-sm">
                No need to drive anywhere—we come to your residential society.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center mr-3">
                  <ThumbsUp size={20} className="text-purple-500" />
                </div>
                <h3 className="font-semibold">Premium Quality</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Professional-grade cleaning that matches or exceeds traditional washes.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-zep-blue-100 w-10 h-10 flex items-center justify-center mr-3">
                  <LayoutGrid size={20} className="text-zep-blue-500" />
                </div>
                <h3 className="font-semibold">Flexible Plans</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Subscription options to match your specific needs and budget.
              </p>
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-zep-blue-500 to-zep-green-500 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Droplets size={32} className="text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">3.2 Million</div>
                      <div className="text-white/80">Liters of water saved</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Users size={32} className="text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-white/80">Happy customers</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Star size={32} className="text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">4.8/5</div>
                      <div className="text-white/80">Average rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gradient-to-r from-zep-blue-600 to-zep-blue-700 py-16 text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the ZepWash Family</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Experience the future of car cleaning today. Download our app or sign up to get started.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zep-blue-600 hover:bg-gray-100">
              Download App
            </Button>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
