import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Stories = () => {
  const [language, setLanguage] = useState<"en" | "zh">("zh");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* My Stories */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-medium text-center text-foreground">
              My Stories
            </h1>
            
            {/* Language Toggle */}
            <div className="flex justify-center gap-2">
              <Button
                variant={language === "zh" ? "default" : "outline"}
                onClick={() => setLanguage("zh")}
                className="px-6"
              >
                中文
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                onClick={() => setLanguage("en")}
                className="px-6"
              >
                English
              </Button>
            </div>
          </div>

          {/* Vipassana Story - Chinese */}
          {language === "zh" && (
            <article className="space-y-6 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-background via-primary/5 to-background border-2 border-primary/10">
              <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                我为什么从科技转向疗愈：十天内观冥想让我真正体验到"色即是空"
              </h2>

              <div className="space-y-6 text-foreground/80 font-light leading-relaxed">
                <p>
                  在硅谷的几年里，我一直被效率、成果、目标kpi 这些词包围。
                </p>

                <p>
                  每一天都在加速、决策、优化，但我渐渐发现——我失去了与自己连接的能力。
                </p>

                <p>
                  当我不再是那个拥有 title 的"谁"，当我静下心问自己："我是谁？我为何而忙？"
                </p>

                <p>
                  2年前，在低谷期，一些"共时性" synchonicity 事件的出现让我觉得我们的3D 世界没有那么简单，宇宙好像在给我传递一些信号，事情也慢慢朝着自己理想的状态发展。。。
                </p>

                <p>
                  最近的一次十天的<strong>Vipassana 内观禅修</strong>——让我真正体验到了一切都是震动和能量
                </p>

                <p>
                  10天，一个完全禁语的沉默旅程。
                </p>

                <p>
                  没有手机，没有社交，没有输入，甚至不能眼神交流和打手势。
                </p>

                <p>
                  整整十天，独自面对最难以预测的伙伴——自己的内心。
                </p>

                <p>
                  说实话，头几天完全是纯粹的煎熬。
                </p>

                <h3 className="text-xl font-medium text-foreground pt-4">与身体的抗争（第1-3天）</h3>

                <p>
                  凌晨四点的钟声如同残酷的玩笑。每天静坐十多小时，双腿痛到尖叫。思绪如混乱失控的暴民，每一小时都漫长如永恒。我一度确信自己做了个错误的决定。这是"混乱"阶段，唯一能观察到的就是自己的抗拒。
                </p>

                <h3 className="text-xl font-medium text-foreground pt-4">初现曙光（第4-5天）</h3>

                <p>
                  然后，转机出现了。第四天，在累积的疲惫和轻微感冒中，某种突破发生了。腿上灼烧般的疼痛...竟然消散了。取而代之的是一种细微的、嗡鸣的能量流动。我能追踪 sensations 在体内的移动。记得有一次，我感觉到一个喷嚏酝酿形成，穿过胸腔向上移动，最终在鼻腔里完全消失了…这是我第一次真切尝到一个深刻奥秘：当你察觉到它，它就消失了。
                </p>

                <h3 className="text-xl font-medium text-foreground pt-4"><strong>伟大的消融（第5天）</strong></h3>

                <p>
                  但真正的震撼来自第五天下午。这天下午我状态良好…入定很深大概1个半小时后，我固化的身体似乎...消失了。
                </p>

                <p>
                  "我"与周围的环境融在了一起
                </p>

                <p>
                  我成了一个振动的能量场，当老师在下午两点敲响钟声时，我感觉到自己的能量体随着声波摆动,一前一后地摆动。
                </p>

                <p>
                  那句古老的佛语<strong>"色即是空，空即是色"</strong>，从一个智性概念变成了鲜活、深刻的亲身体验。这是我生命中最震撼、最令人敬畏也最谦卑的时刻。我的大脑疯狂寻找立足点，与之抗争，产生了类似"鬼压床"的感觉。但这次体验不容否认。当我后来向老师描述时，她只是微笑着说："恭喜，你走在正确的道路上。"
                </p>

                <h3 className="text-xl font-medium text-foreground pt-4">新的实相（第6-10天）</h3>

                <p>
                  retreat 余下的时间就在稳定这个新的认知中度过。感官变得异常敏锐；斋堂里的食物成了味觉的交响乐。我怀着极大的幸福感和谦卑感受每一口食物，每一种新的食物组合，我感到能量自由流转，持续、切实地提醒着我：那个原以为的"我"，其本质是无常且无实体的。
                </p>

                <div className="bg-primary/5 border-l-4 border-primary/30 pl-6 py-4 my-8 italic">
                  <p className="text-foreground">
                    哈佛大学神经解剖学家 Dr. Jill Bolte Taylor 在《全脑生活（Whole Brain Living）》中提到：
                  </p>
                  <p className="mt-4">
                    当我们被"第二号大脑人格"——情绪性自我所掌控时，
                  </p>
                  <p>
                    身体会不断承载并循环过去的痛苦与创伤。
                  </p>
                  <p>
                    如果无法释放，它就会在神经回路中反复播放，
                  </p>
                  <p>
                    让痛苦愈加根深蒂固。
                  </p>
                  <p className="mt-4">
                    而瑜伽与冥想，正是帮助我们"松开"这一循环的途径。
                  </p>
                  <p>
                    它们能激活右脑的情绪皮质层，让我们回到当下，
                  </p>
                  <p>
                    感受生命的无限可能与纯粹存在。
                  </p>
                  <p className="mt-4">
                    当觉知之光照向右脑，
                  </p>
                  <p>
                    右脑的创造与高等思考中心被唤醒——
                  </p>
                  <p>
                    此刻，我们与宇宙合而为一，
                  </p>
                  <p>
                    进入敬畏、惊奇与深度连接的境界。
                  </p>
                </div>

                <h3 className="text-xl font-medium text-foreground pt-4">最后想说：</h3>

                <p>
                  <strong>这10天的旅程反映出一个核心真相：身心皆无常，无实休，由振动的能量构成。</strong>
                </p>

                <p>
                  但这对日常生活意味着什么？它意味着，幸福不在于控制外在世界以满足我们的贪爱和嗔恨，而在于掌握我们内在的回应能力。在于培养这样一种觉察：去看清任何一种感受——无论是疼痛、愤怒还是喜悦——都只是生起、并必定会消逝的能量波动。
                </p>

                <p>
                  <strong>这段经历，如今已成为我行动与创造的基石。我渴望分享一些工具，建立一种社群联结，陪伴更多人一起探索内在的扎根感，活出与生命本质对齐的状态。</strong>
                </p>

                <p>
                  <strong>因为当你意识到你不是你的念头，不是你的痛苦，也不是你讲述给自己的故事时，你便解锁了一种真正不可动摇的自由。</strong>
                </p>
              </div>
            </article>
          )}

          {/* Vipassana Story - English */}
          {language === "en" && (
            <article className="space-y-6 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-background via-primary/5 to-background border-2 border-primary/10">
              <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                Why I Shifted from Tech to Healing: A 10-Day Vipassana Journey into "Form is Emptiness"
              </h2>

              <div className="space-y-6 text-foreground/80 font-light leading-relaxed">
                <p>
                  During my years in Silicon Valley, I was constantly surrounded by words like efficiency, outcomes, targets, and KPIs.
                </p>

                <p>
                  Every day was about accelerating, deciding, optimizing—but I gradually realized I had lost the ability to connect with myself.
                </p>

                <p>
                  When I was no longer "someone" with a title, when I quietly asked myself: "Who am I? What am I busy for?"
                </p>

                <p>
                  Two years ago, during a low period, synchronicity events began appearing, making me realize our 3D world isn't as simple as it seems. The universe seemed to be sending signals, and things slowly moved toward the ideal state I envisioned.
                </p>

                <p>
                  Recently, a ten-day <strong>Vipassana meditation retreat</strong> allowed me to truly experience that everything is vibration and energy.
                </p>

                <p>
                  10 days. A completely silent journey of noble silence.
                </p>

                <p>
                  No phone, no socializing, no input, not even eye contact or gestures.
                </p>

                <p>
                  For ten full days, facing the most unpredictable companion—my own mind.
                </p>

                <p>
                  Honestly, the first few days were pure torment.
                </p>

                <h3 className="text-xl font-medium text-foreground pt-4">Battle with the Body (Days 1-3)</h3>

                <p>
                  The 4 AM bell felt like a cruel joke. Sitting for over ten hours daily, legs screaming in pain. Thoughts like an unruly mob, each hour stretching into eternity. I was convinced I'd made a terrible mistake. This was the "chaos" phase—the only thing I could observe was my own resistance.
                </p>

                <h3 className="text-xl font-medium text-foreground pt-4">First Light (Days 4-5)</h3>

                <p>
                  Then, a breakthrough. On the fourth day, amid accumulated exhaustion and a mild cold, something shifted. The burning pain in my legs... disappeared. It was replaced by a subtle, humming flow of energy. I could track sensations moving through my body. I remember once feeling a sneeze forming, moving up through my chest, and completely dissolving in my nasal cavity... This was my first taste of a profound mystery: when you become aware of it, it disappears.
                </p>

                <h3 className="text-xl font-medium text-foreground pt-4"><strong>The Great Dissolution (Day 5)</strong></h3>

                <p>
                  But the real震撼 came on the fifth afternoon. I was in good condition... After about an hour and a half of deep meditation, my solid body seemed to... disappear.
                </p>

                <p>
                  "I" merged with the surrounding environment.
                </p>

                <p>
                  I became a field of vibrating energy. When the teacher rang the bell at 2 PM, I felt my energy body swaying with the sound waves, back and forth.
                </p>

                <p>
                  That ancient Buddhist phrase <strong>"Form is emptiness, emptiness is form"</strong> transformed from an intellectual concept into a vivid, profound lived experience. This was the most震撼, awe-inspiring, and humbling moment of my life. My brain frantically searched for footing, fighting against it, creating a sensation similar to sleep paralysis. But this experience was undeniable. When I later described it to the teacher, she simply smiled and said: "Congratulations, you're on the right path."
                </p>

                <h3 className="text-xl font-medium text-foreground pt-4">New Reality (Days 6-10)</h3>

                <p>
                  The remainder of the retreat was spent stabilizing this new understanding. Senses became exceptionally acute; food in the dining hall became a symphony of taste. I savored each bite with immense gratitude and humility, every new food combination reminding me that energy flows freely, continuously and tangibly reminding me: the "I" I thought I was is fundamentally impermanent and insubstantial.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary/30 pl-6 py-4 my-8 italic">
                  <p className="text-foreground">
                    Harvard neuroanatomist Dr. Jill Bolte Taylor mentions in "Whole Brain Living":
                  </p>
                  <p className="mt-4">
                    When we're dominated by "Character 2"—the emotional self—
                  </p>
                  <p>
                    the body continuously carries and cycles past pain and trauma.
                  </p>
                  <p>
                    If we can't release it, it replays in our neural circuits,
                  </p>
                  <p>
                    making the pain increasingly entrenched.
                  </p>
                  <p className="mt-4">
                    Yoga and meditation are pathways to help us "let go" of this cycle.
                  </p>
                  <p>
                    They activate the emotional cortex of the right brain, bringing us back to the present,
                  </p>
                  <p>
                    to feel life's infinite possibilities and pure existence.
                  </p>
                  <p className="mt-4">
                    When the light of awareness shines on the right brain,
                  </p>
                  <p>
                    the right brain's creative and higher thinking centers awaken—
                  </p>
                  <p>
                    At this moment, we become one with the universe,
                  </p>
                  <p>
                    entering a realm of awe, wonder, and deep connection.
                  </p>
                </div>

                <h3 className="text-xl font-medium text-foreground pt-4">Final Thoughts:</h3>

                <p>
                  <strong>This 10-day journey revealed a core truth: body and mind are impermanent, insubstantial, composed of vibrating energy.</strong>
                </p>

                <p>
                  But what does this mean for daily life? It means happiness isn't about controlling the external world to satisfy our cravings and aversions, but about mastering our internal response capacity. It's about cultivating awareness to see that any sensation—whether pain, anger, or joy—is merely an energy fluctuation that arises and must pass away.
                </p>

                <p>
                  <strong>This experience has become the foundation of my actions and creations. I yearn to share tools, build community connections, and accompany more people in exploring inner groundedness, living in alignment with life's essence.</strong>
                </p>

                <p>
                  <strong>Because when you realize you are not your thoughts, not your pain, nor the stories you tell yourself, you unlock a truly unshakeable freedom.</strong>
                </p>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} · Crafted with intention
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Stories;
