interface TitleProps {
  title: string;
  subtitle?: string;
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="page-title">
      <h2>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h2>
    </div>
  );
}
