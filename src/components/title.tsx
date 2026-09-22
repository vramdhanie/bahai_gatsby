interface TitleProps {
  title: string;
  subtitle?: string;
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="page-title">
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  );
}
