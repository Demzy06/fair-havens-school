function SchoolStatement({ img, alt, headerText, statement, background }) {
  return (
    <section
      className={`pl-5 pr-5 p-20 ${background} ${background !== "bgBlueLogo" && "text-gray-800"}`}
    >
      <div className="md:w-[70%] md:m-auto md:flex justify-between">
        <div className="mb-8 md:w-[40%] md:m-0">
          <img
            src={img}
            alt={alt}
            className="m-auto w-[100%] h-[17rem] md:h-full"
          />
        </div>
        <div className="md:w-[50%] md:h-fit m-auto">
          <h1
            className={`mb-10 text-[36px] font-bold ${background !== "bgBlueLogo" && "text-[#67B3FF]"}`}
          >
            {headerText}
          </h1>
          <p>{statement}</p>
        </div>
      </div>
    </section>
  );
}

export default SchoolStatement;
