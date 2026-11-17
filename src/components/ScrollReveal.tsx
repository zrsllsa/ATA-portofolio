import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    let dead = false;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 100%",
      once: true,
      onEnter: () => {
        // tunggu gambar selesai di-decode supaya tidak muncul setengah loading
        const imgs = Array.from(el.querySelectorAll("img"));
        Promise.all(imgs.map((img) => img.decode().catch(() => {}))).then(() => {
          if (dead) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 48, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 1, delay: delay / 1000, ease: "power3.out", clearProps: "transform" },
          );
        });
      },
    });

    return () => {
      dead = true;
      trigger.kill();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
