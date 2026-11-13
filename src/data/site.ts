// ===============================
// ISI KONTEN DI FILE INI
// ===============================
// src     = path foto/video di folder public
// caption = deskripsi singkat (HANYA dipakai di foto home)
// Foto di halaman people / music / everything tidak menampilkan caption

export type Photo = {
  src: string;
  caption: string;
  /** width / height — dipakai biar grid langsung benar tanpa nunggu gambar load */
  ratio: number;
};

export const site = {
  name: "M Abdus Sattar",
  logo: "/images/contact/contact.png",
  instagram: "@attar.jpg",
  instagramUrl: "https://www.instagram.com/attar.jpg/",
  email: "muhammadattar358@gmail.com",
  phone: "+62-897265-8411",
  phoneUrl: "tel:+628972658411",
};

export const backgrounds = {
  home: "/images/background/homebackground.png",
  people: "/images/peoplebackground/peoplebackground.png",
  everything: "/images/background/everythingbackground.png",
  music: "/images/background/everythingbackground.png",
  movingPicture: "/images/background/movingpicturebackground.png",
  contact: "/images/background/contactbackground.png",
};

export const video = {
  src: "/images/vidio/vidio.mp4",
  caption: "Some Showreels of the visual storytelling i did in the past few year",
};

export const homeIntro = {
  heading:
    "Hi, I am M Abdus Sattar, a visual creator and photographer based in Bogor, Indonesia",
  body: "I really like to make something that's beyond the paper and imagination. I like to translate something that I want to say from visual art and a story on just some still image.",
};

export const portfolioIntro = {
  lead: "This is my Portofolio of what i did from this past year, i did many thing from design and make some visual storytelling narative in a form of film, campaign, ads and documentaion.",
  collab:
    "also the most importantly i been photographing many thing from people, music and collaborating with Magnolia Celebration, SOREZEBAND, IPB MERCH, Raffita Cake, Mendadak Festival, Brokenscene, SV IPB FESTIVAL BUDAYA NUSANTARA, ACRA, BPJS, BRI, Barasuara Jakarta fanbase, AGSN MPKMB IPB 63, 2026, BONTEH, Kanisius Health Expo 2026, BPK wilayah 7, Festival budaya nasional 2026",
};

// Foto home. caption muncul di bawah foto saat di-hover. Klik membuka Instagram.
export const homePhotos: Photo[] = [
  { src: "/images/homepage/Rectangle 2.png", caption: "MAGNOLIA CELEBRATION PROFILE\nAPRIL - OKTOBER 2026", ratio: 0.75 },
  { src: "/images/homepage/Rectangle 3.png", caption: "SORE ZE BAND\nSUNSET DI KEBUN BOGOR 2026", ratio: 0.75 },
  { src: "/images/homepage/Rectangle 4.png", caption: "SV IPB\nFESTIVAL BUDAYA NUSANTARA 16", ratio: 1.351528 },
  { src: "/images/homepage/Rectangle 5.png", caption: "PHOTOSHOOT\nIPB MERCH 2025", ratio: 0.75 },
  { src: "/images/homepage/Rectangle 6.png", caption: "PRE-GRADUATE\nPHOTOSHOOT", ratio: 0.75 },
  { src: "/images/homepage/Rectangle 7.png", caption: "AGNY SYMPHONY 2026", ratio: 1.333333 },
  { src: "/images/homepage/Rectangle 10.png", caption: "PERUNGGU IN\nACRA IPB 2025", ratio: 0.75 },
  { src: "/images/homepage/Rectangle 11.png", caption: "BARASUARA IN\nGRAB IT FEST 2026", ratio: 0.75 },
  { src: "/images/homepage/Rectangle 12.png", caption: "BROKENSCENE\nPHOTOSHOOT", ratio: 0.75 },
  { src: "/images/homepage/Rectangle 22.png", caption: "PHOTOSHOOT\nMERCH MPKMB 63", ratio: 0.75 },
  { src: "/images/homepage/Rectangle 24.png", caption: "BRI IN PESTAPORA\nWITH REZA CHANDIKA", ratio: 0.75 },
  { src: "/images/homepage/Rectangle 25.png", caption: "GRADUATION\nPHOTOSHOOT", ratio: 0.75 },
  { src: "/images/homepage/Rectangle 26.png", caption: "HINDIA IN\nMENDADAK FESTIVAL 2025", ratio: 1.333333 },
  { src: "/images/homepage/Rectangle 27.png", caption: "NONA ALBUM\nLAUNCH PARTY", ratio: 1.333333 },
];

