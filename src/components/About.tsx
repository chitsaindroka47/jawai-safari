import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Eye, Users, Camera } from 'lucide-react';
import aboutImage from '@/assets/about-safari.png';

const features = [
  { icon: Shield, label: 'Safe & Secure' },
  { icon: Eye, label: 'Wildlife Spotting' },
  { icon: Users, label: 'Expert Guides' },
  { icon: Camera, label: 'Photography Friendly' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={aboutImage}
                alt="Safari Adventure"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 glass-card p-6 hidden md:block"
            >
              <div className="text-4xl font-display font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-6">
              Welcome to
              <span className="text-gradient block">Jawai Safari</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Experience the thrill of the wild with our expertly guided jungle safari tours. 
              We offer authentic and safe adventures through pristine wilderness, where you'll 
              encounter majestic leopards and diverse wildlife in their natural habitat.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 glass-card px-4 py-2"
                >
                  <feature.icon size={18} className="text-primary" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-safari inline-block"
            >
              Explore Packages
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
