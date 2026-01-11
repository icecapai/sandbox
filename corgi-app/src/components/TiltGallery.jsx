import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?w=800&h=600&fit=crop",
    alt: "Corgi with fluffy tail sitting in grass",
    caption: "That magnificent floof in action"
  },
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
    alt: "Happy corgi running with tail wagging",
    caption: "Pure joy in motion"
  },
  {
    src: "https://images.unsplash.com/photo-1546975490-e8b92a360b24?w=800&h=600&fit=crop",
    alt: "Corgi portrait showing beautiful coat",
    caption: "The complete package"
  },
  {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
    alt: "Corgi relaxing showing full body",
    caption: "Relaxation with extra fluff"
  }
];

function TiltCard({ image, index, onClick }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the tilt
  const rotateX = useSpring(useTransform(y, [-150, 150], [15, -15]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-15, 15]), {
    stiffness: 300,
    damping: 30
  });

  // Parallax effect for the image
  const imgX = useSpring(useTransform(x, [-150, 150], [-10, 10]), {
    stiffness: 300,
    damping: 30
  });
  const imgY = useSpring(useTransform(y, [-150, 150], [-10, 10]), {
    stiffness: 300,
    damping: 30
  });

  // Shine effect
  const shineX = useTransform(x, [-150, 150], [0, 100]);
  const shineOpacity = useTransform(
    x,
    [-150, 0, 150],
    [0.3, 0, 0.3]
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="gallery-item"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(image)}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        style={{
          x: imgX,
          y: imgY,
          scale: 1.1
        }}
        draggable={false}
      />
      <motion.div
        className="gallery-caption"
        style={{ transform: "translateZ(30px)" }}
      >
        {image.caption}
      </motion.div>
      {/* Shine effect overlay */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)`,
          backgroundSize: "200% 100%",
          backgroundPositionX: shineX,
          opacity: shineOpacity,
          pointerEvents: "none"
        }}
      />
    </motion.div>
  );
}

function Lightbox({ image, onClose }) {
  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.button
        className="lightbox-close"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
      >
        ×
      </motion.button>
      <motion.div
        className="lightbox-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          src={image.src.replace('w=800', 'w=1200').replace('h=600', 'h=900')}
          alt={image.alt}
          layoutId={`image-${image.src}`}
        />
        <motion.div
          className="lightbox-caption"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {image.caption}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function TiltGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <TiltCard
            key={index}
            image={image}
            index={index}
            onClick={setSelectedImage}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
