import { useEffect, useRef } from "react";
import { video } from "../data/site.ts";

type Props = {
  className?: string;
};

// Satu elemen video dibuat saat app dibuka dan langsung diputar (tersembunyi),
// lalu dipindah ke halaman Moving Picture, jadi tidak perlu loading lagi.
const shared = document.createElement("video");
shared.src = encodeURI(video.src);
shared.muted = true;
shared.loop = true;
shared.playsInline = true;
shared.autoplay = true;
shared.preload = "auto";
shared.controls = false;
shared.style.cssText = "position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;left:0;top:0";
document.body.appendChild(shared);
shared.play().catch(() => {});

export default function AutoVideo({ className = "auto-video" }: Props) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    shared.className = className;
    shared.style.cssText = "";
    el.appendChild(shared);
    shared.play().catch(() => {});

    return () => {
      shared.style.cssText = "position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;left:0;top:0";
      document.body.appendChild(shared);
      shared.play().catch(() => {});
    };
  }, [className]);

  return <div ref={host} className="video-host" />;
}
