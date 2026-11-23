import PageBackground from "../components/PageBackground.tsx";
import { backgrounds, video } from "../data/site.ts";

export default function MovingPicturePage() {
  return (
    <div className="inner-page moving-page">
      <PageBackground src={backgrounds.movingPicture} />
      <main className="moving-main">
        <h1 className="sr-only">Moving Picture</h1>
          <div className="moving-stage">
            <iframe
              className="page-video"
              src={video.embed}
              title="Showreel"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
      </main>
    </div>
  );
}
