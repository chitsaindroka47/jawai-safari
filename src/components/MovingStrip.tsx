import leopardImage from '@/assets/leopard-portrait.jpg';
import jungleImage from '@/assets/jungle-trail.jpg';
import safariImage from '@/assets/about-safari.png';
import campfireImage from '@/assets/private-safari.jpg';
import sunsetImage from '@/assets/sunset-safari.jpg';
import wildlifeImage from '@/assets/wildlife-closeup.jpg';
import memoriesImage from '@/assets/memories.png';

const images = [
  { src: leopardImage, alt: 'Leopard' },
  { src: safariImage, alt: 'Safari Jeep' },
  { src: jungleImage, alt: 'Jungle Trail' },
  { src: campfireImage, alt: 'Campfire' },
  { src: sunsetImage, alt: 'Sunset' },
  { src: wildlifeImage, alt: 'Wildlife' },
  { src: memoriesImage, alt: 'Memories' },
];

const MovingStrip = () => {
  // Double the images for seamless loop
  const allImages = [...images, ...images];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="relative fade-edges">
        <div className="flex animate-scroll">
          {allImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 md:w-80 h-48 md:h-56 mx-3 rounded-2xl overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovingStrip;
