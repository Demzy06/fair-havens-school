function CrecheAcademicHighlight({
  stage,
  classType,
  firstParagraph,
  secondParagraph,
  background,
}) {
  return (
    <div
      className={`md:pt-25 md:pb-25 md:pl- pt-15 pb-10 pl-5 pr-5  text-[#0F172A] ${background}`}
    >
      <div className="md:flex md:w-[70%] md:m-auto justify-between">
        <div className="flex-4 md:m-auto md:pl-18">
          <h1
            className={` md:text-[24px] mb-6 ${background === "bgBlueLogo" ? "text-white" : "text-[#67B3FF]"}`}
          >
            {stage}
          </h1>
          <h2 className="mb-7 md:text-[48px] ">{classType}</h2>
        </div>

        <div className="flex-5 md:pl-5">
          <p className="mb-5">{firstParagraph}</p>
          <p>{secondParagraph}</p>
        </div>
      </div>
    </div>
  );
}

export default CrecheAcademicHighlight;
