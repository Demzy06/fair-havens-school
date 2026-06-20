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
        Fill And Submit Purchased Admission Form
      </h1>
      <p className={`${contentObj.type !== "blue" ? "text-gray-800" : ""}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        mollitia laudantium obcaecati culpa iusto placeat voluptates suscipit
        eos totam alias odit corrupti distinctio, molestias aspernatur qui
        error, vel vitae minus quis accusamus ipsa explicabo. Necessitatibus!
      </p>
    </div>
  );
}

export default AdmissionProcessContent;
