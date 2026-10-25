// Section heading: a small eyebrow label, the title, and an optional intro line.
const TitleHeader = ({ title, sub, intro }) => {
  return (
    <div className="reveal flex flex-col items-center gap-4 text-center">
      <p className="eyebrow">{sub}</p>
      <h2 className="font-semibold md:text-5xl text-3xl text-forest-200 text-balance">
        {title}
      </h2>
      {intro && (
        <p className="max-w-2xl text-forest-300/80 md:text-lg text-pretty">
          {intro}
        </p>
      )}
    </div>
  );
};

export default TitleHeader;
