"""Create stand-in PNGs so the layout is visible before real photos are dropped in."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1] / "public" / "images"
ROOT.mkdir(parents=True, exist_ok=True)


def font(size: int, bold: bool = False) -> ImageFont.ImageFont | ImageFont.FreeTypeFont:
    name = "arialbd.ttf" if bold else "arial.ttf"
    path = Path("C:/Windows/Fonts") / name
    if path.exists():
        return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def vertical(size: tuple[int, int], top: tuple[int, int, int], bottom: tuple[int, int, int]) -> Image.Image:
    width, height = size
    column = Image.new("RGB", (1, height))
    draw = ImageDraw.Draw(column)
    for y in range(height):
        blend = y / max(height - 1, 1)
        color = tuple(int(top[i] * (1 - blend) + bottom[i] * blend) for i in range(3))
        draw.point((0, y), fill=color)
    return column.resize(size, Image.Resampling.BILINEAR)


def save(img: Image.Image, name: str) -> None:
    img.save(ROOT / name, "PNG", optimize=True)


def framed(size: tuple[int, int], top: tuple[int, int, int], bottom: tuple[int, int, int], name: str) -> None:
    image = vertical(size, top, bottom)
    save(image, name)


logo = Image.new("RGBA", (560, 150), (0, 0, 0, 0))
draw = ImageDraw.Draw(logo)
draw.rounded_rectangle((8, 36, 86, 114), radius=4, fill=(255, 26, 26, 255))
draw.text((108, 34), "ATTAR", font=font(68, bold=True), fill=(255, 255, 255, 255))
logo.save(ROOT / "attar-logo.png", "PNG")

background = vertical((1600, 900), (16, 16, 18), (62, 60, 58))
mask = Image.new("L", background.size, 0)
ImageDraw.Draw(mask).ellipse((200, 40, 1400, 980), fill=175)
mask = mask.filter(ImageFilter.GaussianBlur(60))
glow = Image.new("RGB", background.size, (154, 146, 136))
background = Image.composite(glow, background, mask)
edge = Image.new("RGB", background.size, (6, 6, 8))
edge_mask = Image.new("L", background.size, 0)
ImageDraw.Draw(edge_mask).ellipse((280, 80, 1320, 820), fill=255)
edge_mask = edge_mask.filter(ImageFilter.GaussianBlur(48))
background = Image.composite(background, edge, edge_mask)
save(background, "background-home.png")

covers = {
    "home-people.png": ((112, 96, 88), (48, 40, 36)),
    "home-everything.png": ((86, 102, 78), (34, 44, 36)),
    "home-music.png": ((78, 98, 122), (30, 38, 52)),
}
for name, colors in covers.items():
    framed((1200, 800), colors[0], colors[1], name)

warm = ((120, 104, 96), (46, 38, 34))
cool = ((86, 108, 132), (28, 36, 48))
green = ((92, 110, 84), (32, 42, 34))

for index in range(1, 7):
    shift = index * 8
    framed(
        (900, 1120),
        tuple(min(255, c + shift) for c in warm[0]),
        warm[1],
        f"event-people{index}.png",
    )
    framed(
        (1200, 800),
        tuple(min(255, c + shift) for c in cool[0]),
        cool[1],
        f"event-music{index}.png",
    )
    framed(
        (1000, 1000),
        tuple(min(255, c + shift) for c in green[0]),
        green[1],
        f"event-everything{index}.png",
    )

framed((1600, 900), (70, 86, 104), (18, 22, 30), "movingpicture1.png")

for index in range(1, 6):
    tone = 70 + index * 12
    framed((1400, 880), (tone, tone, tone + 6), (36, 36, 38), f"design{index}.png")

palettes = [warm, cool, green, ((118, 92, 86), (42, 30, 28)), ((70, 78, 92), (22, 24, 30))]
for index in range(1, 18):
    top, bottom = palettes[(index - 1) % len(palettes)]
    shift = (index % 5) * 10
    size = (900, 1200) if index % 4 in (1, 2) else (1200, 800)
    framed(
        size,
        tuple(min(255, c + shift) for c in top),
        bottom,
        f"portfolio{index}.png",
    )

print(f"wrote placeholders to {ROOT}")
