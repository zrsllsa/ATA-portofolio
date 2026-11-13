from pathlib import Path
import re

root = Path("public/images")


def names(rel: str) -> list[str]:
    files = [p.name for p in (root / rel).iterdir() if p.is_file()]

    def key(n: str):
        nums = re.findall(r"\d+", n)
        return (int(nums[0]) if nums else 0, n.lower())

    return sorted(files, key=key)


def entries(rel: str) -> str:
    lines = []
    for name in names(rel):
        src = f"/images/{rel}/{name}"
        lines.append(f"  {{ src: {src!r}, caption: \"\" }},")
    return "\n".join(lines)


text = f'''// ===============================
// ISI KONTEN DI FILE INI
// ===============================
// src     = path foto/video di folder public
// caption = deskripsi singkat (HANYA dipakai di foto home)
// Foto di halaman people / music / everything tidak menampilkan caption

export type Photo = {{
  src: string;
  caption: string;
}};

export const site = {{
  name: "M Abdus Sattar",
  logo: "/images/contact/contact.png",
  instagram: "@attar.jpg",
  instagramUrl: "https://www.instagram.com/attar.jpg/",
  email: "muhammadattar358@gmail.com",
  phone: "+62-897265-8411",
  phoneUrl: "tel:+628972658411",
}};

export const backgrounds = {{
  home: "/images/background/homebackground.png",
  people: "/images/background/peoplebackground.png",
  everything: "/images/background/everythingbackground.png",
  music: "/images/background/everythingbackground.png",
  movingPicture: "/images/background/movingpicturebackground.png",
  contact: "/images/background/contactbackground.png",
}};

export const video = {{
  src: "/images/vidio/vidio.mp4",
}};

export const homeIntro = {{
  heading:
    "Hi, I am M Abdus Sattar, a visual creator and photographer based in Bogor, Indonesia",
  body: "I really like to make something that's beyond the paper and imagination. I like to translate something that I want to say from visual art and a story on just some still image.",
}};

// Foto home: 3 per baris. Isi caption-nya di sini.
export const homePhotos: Photo[] = [
{entries("homepage")}
];

// Kartu Attar Visual Photo Gallery di home (bisa diklik)
export const galleryCards = [
  {{
    title: "People",
    to: "/people",
    src: "/images/attarvisualphotogallery/people/graduationnnnnnn-42 1.png",
  }},
  {{
    title: "Everything",
    to: "/everything",
    src: "/images/attarvisualphotogallery/everything/image 1.png",
  }},
  {{
    title: "Music",
    to: "/music",
    src: "/images/attarvisualphotogallery/music/image 3.png",
  }},
];

export const peoplePhotos: Photo[] = [
{entries("attarvisualphotogallery/people")}
];

export const musicPhotos: Photo[] = [
{entries("attarvisualphotogallery/music")}
];

export const everythingPhotos: Photo[] = [
{entries("attarvisualphotogallery/everything")}
];
'''

out = Path("src/data/site.ts")
out.write_text(text, encoding="utf-8")
print(f"wrote {out}")
