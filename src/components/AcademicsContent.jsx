import AcademicsSubjectTaught from "../components/AcademicsSubjectTaught";

function AcademicsContent({
  stage,
  classType,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  background,
  list,
}) {
  // console.log(lowerPrimarySubjectTaught);
  return (
    <div
      className={`md:pt-25 md:pb-25 md:pl-30 pt-15 pb-10 pl-5 pr-5  text-[#0F172A] ${background}`}
    >
      <h1
        className={` mb-6 ${background === "bgBlueLogo" ? "text-white" : "text-[#67B3FF]"}`}
      >
        {stage}
      </h1>
      <h2 className="mb-7">{classType}</h2>

      <p className="mb-5">{firstParagraph}</p>
      <p>{secondParagraph}</p>
      {list && (
        <ul className="list-disc mt-3 ml-8">
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
      {thirdParagraph && <p className="mt-5">{thirdParagraph}</p>}
    </div>
  );
}

export default AcademicsContent;
