function CrecheAcademicContent({
  header,
  subHeader,
  firstParagraph,
  list,
  secondParagraph,
  background,
}) {
  return (
    <div className={`pt-15 pb-10 pl-5 pr-5  text-[#0F172A] ${background} `}>
      <h1
        className={`mb-15 ${background === "bgBlueLogo" ? "text-white" : "text-[#67B3FF]"} text-center text-5xl`}
      >
        {header}
      </h1>

      <div className="md:flex justify-between md:w-[70%] md:m-auto md:pt-10 md:pb-15">
        <h2 className="md:w-[40%] md:h-fit md:m-auto md:text-[48px]">
          {subHeader}
        </h2>

        <div className="md:w-[50%]">
          <p className="mb-1.5">{firstParagraph}:</p>
          <ul className="pl-10 list-disc mb-1.5">
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>

          <p>{secondParagraph}</p>
        </div>
      </div>
    </div>
  );
}

export default CrecheAcademicContent;
