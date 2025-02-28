import React, { useEffect, useState } from 'react';
import { 
  Snowflake, 
  Wind, 
  ThermometerSun, 
  Wrench, 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Users, 
  Award, 
  Star, 
  ArrowRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Mail
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'products', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <ThermometerSun className="w-12 h-12 text-blue-500 mb-4" />,
      title: "AC Installation",
      description: "Professional installation of all types of air conditioners with proper setup and configuration for optimal performance."
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-500 mb-4" />,
      title: "AC Repair & Maintenance",
      description: "Expert repair services for all AC brands with regular maintenance plans to ensure your system runs efficiently year-round."
    },
    {
      icon: <Wind className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Air Quality Solutions",
      description: "Comprehensive air quality assessment and solutions to improve indoor air quality and create a healthier living environment."
    },
    {
      icon: <Snowflake className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Commercial Cooling",
      description: "Specialized cooling solutions for commercial spaces, offices, and industrial facilities with custom design and implementation."
    }
  ];

  const products = [
    {
      name: "Split AC Units",
      description: "Energy-efficient split AC units perfect for residential use with advanced cooling technology and low noise operation.",
      features: ["Energy Star Rated", "Smart Control", "Anti-bacterial Filter", "Sleep Mode"]
    },
    {
      name: "Window AC Units",
      description: "Compact and powerful window AC units ideal for small spaces and single rooms with easy installation and maintenance.",
      features: ["Quick Cooling", "Adjustable Airflow", "Washable Filter", "Energy Saving Mode"]
    },
    {
      name: "Cassette AC Systems",
      description: "Ceiling-mounted cassette AC systems for commercial spaces with 360° airflow and elegant design that blends with any interior.",
      features: ["360° Air Distribution", "Remote Control", "Timer Function", "Auto Restart"]
    },
    {
      name: "Portable AC Units",
      description: "Versatile portable AC units that can be moved from room to room, perfect for renters or temporary cooling needs.",
      features: ["No Installation Required", "Dehumidifier Function", "Multiple Fan Speeds", "Programmable Timer"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Homeowner",
      comment: "K2 Air Freeze transformed our home comfort. Their technicians were professional and completed the installation quickly. Our new AC works perfectly and the service was outstanding!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Restaurant Owner",
      comment: "We've been using K2 Air Freeze for our restaurant's AC maintenance for over 2 years. Their service is always prompt and reliable. Highly recommended for commercial AC needs!",
      rating: 5
    },
    {
      name: "Arun Patel",
      position: "Office Manager",
      comment: "When our office AC system broke down during summer, K2 Air Freeze responded immediately. They diagnosed and fixed the issue within hours. Excellent emergency service!",
      rating: 4
    }
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "5000+", label: "Happy Customers" },
    { value: "24/7", label: "Customer Support" },
    { value: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Snowflake className="h-8 w-8 text-blue-600 mr-2" />
              <span className="font-bold text-xl md:text-2xl text-blue-600">K2 Air Freeze</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'products', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium hover:text-blue-600 transition-colors ${activeSection === item ? 'text-blue-600' : 'text-gray-700'}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3">
                {['home', 'about', 'services', 'products', 'testimonials', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-medium py-2 hover:text-blue-600 transition-colors ${activeSection === item ? 'text-blue-600' : 'text-gray-700'}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Expert <span className="text-blue-600">AC Solutions</span> for Your Comfort
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Salem's premier air conditioning sales and service provider. We keep you cool when it matters most.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-600 transition-colors duration-300"
                >
                  Our Services
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Air conditioning technician servicing an AC unit" 
                className="rounded-lg shadow-xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Contact Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white shadow-lg transform translate-y-1/2">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 py-4">
              <div className="flex items-center justify-center md:justify-start py-3 md:py-0">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-medium">7200911747</p>
                </div>
              </div>
              <div className="flex items-center justify-center py-3 md:py-0">
                <Clock className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Working Hours</p>
                  <p className="font-medium">Mon-Sat: 9AM - 8PM</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end py-3 md:py-0">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Gugai, Salem-636006</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About K2 Air Freeze</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for all air conditioning needs in Salem since 2013
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Why Choose K2 Air Freeze?</h3>
              <p className="text-gray-600 mb-6">
                At K2 Air Freeze, we pride ourselves on delivering exceptional air conditioning solutions tailored to meet the unique needs of our customers. With over a decade of experience in the industry, our team of certified technicians is committed to providing top-notch service with a focus on quality, reliability, and customer satisfaction.
              </p>
              <p className="text-gray-600 mb-6">
                We understand that a comfortable indoor environment is essential for your home and business. That's why we offer comprehensive AC sales, installation, maintenance, and repair services to ensure your cooling systems operate at peak efficiency year-round.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />, text: "Certified Technicians" },
                  { icon: <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />, text: "Genuine Parts" },
                  { icon: <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />, text: "Transparent Pricing" },
                  { icon: <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />, text: "Emergency Service" },
                  { icon: <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />, text: "Warranty Support" },
                  { icon: <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />, text: "Eco-friendly Solutions" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    {item.icon}
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2 bg-blue-50 p-8 rounded-lg shadow-lg">
              <div className="mb-8">
                <img 
                  src="/gg.jpg" 
                  alt="K2 Air Freeze Store Front" 
                  className=" w-full h-96 rounded-lg shadow-md mb-6"
                />
                <p className="text-sm text-gray-500 text-center">Our store location at Gugai, Salem</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
                    <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-600 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-3">Our Mission</h4>
                <p className="mb-0">
                  To provide exceptional air conditioning solutions that enhance comfort, improve air quality, and promote energy efficiency for homes and businesses in Salem and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive air conditioning solutions for residential and commercial needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-600 text-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Emergency AC Repair Service</h3>
                <p className="mb-6">
                  AC problems don't wait for convenient times. That's why we offer 24/7 emergency repair services to ensure your comfort is restored as quickly as possible.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Quick response time within 60 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Available 24/7 including weekends and holidays</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fully equipped service vehicles</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-center mb-4">
                  <Phone className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-xl font-bold">Emergency Hotline</p>
                </div>
                <a href="tel:7200911747" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-center">
                  Call: 7200911747
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                Residential Services
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Home AC installation and setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular maintenance and tune-ups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Filter replacement and cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Refrigerant leak detection and repair</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Thermostat installation and programming</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                Commercial Services
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Commercial HVAC system design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Installation for offices and retail spaces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Preventive maintenance contracts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Energy efficiency assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>24/7 emergency service for businesses</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Wrench className="h-6 w-6 text-blue-600 mr-2" />
                Maintenance Plans
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Annual maintenance contracts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Seasonal system tune-ups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Priority scheduling for service calls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Discounted repair services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Extended warranty options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of air conditioning products from leading brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center">Brands We Carry</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Daikin", "Voltas", "Blue Star", "Carrier", "Hitachi", "LG", "Samsung", "Panasonic"].map((brand, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <p className="font-medium text-gray-800">{brand}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-700 mb-4">
                  We are authorized dealers for all major AC brands, offering genuine products with manufacturer warranty.
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
                >
                  Inquire About Products <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl font-medium text-gray-700 mb-6">
              Join our growing list of satisfied customers across Salem
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
            >
              Get in Touch Today <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reach out to us for all your air conditioning needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Our Location</p>
                      <p className="text-gray-600">30, Gowri Complex, Line Road, Opp to Swamy Kovil, Gugai, Salem-636006</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Phone Number</p>
                      <p className="text-gray-600">7200911747</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Email Address</p>
                      <p className="text-gray-600">info@k2airfreeze.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Working Hours</p>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM (Emergency Service Only)</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="font-medium mb-3">Follow Us</p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Required
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="installation">AC Installation</option>
                        <option value="repair">AC Repair</option>
                        <option value="maintenance">AC Maintenance</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe your requirements..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <Snowflake className="h-6 w-6 text-blue-400 mr-2" />
                <span className="font-bold text-xl">K2 Air Freeze</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner for all air conditioning needs in Salem since 2013.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Products', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AC Installation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AC Repair</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AC Maintenance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Cooling</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Air Quality Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">30, Gowri Complex, Line Road, Opp to Swamy Kovil, Gugai, Salem-636006</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">7200911747</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">info@k2airfreeze.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} K2 Air Freeze. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;