import type { Photo } from "../data/site.ts";
import PageBackground from "./PageBackground.tsx";
import PhotoGrid from "./PhotoGrid.tsx";

type Props = {
  title: string;
  background: string;
  photos: Photo[];
};

export default function GalleryPage({ title, background, photos }: Props) {
  return (
    <div className="inner-page">
      <PageBackground src={background} />
      <main className="inner-main">
        <h1 className="sr-only">{title}</h1>
        <PhotoGrid photos={photos} />
      </main>
    </div>
  );
}
