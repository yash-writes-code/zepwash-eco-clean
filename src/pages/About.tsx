import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Leaf,
  Star,
  Heart,
  Users,
  Shield,
  Target,
} from 'lucide-react';

const values = [
  {
    icon: <Leaf size={32} className="text-zep-green-500" />,
    title: 'Environmental Responsibility',
    text: "We're committed to reducing water waste and using eco-friendly cleaning products that protect our environment.",
  },
  {
    icon: <Star size={32} className="text-zep-blue-500" />,
    title: 'Quality Excellence',
    text: 'We never compromise on the quality of our service, using premium products and thorough cleaning procedures.',
  },
  {
    icon: <Heart size={32} className="text-zep-purple-500" />,
    title: 'Customer Centricity',
    text: 'Our services are designed with the customer in mind, focusing on convenience, reliability, and satisfaction.',
  },
  {
    icon: <Users size={32} className="text-zep-blue-500" />,
    title: 'Community Building',
    text: 'We aim to create positive relationships within the communities we serve, becoming more than just a service provider.',
  },
  {
    icon: <Shield size={32} className="text-zep-green-500" />,
    title: 'Trust & Reliability',
    text: 'Our verified staff and consistent service build the trust necessary for long-term relationships with our customers.',
  },
  {
    icon: <Target size={32} className="text-zep-purple-500" />,
    title: 'Innovation',
    text: 'We continuously improve our methods and technology to provide better, more efficient services.',
  },
];

const About = () => {
  return (
    <>
      <Navbar />

      <div className="pt-16 pb-8 bg-gradient-to-r from-zep-green-500 to-zep-blue-500 text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About ZepWash</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Revolutionizing car cleaning with eco-friendly solutions.
          </p>
        </div>
      </div>

      <section className="section-container">
        <div className="grid items-center">
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
            {values.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 hover:shadow-md hover:shadow-slate-400 transition-transform duration-300"
              >
                <div className="rounded-full bg-zep-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
