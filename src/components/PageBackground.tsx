type Props = {
  src: string;
};

export default function PageBackground({ src }: Props) {
  return (
    <div className="page-bg" aria-hidden="true">
      <img src={encodeURI(src)} alt="" />
      <div className="page-bg-veil" />
    </div>
  );
}
