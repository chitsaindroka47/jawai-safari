import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3">
            Contact <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Have questions about our safari experiences? We're here to help you plan the perfect wildlife adventure.
              </p>
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Doodni, Via Jawai Bandh<br />
                    Pali, Rajasthan 306126, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Phone</h4>
                  <a
                    href="tel:+918619821140"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8619821140
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Email</h4>
                  <a
                    href="mailto:info@wildadventures.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@wildadventures.com
                  </a>
                </div>
              </div>

              {/* Safari Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Safari Hours</h4>
                  <p className="text-muted-foreground">6:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Large Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card overflow-hidden rounded-2xl h-[500px] lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115024.93261666855!2d73.15385175!3d25.0709722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941d1a1d9b0b3e9%3A0x6b5a2e3c5a4b4f5e!2sJawai%20Bandh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jawai Safari Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
