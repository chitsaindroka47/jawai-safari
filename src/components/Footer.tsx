import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '@/assets/logo.png';
const GoogleBusinessIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'Google', icon: GoogleBusinessIcon, href: 'https://google.com/business' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-background" />

      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-col items-center gap-3"
          >
            {/* LOGO PLACEHOLDER */}
            <img
              src={logo}
              alt="Jawai Wild Logo"
              className="w-14 h-14 object-contain"
            />

            <h3 className="text-3xl font-display font-bold text-primary">
              Jawai Wild
            </h3>

            <p className="text-muted-foreground max-w-md">
              Creating unforgettable wildlife experiences Since 2010
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <ul className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-8"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon />
              </a>
            ))}
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground"
          >
            <a
              href="tel:+918619821140"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={18} className="text-primary" />
              +91 8619821140
            </a>

            <a
              href="mailto:info@wildadventures.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={18} className="text-primary" />
              info@wildadventures.com
            </a>
          </motion.div>

          {/* BOTTOM BAR */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-border w-full"
          >
            <p className="text-muted-foreground text-sm">
              © {currentYear} Jawai Wild Bookings. All rights reserved.
            </p>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
