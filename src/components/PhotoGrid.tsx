import { useLayoutEffect, useMemo, useState, type CSSProperties } from "react";
import { site, type Photo } from "../data/site.ts";
import FrameImage from "./FrameImage.tsx";
import ScrollReveal from "./ScrollReveal.tsx";

type Props = {
  photos: Photo[];
  /** true hanya untuk foto di halaman home */
  showCaption?: boolean;
};

type Cell = {
  photo: Photo;
  index: number;
};

function columnsFromWidth(width: number) {
  if (width < 640) return 1;
  if (width < 900) return 2;
  return 3;
}

function useColumns() {
  const [columns, setColumns] = useState(() =>
    typeof window === "undefined" ? 3 : columnsFromWidth(window.innerWidth),
  );

  useLayoutEffect(() => {
    const update = () => setColumns(columnsFromWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columns;
}

function chunk(items: Cell[], size: number) {
  const rows: Cell[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

export default function PhotoGrid({ photos, showCaption = false }: Props) {
  const columns = useColumns();
  const rows = useMemo(
    () => chunk(photos.map((photo, index) => ({ photo, index })), columns),
    [photos, columns],
  );

  return (
    <div className="photo-rows">
      {rows.map((row) => (
        <div className="photo-row" key={row.map((item) => item.photo.src).join("-")}>
          {row.map((item) => (
            <div
              className="photo-cell"
              key={item.photo.src}
              style={
                {
                  "--fr": item.photo.ratio,
                  "--ratio": String(item.photo.ratio),
                } as CSSProperties
              }
            >
              <ScrollReveal delay={(item.index % 3) * 70}>
                {showCaption ? (
                  <a
                    className="photo-tile has-caption"
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FrameImage
                      src={item.photo.src}
                      alt={item.photo.caption}
                      eager={item.index < 9}
                    />
                    <p className="photo-caption">{item.photo.caption}</p>
                  </a>
                ) : (
                  <article className="photo-tile">
                    <FrameImage src={item.photo.src} alt="" eager={item.index < 9} />
                  </article>
                )}
              </ScrollReveal>
            </div>
          ))}
          {row.length < columns
            ? Array.from({ length: columns - row.length }, (_, spacer) => (
                <div className="photo-cell is-spacer" key={`spacer-${spacer}`} />
              ))
            : null}
        </div>
      ))}
    </div>
  );
}
