import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import leopardImage from '@/assets/leopard-portrait.jpg';
import jungleImage from '@/assets/jungle-trail.jpg';
import sunsetImage from '@/assets/sunset-safari.jpg';
import privateImage from '@/assets/private-safari.jpg';

const packages = [
  {
    name: 'Sunrise & Sunset Combo',
    description: 'Leopard Safari at sunrise and sunset',
    originalPrice: 5000,
    discountedPrice: 4000,
    image: leopardImage,
    features: ['Morning & Evening Safari', 'Expert Guide', 'Refreshments'],
  },
  {
    name: 'Jungle Safari',
    description: 'Explore the wilderness trails',
    originalPrice: 5000,
    discountedPrice: 4000,
    image: jungleImage,
    features: ['3 Hour Safari', 'Wildlife Spotting', 'Jeep Ride'],
  },
  {
    name: 'Sunset Leopard Safari',
    description: 'Full day golden hour experience',
    originalPrice: 10000,
    discountedPrice: 8000,
    image: sunsetImage,
    features: ['Full Day Adventure', 'Lunch Included', 'Photography Session'],
  },
  {
    name: 'Private Full Day Safari',
    description: 'Exclusive luxury experience',
    originalPrice: 10000,
    discountedPrice: 8500,
    image: privateImage,
    features: ['Private Jeep', 'Personal Guide', 'Premium Service'],
  },
];

const Packages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="packages" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3">
            Safari <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose from our curated safari experiences designed for unforgettable adventures
          </p>
        </motion.div>

        {/* Package Cards */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {Math.round((1 - pkg.discountedPrice / pkg.originalPrice) * 100)}% OFF
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-display font-bold text-primary">
                    ₹{pkg.discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{pkg.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Book Button */}
                <a href="#booking" className="btn-safari w-full text-center block">
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
