interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2
        className={
          light ? "text-white font-bold" : "text-text font-bold"
        }
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-text-muted"} text-base leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
