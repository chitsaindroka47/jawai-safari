import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import jungleImage from "@/assets/jungle-trail.jpg";
import trackingImage from "@/assets/tracking.jpg";
import leopardImage from "@/assets/leopard-portrait.jpg";
import memoriesImage from "@/assets/memories.png";
import sunsetImage from "@/assets/potrait.jpg";

const images = [
  { src: leopardImage, alt: "Leopard walking" },
  { src: trackingImage, alt: "Safari Jeep moving" },
  { src: jungleImage, alt: "Jungle trail" },
  { src: sunsetImage, alt: "Sunset view" },
  { src: memoriesImage, alt: "Wildlife close-up" },
];

const ScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // slower mapping
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 30,
    mass: 1,
  });

  const textOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={containerRef} className="relative min-h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="container mx-auto h-full px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 h-full items-center py-20">

            {/* LEFT TEXT */}
            <motion.div
              style={{ opacity: textOpacity }}
              className="flex flex-col justify-center lg:pr-12"
            >
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
                Your Journey
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                The Jawai Safari{" "}
                <span className="text-gradient">Experience</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Immerse yourself in the raw beauty of Jawai as you journey through
                rugged landscapes, track majestic leopards, witness golden
                sunsets, and create memories that last a lifetime.
              </p>
            </motion.div>

            {/* RIGHT IMAGES */}
            <div className="relative h-full flex items-center">
              <div className="w-full">
                <ImageStack scrollProgress={smoothProgress} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

interface ImageStackProps {
  scrollProgress: any;
}

const ImageStack = ({ scrollProgress }: ImageStackProps) => {
  return (
    <div className="relative aspect-[4/3] w-full">
      {images.map((image, index) => {
        const start = index / images.length;
        const end = (index + 1) / images.length;

        return (
          <ImageLayer
            key={index}
            image={image}
            start={start}
            end={end}
            scrollProgress={scrollProgress}
          />
        );
      })}
    </div>
  );
};

interface ImageLayerProps {
  image: { src: string; alt: string };
  start: number;
  end: number;
  scrollProgress: any;
}

const ImageLayer = ({
  image,
  start,
  end,
  scrollProgress,
}: ImageLayerProps) => {

  // Fade in & out
  const opacity = useTransform(
    scrollProgress,
    [start, start + 0.15, end - 0.15, end],
    [0, 1, 1, 0]
  );

  // Vertical movement bottom -> top
  const y = useTransform(
    scrollProgress,
    [start, end],
    ["35%", "-35%"]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 will-change-transform"
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        draggable={false}
        className="w-full h-full object-cover select-none pointer-events-none"
      />
    </motion.div>
  );
};

export default ScrollStory;
