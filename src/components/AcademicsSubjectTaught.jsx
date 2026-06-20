function AcademicsSubjectTaught({ subjectArr }) {
  return (
    <div className="pl-5 pr-5 p-8 bg-[#F7F9F6]">
      <h4 className="font-medium p-3 pr-1 pl-5 bg-[#EAF5E4] -z-10 rounded-t-xl uppercase border-b border-[#dbe6d5] text-[#0F172A]">
        Subjects Taught
      </h4>
      <ul className=" pb-10 pl-5 pt-3 flex flex-wrap bg-[#FFFFFF] rounded-b-xl">
        {subjectArr.map((subject) => (
          <li
            key={subject.subjectName}
            className="mr-2 p-0.5 pl-3.5 pr-3.5 rounded-md text-sm font-medium mb-2 text-white"
            style={{ backgroundColor: subject.bgColor }}
          >
            {subject.subjectName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AcademicsSubjectTaught;
