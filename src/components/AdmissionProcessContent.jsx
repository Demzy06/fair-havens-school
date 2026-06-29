function AdmissionProcessContent({ className, contentObj }) {
  return (
    <div
      className={`md:p-30 md:pr-0 md:pl-0 mt-0 mb-0 pl-5 pr-5 pt-18 pb-18 ${className} ${contentObj.type === "blue" ? "bgBlueLogo" : ""}`}
    >
      <div className="md:flex md:m-auto md:w-[70%] justify-between">
        <div className=" md:w-[45%]">
          <h1
            className={`md:text-[48px] mb-10 ${contentObj.type !== "blue" ? "text-[#67B3FF]" : ""} `}
          >
            Step {contentObj.stepNumber}
          </h1>
          <h1
            className={`md:text-[48px] mb-10 ${contentObj.type !== "blue" ? "text-gray-800" : ""} `}
          >
            {contentObj.step}
          </h1>
        </div>
        <p
          className={`md:pt-5 md:w-[45%] ${contentObj.type !== "blue" ? "text-gray-800" : ""}`}
        >
          {contentObj.todo}
        </p>
      </div>
    </div>
  );
}

export default AdmissionProcessContent;
