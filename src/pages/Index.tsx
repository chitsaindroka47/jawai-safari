import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Highlights from '@/components/Highlights';
import MovingStrip from '@/components/MovingStrip';
import ScrollStory from '@/components/ScrollStory';
import Packages from '@/components/Packages';
import Reviews from '@/components/Reviews';
import ReviewForm from '@/components/ReviewForm';
import BookingForm from '@/components/BookingForm';
import FloatingChat from '@/components/FloatingChat';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <MovingStrip />
      <ScrollStory />
      <Packages />
      <Reviews />
      <ReviewForm />
      <BookingForm />
      <Contact />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
