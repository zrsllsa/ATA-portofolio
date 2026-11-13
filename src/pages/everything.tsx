import GalleryPage from "../components/GalleryPage.tsx";
import { backgrounds, everythingPhotos } from "../data/site.ts";

export default function Everything() {
  return <GalleryPage title="Everything" background={backgrounds.everything} photos={everythingPhotos} />;
}
