
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, SprayCan, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Droplets size={40} className="text-zep-blue-500" />,
    title: "Basic",
    description: "Foam Exterior Wash",
    features: [
      "Premium foam wash",
      "External surface cleaning",
      "Water-saving technology",
      "Quick 15-minute service"
    ]
  },
  {
    icon: <SprayCan size={40} className="text-zep-green-500" />,
    title: "Premium",
    description: "Foam + Dry + Glass",
    features: [
      "Everything in Basic",
      "Window and glass cleaning",
      "Dry and polish",
      "Tire dressing"
    ]
  },
  {
    icon: <Car size={40} className="text-zep-purple-500" />,
    title: "Supreme",
    description: "All + Tyres + Interior Wipe",
    features: [
      "Everything in Premium",
      "Interior vacuum",
      "Dashboard and console wipe",
      "Interior freshener"
    ]
  }
];

const Services = () => {
  return (
    <section className="section-container" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Clean That Suits You</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Subscription-based services available via our app. Select the perfect cleaning package for your vehicle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="card-service group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-gradient-to-br from-zep-blue-100 to-zep-green-100 rounded-full opacity-70"></div>
            
            <div className="relative">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-zep-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zep-green-500"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-2">
                <Link to="/signup">
                  <Button variant="outline" className="group w-full justify-between">
                    <span>Download App to Subscribe</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">Experience the ZepWash difference with our eco-friendly, professional car cleaning services.</p>
        <Button size="lg" className="btn-primary">
          <span>Download Our App</span>
        </Button>
      </div>
    </section>
  );
};

export default Services;
