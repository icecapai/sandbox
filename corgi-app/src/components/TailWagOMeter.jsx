import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import confetti from 'canvas-confetti';

const wagMessages = [
  { level: 0, label: "まだファンじゃない？", message: "尻尾にチャンスを..." },
  { level: 1, label: "興味あり", message: "ふわふわの魅力が見えてきましたね！" },
  { level: 2, label: "気になる", message: "その尻尾、かなり良くないですか？" },
  { level: 3, label: "温まってきた", message: "ふわふわがあなたを呼んでいます！" },
  { level: 4, label: "尻尾信者", message: "正式にチーム尻尾の一員です！" },
  { level: 5, label: "ふわふわ愛好家", message: "その調子！尻尾は素晴らしい！" },
  { level: 6, label: "尻尾マニア", message: "本当に分かってきましたね！" },
  { level: 7, label: "コーギー尻尾改宗者", message: "もう戻れません！" },
  { level: 8, label: "最大ふわふわ！", message: "悟りを開きました！" },
  { level: 9, label: "尻尾に夢中", message: "尻尾愛好会へようこそ！" },
  { level: 10, label: "究極の尻尾愛好家！", message: "あなたは選ばれし者です！ 🎉" }
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
      <h3>尻尾付きコーギーをどれくらい愛していますか？</h3>

      <div className="corgi-display">
        <motion.div
          className="corgi-tail"
          animate={tailControls}
          style={{ originX: 0.2, originY: 1 }}
        >
          <svg width="60" height="80" viewBox="0 0 60 80">
            <path
              d="M30 80 Q25 60 20 45 Q15 30 25 15 Q35 0 45 10 Q55 20 50 35 Q45 50 40 65 Q35 75 30 80"
              fill="#D2691E"
            />
            <path
              d="M32 75 Q28 58 24 45 Q20 32 28 20 Q36 8 44 15 Q50 22 46 35 Q42 50 38 62 Q35 72 32 75"
              fill="#E8A54B"
            />
          </svg>
        </motion.div>
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
          🎉 ふわふわをお祝い！ 🎉
        </motion.button>
      )}
    </div>
  );
}
