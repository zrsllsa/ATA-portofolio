type Props = {
  src: string;
};

export default function PageBackground({ src }: Props) {
  return (
    <div className="page-bg" aria-hidden="true">
      <img src={encodeURI(src.replace(/.png$/i, ".webp"))} alt="" />
      <div className="page-bg-veil" />
    </div>
  );
}
