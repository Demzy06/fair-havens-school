function ContentSection({
  headerText = "",
  title,
  description,
  items,
  headingColor,
  paragraphColor,
  className,
}) {
  return (
    <div className={`pb-20 pt-15 ${className}`}>
      {headerText && (
        <h1 className="w-[90%] m-auto text-center pt-1 mb-13 text-[#67B3FF]">
          {headerText}
        </h1>
      )}

      <div className="pl-5 pr-5">
        <h1 className={`${headingColor} mb-8`}>{title}</h1>
        <p className={paragraphColor}>{description}</p>
        <ul className={`pl-8 mt-1 list-disc ${paragraphColor}`}>
          {items.map((club) => (
            <li>{club}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContentSection;
