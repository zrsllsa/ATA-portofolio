import GalleryPage from "../components/GalleryPage.tsx";
import { backgrounds, peoplePhotos } from "../data/site.ts";

export default function People() {
  return <GalleryPage title="People" background={backgrounds.people} photos={peoplePhotos} />;
}
