function AdmissionProcessContent({ className, contentObj }) {
  return (
    <div
      className={`mt-0 mb-0 pl-5 pr-5 pt-18 pb-18 ${className} ${contentObj.type === "blue" ? "bgBlueLogo" : ""}`}
    >
      <h1
        className={`mb-10 ${contentObj.type !== "blue" ? "text-[#67B3FF]" : ""} `}
      >
        Step {contentObj.stepNumber}
      </h1>
      <h1
        className={`mb-10 ${contentObj.type !== "blue" ? "text-gray-800" : ""} `}
      >
        {contentObj.step}
      </h1>
      <p className={`${contentObj.type !== "blue" ? "text-gray-800" : ""}`}>
        {contentObj.todo}
      </p>
    </div>
  );
}

export default AdmissionProcessContent;
