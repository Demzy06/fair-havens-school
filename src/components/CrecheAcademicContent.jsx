function CrecheAcademicContent({
  header,
  subHeader,
  firstParagraph,
  list,
  secondParagraph,
  background,
}) {
  return (
    <div className={`pt-15 pb-10 pl-5 pr-5  text-[#0F172A] ${background}`}>
      <h1
        className={`mb-15 ${background === "bgBlueLogo" ? "text-white" : "text-[#67B3FF]"} text-center text-5xl`}
      >
        {header}
      </h1>
      <h2 className="mb-7">{subHeader}</h2>
      <p className="mb-1.5">{firstParagraph}:</p>

      <ul className="pl-10 list-disc mb-1.5">
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <p>{secondParagraph}</p>
    </div>
  );
}

export default CrecheAcademicContent;
