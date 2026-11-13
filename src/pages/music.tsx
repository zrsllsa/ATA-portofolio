import GalleryPage from "../components/GalleryPage.tsx";
import { backgrounds, musicPhotos } from "../data/site.ts";

export default function Music() {
  return <GalleryPage title="Music" background={backgrounds.music} photos={musicPhotos} />;
}
