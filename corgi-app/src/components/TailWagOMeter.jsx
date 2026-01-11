import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import confetti from 'canvas-confetti';

const wagMessages = [
  { level: 0, label: "Not a fan yet?", message: "Give tails a chance..." },
  { level: 1, label: "Curious", message: "You're starting to see the floof appeal!" },
  { level: 2, label: "Interested", message: "That tail is looking pretty good, huh?" },
  { level: 3, label: "Warming up", message: "The floof is calling to you!" },
  { level: 4, label: "Tail believer", message: "You're officially team tail!" },
  { level: 5, label: "Floof enthusiast", message: "That's the spirit! Tails are amazing!" },
  { level: 6, label: "Tail fanatic", message: "You really get it now!" },
  { level: 7, label: "Corgi tail convert", message: "There's no going back now!" },
  { level: 8, label: "Maximum floof!", message: "You've achieved enlightenment!" },
  { level: 9, label: "TAIL OBSESSED", message: "Welcome to the tail appreciation society!" },
  { level: 10, label: "ULTIMATE TAIL LOVER!", message: "You are the chosen one! 🎉" }
];

export default function TailWagOMeter() {
  const [wagLevel, setWagLevel] = useState(5);
  const [hasMaxed, setHasMaxed] = useState(false);
  const tailControls = useAnimation();

  // Calculate wag speed based on level
  const wagDuration = Math.max(0.1, 0.5 - (wagLevel * 0.04));
  const wagAngle = 15 + (wagLevel * 3);

  useEffect(() => {
    // Animate the tail wagging
    tailControls.start({
      rotate: [wagAngle, -wagAngle, wagAngle],
      transition: {
        duration: wagDuration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [wagLevel, wagAngle, wagDuration, tailControls]);

  useEffect(() => {
    if (wagLevel === 10 && !hasMaxed) {
      setHasMaxed(true);
      triggerCelebration();
    }
  }, [wagLevel, hasMaxed]);

  const triggerCelebration = () => {
    // Fire confetti from both sides
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#8B4513', '#D2691E', '#FFD700', '#FFA500', '#FF6347'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const currentMessage = wagMessages[wagLevel] || wagMessages[5];

  return (
    <div className="wag-meter">
      <h3>How much do you love tailed corgis?</h3>

      <div className="corgi-display">
        <motion.span
          className="corgi-body"
          animate={{
            scale: wagLevel === 10 ? [1, 1.1, 1] : 1
          }}
          transition={{
            duration: 0.5,
            repeat: wagLevel === 10 ? Infinity : 0
          }}
        >
          🐕
        </motion.span>
        <motion.span
          className="corgi-tail"
          animate={tailControls}
          style={{ originX: 0, originY: 0.5 }}
        >
          〰️
        </motion.span>
      </div>

      <div className="wag-slider-container">
        <input
          type="range"
          min="0"
          max="10"
          value={wagLevel}
          onChange={(e) => setWagLevel(parseInt(e.target.value))}
          className="wag-slider"
        />
      </div>

      <motion.div
        className="wag-label"
        key={wagLevel}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {currentMessage.label}
      </motion.div>

      <motion.p
        className="wag-message"
        key={`msg-${wagLevel}`}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {currentMessage.message}
      </motion.p>

      {wagLevel >= 8 && (
        <motion.button
          className="celebration-btn"
          onClick={triggerCelebration}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎉 Celebrate the Floof! 🎉
        </motion.button>
      )}
    </div>
  );
}
