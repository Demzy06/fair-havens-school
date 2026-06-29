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
    <div className={`pb-20 pt-15 ${className} md:pt-35 md:pb-35 `}>
      {headerText && (
        <h1 className="w-[90%] m-auto text-center pt-1 mb-13 text-[#67B3FF] md:text-[48px] md:w-[70%]">
          {headerText}
        </h1>
      )}

      <div className="pl-5 pr-5 md:flex md:w-[70%] m-auto justify-between md:pt-10 md:pb-15 md:pl-0 md:pr-0">
        <h2
          className={`${headingColor} mb-8 md:w-[50%] md:m-0 md:h-fit md:m-auto md:text-[48px] ${className}`}
        >
          {title}
        </h2>
        <div className="md:w-[45%]">
          <p className={paragraphColor}>{description}</p>
          <ul className={`pl-8 mt-1 list-disc ${paragraphColor}`}>
            {items.map((club) => (
              <li>{club}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
