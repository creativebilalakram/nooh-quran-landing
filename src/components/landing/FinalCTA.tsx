import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import whatsappImg from "@/assets/whatsapp-3d.png";
import qrCode from "@/assets/community-qr.png";

const trustItems = [
  "Free Trial Available",
  "One-on-One Classes",
  "Flexible Schedule",
];

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary-foreground/10"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const FinalCTA = () => (
  <section className="py-24 md:py-32 bg-cta-gradient relative overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0">
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-foreground/[0.03] blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[80px]"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>

    <div className="container mx-auto px-4 relative">
      <div className="grid lg:grid-cols-[1fr_1.6fr_1fr] gap-8 lg:gap-6 items-center max-w-6xl mx-auto">
        {/* Left — WhatsApp Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="relative w-56 h-56 flex items-center justify-center">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[hsl(142,70%,40%)]/10 blur-2xl" />
            {/* Stacked floating logos */}
            {[
              { rotate: -12, scale: 0.7, x: -30, y: 30, opacity: 0.35, delay: 0.8 },
              { rotate: 8, scale: 0.8, x: 25, y: -20, opacity: 0.5, delay: 0.4 },
              { rotate: -3, scale: 1, x: 0, y: 0, opacity: 1, delay: 0 },
            ].map((item, i) => (
              <motion.img
                key={i}
                src={whatsappImg}
                alt="WhatsApp"
                className="absolute w-28 h-28 object-contain drop-shadow-xl"
                style={{ rotate: `${item.rotate}deg`, left: `calc(50% - 56px + ${item.x}px)`, top: `calc(50% - 56px + ${item.y}px)`, opacity: item.opacity }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              />
            ))}
          </div>
          <p className="font-body text-sm text-primary-foreground/50 tracking-wide text-center">
            Chat with us instantly
          </p>
        </motion.div>

        {/* Center — Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.25 }}
            className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-7"
          >
            <Sparkles className="text-primary-foreground" size={24} />
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-foreground mb-5 leading-tight">
            Start Your Quran Learning<br className="hidden sm:block" /> Journey Today
          </h2>
          <p className="font-body text-base md:text-lg text-primary-foreground/55 mb-10 max-w-lg leading-relaxed">
            Begin with a free trial class and experience personalized one-on-one Quran learning from the comfort of your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
            <Button variant="gold" size="xl">
              Start Free Trial
            </Button>
            <Button variant="whatsapp" size="xl">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="text-accent" size={14} />
                <span className="font-body text-xs text-primary-foreground/50">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — QR Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Floating particles around card */}
            <FloatingParticle delay={0} x="10%" y="5%" size={5} />
            <FloatingParticle delay={1.2} x="85%" y="15%" size={4} />
            <FloatingParticle delay={2} x="5%" y="75%" size={3} />
            <FloatingParticle delay={0.6} x="90%" y="80%" size={5} />

            <div className="relative bg-primary-foreground/[0.06] backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-7 text-center max-w-[240px] shadow-lg">
              {/* Glow border effect */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-primary-foreground/10 pointer-events-none" />

              <h3 className="font-display text-lg font-bold text-primary-foreground mb-2 relative">
                Join Our Free Community
              </h3>
              <p className="font-body text-xs text-primary-foreground/45 mb-5 leading-relaxed relative">
                Scan to join our learning community and stay connected.
              </p>

              <div className="relative mx-auto w-36 h-36 mb-5">
                {/* QR glow frame */}
                <div className="absolute -inset-2 rounded-2xl bg-accent/10 blur-md" />
                <div className="relative bg-primary-foreground rounded-xl p-2.5 shadow-md">
                  <img src={qrCode} alt="Community QR Code" className="w-full h-full object-contain" />
                </div>
                {/* Decorative dots */}
                <div className="absolute -inset-4 opacity-20 pointer-events-none" style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }} />
              </div>

              <p className="font-body text-[10px] text-primary-foreground/35 uppercase tracking-widest relative">
                Free to Join
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
