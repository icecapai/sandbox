import { motion } from 'framer-motion';
import './App.css';
import {
  FadeUp,
  FlipIn,
  StaggerContainer,
  StaggerItem,
  SlideIn,
  TypeWriter,
  HeroReveal,
  HeaderReveal
} from './components/ScrollReveal';
import TailWagOMeter from './components/TailWagOMeter';
import TiltGallery from './components/TiltGallery';

const reasons = [
  {
    icon: "💫",
    title: "The Magnificent Floof",
    description: "A corgi's natural tail is a glorious plume of fur that rivals even the most majestic of fox tails. It's fluffy, it's fabulous, and it adds an extra dimension of adorableness to an already perfect dog."
  },
  {
    icon: "💬",
    title: "Maximum Expression",
    description: "Dogs communicate so much through their tails. A tailed corgi can show you the full spectrum of emotions — from the excited helicopter spin to the gentle, happy sway. You'll always know exactly how your corgi feels."
  },
  {
    icon: "🌿",
    title: "Natural & Complete",
    description: "A corgi with a tail is a corgi as nature designed them. These herding dogs evolved with their tails for balance, communication, and expression. Keeping them intact honors their heritage."
  },
  {
    icon: "⚖️",
    title: "Better Balance",
    description: "Tails help corgis with their already-impressive agility. Whether they're herding, playing, or zooming around the yard, that tail provides crucial counterbalance for their long bodies and short legs."
  },
  {
    icon: "🦊",
    title: "The Fox-Like Charm",
    description: "With their pointed ears, foxy faces, and fluffy tails, tailed corgis look remarkably like the most adorable little foxes. It's the complete fairy-tale woodland creature aesthetic."
  },
  {
    icon: "❤️",
    title: "More to Love",
    description: "Let's be honest — more corgi is always better. That extra fluff, that wagging tail, that complete silhouette. It's simply more corgi to adore, and who could argue with that?"
  }
];

const facts = [
  { number: "70%", label: "of countries have banned cosmetic tail docking" },
  { number: "30+", label: "different tail positions dogs use to communicate" },
  { number: "100%", label: "more floof to appreciate" }
];

function App() {
  return (
    <>
      <HeaderReveal>
        <header>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Corgis With Tails
          </motion.h1>
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            The way nature intended. The way love demands.
          </motion.p>
        </header>
      </HeaderReveal>

      <HeroReveal>
        <img
          src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?w=1400&h=500&fit=crop&crop=center"
          alt="Happy corgi with a fluffy tail running through a meadow"
          className="hero-image"
        />
      </HeroReveal>

      <div className="container">
        <FadeUp>
          <section className="intro">
            <p>
              For too long, the magnificent corgi tail has been overlooked. While many know and love the adorable "loaf" silhouette of a docked corgi, there's something truly magical about a corgi in its complete, natural form — fluffy tail and all.
            </p>
          </section>
        </FadeUp>

        <FadeUp delay={0.1}>
          <section>
            <h2>Why Tailed Corgis Steal Our Hearts</h2>
            <StaggerContainer staggerDelay={0.15}>
              <div className="reasons">
                {reasons.map((reason, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="reason"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="reason-icon">{reason.icon}</span>
                      <div>
                        <h3>{reason.title}</h3>
                        <p>{reason.description}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </section>
        </FadeUp>

        <FadeUp>
          <section>
            <h2>Tail Facts</h2>
            <div className="facts">
              {facts.map((fact, index) => (
                <FlipIn key={index} delay={index * 0.15}>
                  <motion.div
                    className="fact-card"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span
                      className="fact-number"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.3 + index * 0.1
                      }}
                    >
                      {fact.number}
                    </motion.span>
                    <span className="fact-label">{fact.label}</span>
                  </motion.div>
                </FlipIn>
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section>
            <h2>Tailed Corgi Gallery</h2>
            <TiltGallery />
          </section>
        </FadeUp>

        <FadeUp>
          <section className="quote-section">
            <blockquote>
              <TypeWriter
                text="A corgi's tail is not just fur and bone — it's a banner of joy, a flag of friendship, and a constant reminder that some of life's best things come with a wag attached."
              />
            </blockquote>
            <motion.p
              className="quote-author"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ delay: 2 }}
            >
              — Every Tailed Corgi Enthusiast
            </motion.p>
          </section>
        </FadeUp>

        <FadeUp>
          <section>
            <div className="cardigan-section">
              <SlideIn direction="left">
                <motion.img
                  src="https://images.unsplash.com/photo-1597633425046-08f5110420b5?w=500&h=400&fit=crop"
                  alt="Beautiful Cardigan Welsh Corgi with full tail"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </SlideIn>
              <SlideIn direction="right">
                <div className="cardigan-text">
                  <h2>The Cardigan Connection</h2>
                  <p style={{ marginBottom: '15px' }}>
                    While Pembroke Welsh Corgis are often seen without tails (due to historical docking practices), their cousins the <strong>Cardigan Welsh Corgis</strong> have always kept their magnificent tails. Today, more and more Pembroke breeders are choosing to keep tails intact, and the results are absolutely heartwarming.
                  </p>
                  <p>
                    Whether Pembroke or Cardigan, a corgi with a tail represents a growing movement toward appreciating these wonderful dogs in their complete, natural form. It's not about which is "better" — it's about celebrating the full beauty of these incredible companions.
                  </p>
                </div>
              </SlideIn>
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section className="cta-section">
            <h2>Join the Tail Appreciation Society</h2>
            <TailWagOMeter />
            <motion.p
              style={{ marginTop: '30px', fontSize: '1.1rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Next time you see a corgi with a tail, take a moment to appreciate that magnificent floof. Share the joy. Spread the word. Because every corgi — tail or no tail — deserves love, but there's something extra special about that happy, wagging plume.
            </motion.p>
          </section>
        </FadeUp>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>Made with <span className="heart">♥</span> for fluffy-tailed friends everywhere</p>
        <p style={{ marginTop: '10px', opacity: 0.7 }}>All corgis are wonderful. Tailed corgis are just a little more wonderful.</p>
      </motion.footer>
    </>
  );
}

export default App;
