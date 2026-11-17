import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  eager?: boolean;
};

export default function FrameImage({ src, alt, eager = false }: Props) {
  const [failed, setFailed] = useState(false);
  const fileName = src.split("/").pop();

  if (failed) {
    return <div className="img-fallback">{fileName}</div>;
  }

  return (
    <img
      className="frame-img"
      src={encodeURI(src.replace(/.png$/i, ".webp"))}
      alt={alt}
      draggable={false}
      loading="eager"
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
