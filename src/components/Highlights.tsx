import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import leopardImage from '@/assets/leopard-portrait.jpg';
import jungleImage from '@/assets/jungle-trail.jpg';
import sunriseImage from '@/assets/sunrise-safari.jpg';
import sunsetImage from '@/assets/sunset-safari.jpg';
import privateImage from '@/assets/private-safari.jpg';

const experiences = [
  {
    title: 'Leopard Safari',
    description: 'Track the elusive Indian leopard',
    image: leopardImage,
  },
  {
    title: 'Jungle Safari',
    description: 'Explore dense forest trails',
    image: jungleImage,
  },
  {
    title: 'Sunrise Safari',
    description: 'Witness magical dawn moments',
    image: sunriseImage,
  },
  {
    title: 'Sunset Safari',
    description: 'Golden hour wildlife viewing',
    image: sunsetImage,
  },
  {
    title: 'Private Safari',
    description: 'Exclusive luxury experience',
    image: privateImage,
  },
];

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Experiences
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3">
            Experience <span className="text-gradient">Highlights</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-1">
                  {exp.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
