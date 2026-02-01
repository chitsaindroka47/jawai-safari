import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Rashmi Parihar',
    rating: 5,
    text: 'Very good 👍💯',
    avatar: 'RP',
    time: '2 months ago',
  },
  {
    name: 'Vishal Nagar',
    rating: 5,
    text: 'It was a really awesome experience',
    avatar: 'VN',
    time: '1 month ago',
  },
  {
    name: 'Hemant Jain',
    rating: 5,
    text: 'Amazing safari and very supportive team',
    avatar: 'HJ',
    time: '3 weeks ago',
  },
  {
    name: 'Ananya Sharma',
    rating: 5,
    text: 'Best jungle safari experience ever',
    avatar: 'AS',
    time: '1 month ago',
  },
  {
    name: 'Rohit Mehta',
    rating: 4,
    text: 'Great service and friendly guides',
    avatar: 'RM',
    time: '2 weeks ago',
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
        >
          {/* Left Side - Rating Summary */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              EXCELLENT
            </h2>
            <div className="flex justify-center lg:justify-start gap-1 mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              Based on <span className="text-foreground font-semibold">31 reviews</span>
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-2">
              <GoogleLogo />
              <span className="text-sm text-muted-foreground">Google Reviews</span>
            </div>
          </div>

          {/* Right Side - Horizontal Slider */}
          <div className="flex-1 relative w-full">
            {/* Navigation Buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 p-2 bg-card border border-border rounded-full shadow-lg hover:border-primary/50 transition-colors hidden md:flex"
            >
              <ChevronLeft size={20} className="text-primary" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 p-2 bg-card border border-border rounded-full shadow-lg hover:border-primary/50 transition-colors hidden md:flex"
            >
              <ChevronRight size={20} className="text-primary" />
            </button>

            {/* Review Cards Slider */}
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[300px] bg-[#1a2420] rounded-xl p-5 shadow-lg snap-start border border-border/50"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
                        <span className="text-sm font-bold text-background">{review.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.time}</p>
                      </div>
                    </div>
                    <GoogleLogo />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-foreground/90 leading-relaxed mb-3">
                    {review.text}
                  </p>

                  {/* Links */}
                  <div className="flex gap-4 text-xs">
                    <button className="text-primary hover:underline">Owner's reply</button>
                    <button className="text-muted-foreground hover:text-foreground">Read more</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;