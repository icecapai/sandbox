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
    title: "壮大なるふわふわ",
    description: "コーギーの自然な尻尾は、キツネの尻尾にも匹敵する見事な毛並みです。ふわふわで、素晴らしく、すでに完璧な犬にさらなる可愛さを加えてくれます。"
  },
  {
    icon: "💬",
    title: "最大限の表現力",
    description: "犬は尻尾でたくさんのことを伝えます。尻尾のあるコーギーは、興奮してヘリコプターのように回転する動きから、穏やかで幸せな揺れまで、感情の全スペクトルを見せてくれます。"
  },
  {
    icon: "🌿",
    title: "自然のままで完璧",
    description: "尻尾のあるコーギーは、自然が設計した通りのコーギーです。これらの牧羊犬は、バランス、コミュニケーション、表現のために尻尾とともに進化しました。"
  },
  {
    icon: "⚖️",
    title: "優れたバランス",
    description: "尻尾はコーギーの素晴らしい敏捷性を助けます。牧羊、遊び、庭を走り回る時も、尻尾は長い体と短い足の重要なカウンターバランスを提供します。"
  },
  {
    icon: "🦊",
    title: "キツネのような魅力",
    description: "とがった耳、キツネのような顔、ふわふわの尻尾を持つコーギーは、まるで最も愛らしい小さなキツネのようです。まさにおとぎ話の森の生き物の美学です。"
  },
  {
    icon: "❤️",
    title: "もっと愛せる",
    description: "正直に言いましょう — コーギーは多ければ多いほど良いのです。余分なふわふわ、揺れる尻尾、完璧なシルエット。単純にもっと愛せるコーギーです。"
  }
];

const facts = [
  { number: "70%", label: "の国が美容目的の断尾を禁止" },
  { number: "30+", label: "種類の尻尾の位置で犬はコミュニケーション" },
  { number: "100%", label: "もっとふわふわを楽しめる" }
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
            尻尾のあるコーギー
          </motion.h1>
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            自然が意図した姿。愛が求める姿。
          </motion.p>
        </header>
      </HeaderReveal>

      <HeroReveal>
        <img
          src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?w=1400&h=500&fit=crop&crop=center"
          alt="草原を駆け回るふわふわの尻尾を持つ幸せなコーギー"
          className="hero-image"
        />
      </HeroReveal>

      <div className="container">
        <FadeUp>
          <section className="intro">
            <p>
              長い間、コーギーの壮大な尻尾は見過ごされてきました。多くの人が断尾されたコーギーの愛らしい「食パン」のようなシルエットを知り、愛していますが、完全で自然な姿のコーギー — ふわふわの尻尾付き — には、本当に魔法のような何かがあります。
            </p>
          </section>
        </FadeUp>

        <FadeUp delay={0.1}>
          <section>
            <h2>尻尾付きコーギーが心を盗む理由</h2>
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
            <h2>尻尾の事実</h2>
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
            <h2>尻尾付きコーギーギャラリー</h2>
            <TiltGallery />
          </section>
        </FadeUp>

        <FadeUp>
          <section className="quote-section">
            <blockquote>
              <TypeWriter
                text="コーギーの尻尾は単なる毛と骨ではありません — それは喜びの旗、友情の印、そして人生の最高のものには尻尾の振りがついてくるという永遠のリマインダーです。"
              />
            </blockquote>
            <motion.p
              className="quote-author"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ delay: 2 }}
            >
              — すべての尻尾付きコーギー愛好家
            </motion.p>
          </section>
        </FadeUp>

        <FadeUp>
          <section>
            <div className="cardigan-section">
              <SlideIn direction="left">
                <motion.img
                  src="https://images.unsplash.com/photo-1597633425046-08f5110420b5?w=500&h=400&fit=crop"
                  alt="美しい尻尾を持つカーディガン・ウェルシュ・コーギー"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </SlideIn>
              <SlideIn direction="right">
                <div className="cardigan-text">
                  <h2>カーディガンとのつながり</h2>
                  <p style={{ marginBottom: '15px' }}>
                    ペンブローク・ウェルシュ・コーギーは歴史的な断尾の慣習により尻尾がないことが多いですが、いとこである<strong>カーディガン・ウェルシュ・コーギー</strong>は常に壮大な尻尾を保ってきました。今日、ますます多くのペンブロークのブリーダーが尻尾を残すことを選んでおり、その結果は心温まるものです。
                  </p>
                  <p>
                    ペンブロークでもカーディガンでも、尻尾のあるコーギーは、これらの素晴らしい犬たちを完全で自然な姿で愛でる動きの象徴です。どちらが「良い」かではなく、これらの素晴らしい仲間の完全な美しさを祝うことなのです。
                  </p>
                </div>
              </SlideIn>
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section className="cta-section">
            <h2>尻尾愛好会に参加しよう</h2>
            <TailWagOMeter />
            <motion.p
              style={{ marginTop: '30px', fontSize: '1.1rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              次に尻尾のあるコーギーを見かけたら、その壮大なふわふわを愛でる時間を取ってください。喜びを分かち合いましょう。言葉を広めましょう。すべてのコーギー — 尻尾があってもなくても — 愛に値しますが、幸せに揺れるふわふわの尻尾には特別な何かがあるのです。
            </motion.p>
          </section>
        </FadeUp>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>世界中のふわふわ尻尾の友達のために <span className="heart">♥</span> を込めて作りました</p>
        <p style={{ marginTop: '10px', opacity: 0.7 }}>すべてのコーギーは素晴らしい。尻尾付きコーギーはもう少しだけ素晴らしい。</p>
      </motion.footer>
    </>
  );
}

export default App;
