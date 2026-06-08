import { Link } from "react-router";

function ActionCard({ info }) {
  return (
    <Link to={info.linkTo}>
      <div className="p-20 text-center mb-5 border-gray border-solid border-2 rounded-xl relative ">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${info.image})`,
            borderRadius: "12px",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-color " />
        {/* Content */}
        <h3 className="w-fit m-auto relative z-1  zo">{info.heading}</h3>
      </div>
    </Link>
  );
}

export default ActionCard;