// Kartu Attar Visual Photo Gallery di home (bisa diklik)
// Foto dari public/images/visualphoto
export const galleryCards = [
  {
    title: "People",
    to: "/people",
    src: "/images/visualphoto/graduArtboard 7 1.png",
  },
  {
    title: "Everything",
    to: "/everything",
    src: "/images/visualphoto/ANTARAAAArtboard 15 1.png",
  },
  {
    title: "Music",
    to: "/music",
    src: "/images/visualphoto/Untitled-1ADArtboard 1 1.png",
  },
];

export const peoplePhotos: Photo[] = [
  { src: "/images/attarvisualphotogallery/people/1 JULI  (196 of 464) 1.png", caption: "", ratio: 0.590864 },
  { src: "/images/attarvisualphotogallery/people/baskeeeArtboard 3 1.png", caption: "", ratio: 1.600534 },
  { src: "/images/attarvisualphotogallery/people/udahhhhhhhhArtboard 4 1.png", caption: "", ratio: 0.700535 },
  { src: "/images/attarvisualphotogallery/people/merchhArtboard 5 1.png", caption: "", ratio: 0.800359 },
  { src: "/images/attarvisualphotogallery/people/image 7.png", caption: "", ratio: 0.989439 },
  { src: "/images/attarvisualphotogallery/people/BAS (11 of 28) 1.png", caption: "", ratio: 0.66721 },
  { src: "/images/attarvisualphotogallery/people/HALOWENN (32 of 80) 1.png", caption: "", ratio: 0.710369 },
  { src: "/images/attarvisualphotogallery/people/graduationnnnnnn-42 1.png", caption: "", ratio: 0.667216 },
  { src: "/images/attarvisualphotogallery/people/IKMP FOTO BESAMO (65 of 96) 1.png", caption: "", ratio: 1.499435 },
  { src: "/images/attarvisualphotogallery/people/graduationnnnnnn-77 1.png", caption: "", ratio: 1.499405 },
  { src: "/images/attarvisualphotogallery/people/MERCH IPB (86 of 338) 1.png", caption: "", ratio: 0.576687 },
  { src: "/images/attarvisualphotogallery/people/YA BEGITULAH (125 of 268) 1.png", caption: "", ratio: 0.666857 },
  { src: "/images/attarvisualphotogallery/people/BROKEN-172 1.png", caption: "", ratio: 0.666415 },
  { src: "/images/attarvisualphotogallery/people/graduationnnnnnn-172 1.png", caption: "", ratio: 0.667214 },
  { src: "/images/attarvisualphotogallery/people/YA BEGITULAH (204 of 268) 1.png", caption: "", ratio: 0.755764 },
  { src: "/images/attarvisualphotogallery/people/MERCH IPB (206 of 338) 1.png", caption: "", ratio: 0.667678 },
  { src: "/images/attarvisualphotogallery/people/MERCH IPB (306 of 338) 1.png", caption: "", ratio: 0.666165 },
  { src: "/images/attarvisualphotogallery/people/ATR05319 1.png", caption: "", ratio: 1.333828 },
  { src: "/images/attarvisualphotogallery/people/DSC07324 1.png", caption: "", ratio: 1.5 },
  { src: "/images/attarvisualphotogallery/people/DSC08734 1.png", caption: "", ratio: 1.608825 },
  { src: "/images/attarvisualphotogallery/people/DSC09047~2 1.png", caption: "", ratio: 0.741667 },
];

