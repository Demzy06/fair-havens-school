function AcademicsContent({
  stage,
  classType,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  background,
}) {
  return (
    <div className={`pt-15 pb-10 pl-5 pr-5  text-[#0F172A] ${background}`}>
      <h1
        className={`mb-6 ${background === "bgBlueLogo" ? "text-white" : "text-[#67B3FF]"}`}
      >
        {stage}
      </h1>
      <h2 className="mb-7">{classType}</h2>
      <p className="mb-5">{firstParagraph}</p>
      <p>{secondParagraph}</p>
      {thirdParagraph && <p>{thirdParagraph}</p>}
    </div>
  );
}

export default AcademicsContent;
