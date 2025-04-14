import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const allFeatures = [
  "Premium foam wash",
  "External surface cleaning",
  "Water-saving technology",
  "Quick 15-minute service",
  "Window and glass cleaning",
  "Dry and polish",
  "Tire dressing",
  "Interior vacuum",
  "Dashboard and console wipe",
  "Interior freshener"
];

const tiers = [
  {
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
    title: "Premium",
    description: "Foam + Dry + Glass",
    features: [
      "Premium foam wash",
      "External surface cleaning",
      "Water-saving technology",
      "Quick 15-minute service",
      "Window and glass cleaning",
      "Dry and polish",
      "Tire dressing"
    ]
  },
  {
    title: "Supreme",
    description: "All + Tyres + Interior Wipe",
    features: [
      ...allFeatures
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
        {tiers.map((tier, tierIndex) => (
          <div key={tierIndex} className="card-service p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-1">{tier.title}</h3>
            <p className="text-gray-600 mb-4">{tier.description}</p>

            <ul className="space-y-3 mb-6">
              {allFeatures.map((feature, i) => {
                const isIncluded = tier.features.includes(feature);
                return (
                  <li key={i} className="flex items-center gap-3">
                    {isIncluded ? (
                      <CheckCircle className="text-green-500" size={20} />
                    ) : (
                      <XCircle className="text-red-400" size={20} />
                    )}
                    <span className={isIncluded ? "text-gray-800" : "text-gray-400 line-through"}>
                      {feature}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Link to="/signup">
              <Button variant="outline" className="w-full justify-between group">
                <span>Subscribe</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          Experience the ZepWash difference with our eco-friendly, professional car cleaning services.
        </p>
        <Button size="lg" className="btn-primary">
          <span className="py-8 px-4 font-semibold">Download Our App</span>
        </Button>
      </div>
    </section>
  );
};

export default Services;