export const musicPhotos: Photo[] = [
  { src: "/images/attarvisualphotogallery/music/pik opik1Artboard 8 (1) 1.png", caption: "", ratio: 0.665461 },
  { src: "/images/attarvisualphotogallery/music/popopoArtboard 1 1.png", caption: "", ratio: 0.8 },
  { src: "/images/attarvisualphotogallery/music/pppp1Artboard 6 1.png", caption: "", ratio: 1.60101 },
  { src: "/images/attarvisualphotogallery/music/SUNSET DI KEBUNArtboard 1 2.png", caption: "", ratio: 1.103175 },
  { src: "/images/attarvisualphotogallery/music/Untitled-1ADArtboard 6 1.png", caption: "", ratio: 1.599749 },
  { src: "/images/attarvisualphotogallery/music/Untitled-1bafesArtboard 10 1.png", caption: "", ratio: 0.75 },
  { src: "/images/attarvisualphotogallery/music/Untitled-1bafesArtboard 8 1.png", caption: "", ratio: 0.75 },
  { src: "/images/attarvisualphotogallery/music/HINDIA FEEDSArtboard 2 (1) 1.png", caption: "", ratio: 0.747646 },
  { src: "/images/attarvisualphotogallery/music/image 3.png", caption: "", ratio: 1.056238 },
  { src: "/images/attarvisualphotogallery/music/pokkokArtboard 3 1.png", caption: "", ratio: 0.800265 },
  { src: "/images/attarvisualphotogallery/music/image 4.png", caption: "", ratio: 1.361702 },
  { src: "/images/attarvisualphotogallery/music/ACRAArtboard 5 1.png", caption: "", ratio: 0.75 },
  { src: "/images/attarvisualphotogallery/music/image 5.png", caption: "", ratio: 1.06988 },
  { src: "/images/attarvisualphotogallery/music/DEWA POST BAFESTArtboard 6 1.png", caption: "", ratio: 1.600467 },
  { src: "/images/attarvisualphotogallery/music/image 6.png", caption: "", ratio: 1.874126 },
  { src: "/images/attarvisualphotogallery/music/kunto postArtboard 6 1.png", caption: "", ratio: 0.800131 },
  { src: "/images/attarvisualphotogallery/music/POPOPOP (6 of 37) 1.png", caption: "", ratio: 0.557196 },
  { src: "/images/attarvisualphotogallery/music/pesporrrArtboard 7 1.png", caption: "", ratio: 0.75 },
  { src: "/images/attarvisualphotogallery/music/SUNSET DI KEBUNArtboard 11 1.png", caption: "", ratio: 1.333333 },
  { src: "/images/attarvisualphotogallery/music/SORE DI SUNSET DI KEBUN (13 of 117) 1.png", caption: "", ratio: 0.712264 },
  { src: "/images/attarvisualphotogallery/music/popopoArtboard 15 1.png", caption: "", ratio: 0.800384 },
  { src: "/images/attarvisualphotogallery/music/ACRAArtboard 16 1.png", caption: "", ratio: 0.749042 },
  { src: "/images/attarvisualphotogallery/music/INI UDH,INI COLLABArtboard 20 1.png", caption: "", ratio: 0.800725 },
  { src: "/images/attarvisualphotogallery/music/BAFEST ATTAR.JPG-22 1.png", caption: "", ratio: 0.679612 },
  { src: "/images/attarvisualphotogallery/music/mugalll (45 of 153) 1.png", caption: "", ratio: 0.86 },
  { src: "/images/attarvisualphotogallery/music/mugalll (63 of 153) 1.png", caption: "", ratio: 0.809091 },
  { src: "/images/attarvisualphotogallery/music/PKPKPK (97 of 171) 1.png", caption: "", ratio: 0.666667 },
  { src: "/images/attarvisualphotogallery/music/EVENT TANAIR (243 of 264) 1.png", caption: "", ratio: 0.803714 },
  { src: "/images/attarvisualphotogallery/music/ACRA 2025 (422) 1.png", caption: "", ratio: 0.667445 },
  { src: "/images/attarvisualphotogallery/music/GIF 2026  (49 of 78) 1.png", caption: "", ratio: 1.5 },
];

export const everythingPhotos: Photo[] = [
  { src: "/images/attarvisualphotogallery/everything/ANTARAAAArtboard 1 6.png", caption: "", ratio: 0.800505 },
  { src: "/images/attarvisualphotogallery/everything/image 1.png", caption: "", ratio: 1.0 },
  { src: "/images/attarvisualphotogallery/everything/image 2.png", caption: "", ratio: 1.105598 },
  { src: "/images/attarvisualphotogallery/everything/DSC00785 1.png", caption: "", ratio: 0.666477 },
  { src: "/images/attarvisualphotogallery/everything/SWA03276 (1) 1.png", caption: "", ratio: 0.562865 },
  { src: "/images/attarvisualphotogallery/everything/DSC07956 1.png", caption: "", ratio: 0.563131 },
  { src: "/images/attarvisualphotogallery/everything/ATR09533 1.png", caption: "", ratio: 0.666911 },
  { src: "/images/attarvisualphotogallery/everything/ATR09671 1.png", caption: "", ratio: 1.499731 },
  { src: "/images/attarvisualphotogallery/everything/IMG_20240520_210123_492 (2) 1.png", caption: "", ratio: 0.998571 },
  { src: "/images/attarvisualphotogallery/everything/PXL_20240714_013126740.MP~3 1.png", caption: "", ratio: 1.331621 },
  { src: "/images/attarvisualphotogallery/everything/IMG_20241217_013912_362 1.png", caption: "", ratio: 0.749296 },
  { src: "/images/attarvisualphotogallery/everything/PXL_20260113_040006353 1.png", caption: "", ratio: 0.562801 },
  { src: "/images/attarvisualphotogallery/everything/PXL_20260116_031701369~2 1.png", caption: "", ratio: 0.75 },
];
