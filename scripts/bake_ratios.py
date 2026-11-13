import struct
from pathlib import Path

ROOT = Path("public")


def png_size(path: Path) -> tuple[int, int]:
    with path.open("rb") as handle:
        handle.read(8)
        handle.read(4)
        handle.read(4)
        width, height = struct.unpack(">II", handle.read(8))
        return width, height


def emit(folder: str, names: list[str], captions: dict[str, str] | None = None) -> str:
    lines: list[str] = []
    for name in names:
        path = ROOT / folder / name
        width, height = png_size(path)
        src = "/" + (Path(folder) / name).as_posix()
        ratio = round(width / height, 6)
        caption = (captions or {}).get(src, "")
        lines.append(f'  {{ src: {src!r}, caption: {caption!r}, ratio: {ratio} }},')
    return "\n".join(lines)


HOME_CAPTIONS = {
    "/images/homepage/Rectangle 2.png": "MAGNOLIA CELEBRATION PROFILE\nAPRIL - OKTOBER 2026",
    "/images/homepage/Rectangle 3.png": "SORE ZE BAND\nSUNSET DI KEBUN BOGOR 2026",
    "/images/homepage/Rectangle 4.png": "SV IPB\nFESTIVAL BUDAYA NUSANTARA 16",
    "/images/homepage/Rectangle 5.png": "PHOTOSHOOT\nIPB MERCH 2025",
    "/images/homepage/Rectangle 6.png": "PRE-GRADUATE\nPHOTOSHOOT",
    "/images/homepage/Rectangle 7.png": "AGNY SYMPHONY 2026",
    "/images/homepage/Rectangle 10.png": "PERUNGGU IN\nACRA IPB 2025",
    "/images/homepage/Rectangle 11.png": "BARASUARA IN\nGRAB IT FEST 2026",
    "/images/homepage/Rectangle 12.png": "BROKENSCENE\nPHOTOSHOOT",
    "/images/homepage/Rectangle 22.png": "PHOTOSHOOT\nMERCH MPKMB 63",
    "/images/homepage/Rectangle 24.png": "BRI IN PESTAPORA\nWITH REZA CHANDIKA",
    "/images/homepage/Rectangle 25.png": "GRADUATION\nPHOTOSHOOT",
    "/images/homepage/Rectangle 26.png": "HINDIA IN\nMENDADAK FESTIVAL 2025",
    "/images/homepage/Rectangle 27.png": "NONA ALBUM\nLAUNCH PARTY",
}

HOME = [
    "Rectangle 2.png",
    "Rectangle 3.png",
    "Rectangle 4.png",
    "Rectangle 5.png",
    "Rectangle 6.png",
    "Rectangle 7.png",
    "Rectangle 10.png",
    "Rectangle 11.png",
    "Rectangle 12.png",
    "Rectangle 22.png",
    "Rectangle 24.png",
    "Rectangle 25.png",
    "Rectangle 26.png",
    "Rectangle 27.png",
]

PEOPLE = [
    "1 JULI  (196 of 464) 1.png",
    "baskeeeArtboard 3 1.png",
    "udahhhhhhhhArtboard 4 1.png",
    "merchhArtboard 5 1.png",
    "image 7.png",
    "BAS (11 of 28) 1.png",
    "HALOWENN (32 of 80) 1.png",
    "graduationnnnnnn-42 1.png",
    "IKMP FOTO BESAMO (65 of 96) 1.png",
    "graduationnnnnnn-77 1.png",
    "MERCH IPB (86 of 338) 1.png",
    "YA BEGITULAH (125 of 268) 1.png",
    "BROKEN-172 1.png",
    "graduationnnnnnn-172 1.png",
    "YA BEGITULAH (204 of 268) 1.png",
    "MERCH IPB (206 of 338) 1.png",
    "MERCH IPB (306 of 338) 1.png",
    "ATR05319 1.png",
    "DSC07324 1.png",
    "DSC08734 1.png",
    "DSC09047~2 1.png",
]

MUSIC = [
    "pik opik1Artboard 8 (1) 1.png",
    "popopoArtboard 1 1.png",
    "pppp1Artboard 6 1.png",
    "SUNSET DI KEBUNArtboard 1 2.png",
    "Untitled-1ADArtboard 6 1.png",
    "Untitled-1bafesArtboard 10 1.png",
    "Untitled-1bafesArtboard 8 1.png",
    "HINDIA FEEDSArtboard 2 (1) 1.png",
    "image 3.png",
    "pokkokArtboard 3 1.png",
    "image 4.png",
    "ACRAArtboard 5 1.png",
    "image 5.png",
    "DEWA POST BAFESTArtboard 6 1.png",
    "image 6.png",
    "kunto postArtboard 6 1.png",
    "POPOPOP (6 of 37) 1.png",
    "pesporrrArtboard 7 1.png",
    "SUNSET DI KEBUNArtboard 11 1.png",
    "SORE DI SUNSET DI KEBUN (13 of 117) 1.png",
    "popopoArtboard 15 1.png",
    "ACRAArtboard 16 1.png",
    "INI UDH,INI COLLABArtboard 20 1.png",
    "BAFEST ATTAR.JPG-22 1.png",
    "mugalll (45 of 153) 1.png",
    "mugalll (63 of 153) 1.png",
    "PKPKPK (97 of 171) 1.png",
    "EVENT TANAIR (243 of 264) 1.png",
    "ACRA 2025 (422) 1.png",
    "GIF 2026  (49 of 78) 1.png",
]

EVERYTHING = [
    "ANTARAAAArtboard 1 6.png",
    "image 1.png",
    "image 2.png",
    "DSC00785 1.png",
    "SWA03276 (1) 1.png",
    "DSC07956 1.png",
    "ATR09533 1.png",
    "ATR09671 1.png",
    "IMG_20240520_210123_492 (2) 1.png",
    "PXL_20240714_013126740.MP~3 1.png",
    "IMG_20241217_013912_362 1.png",
    "PXL_20260113_040006353 1.png",
    "PXL_20260116_031701369~2 1.png",
]

Path("_photo_arrays.txt").write_text(
    "\n".join(
        [
            "HOME",
            emit("images/homepage", HOME, HOME_CAPTIONS),
            "",
            "PEOPLE",
            emit("images/attarvisualphotogallery/people", PEOPLE),
            "",
            "MUSIC",
            emit("images/attarvisualphotogallery/music", MUSIC),
            "",
            "EVERYTHING",
            emit("images/attarvisualphotogallery/everything", EVERYTHING),
        ]
    ),
    encoding="utf-8",
)
print("ok")
