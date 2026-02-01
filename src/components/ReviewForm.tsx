import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ReviewForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    review: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.review) {
      toast({
        title: "Please fill all fields",
        description: "Name and review are required.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for your review!",
      description: "Your experience has been shared successfully.",
    });

    setFormData({ name: '', rating: 5, review: '' });
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Share Your Story
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3">
            Share Your <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Your feedback helps us improve and create better wildlife experiences for future travelers.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={24} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">Join 500+ happy travelers</span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 space-y-5 min-h-[60vh] md:min-h-0 flex flex-col justify-center"
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-4 bg-input border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              required
            />

            {/* Rating */}
            <div>
              <label className="block text-sm text-muted-foreground mb-3">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={32}
                      className={star <= formData.rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review */}
            <textarea
              placeholder="Share your experience..."
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              rows={4}
              className="w-full px-4 py-4 bg-input border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              required
            />

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-safari w-full flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Submit Review
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
