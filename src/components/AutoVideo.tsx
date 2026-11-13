import { video } from "../data/site.ts";

type Props = {
  className?: string;
};

export default function AutoVideo({ className = "auto-video" }: Props) {
  return (
    <video
      className={className}
      src={encodeURI(video.src)}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
    />
  );
}
