import Counter from "./Counter";
import { useInView } from "react-intersection-observer";

const schoolStats = [
  {
    stats: 48,
    text: "Years Of Excellence",
  },
  {
    stats: 25,
    text: "Advanced Degree Teacer",
  },
  {
    stats: 2,
    text: "Accreditations",
  },
  {
    stats: 15000,
    text: "Alunmi",
  },
];

function Stats() {
  const { ref: divRef, inView: divInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  return (
    <div
      ref={divRef}
      className={`text-center md:grid grid-cols-2 gap-y-5 text-white transition-all duration-700 ${divInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {schoolStats.map((stat) => (
        <div className="mb-6 ">
          <h2 className="text-[50px] font-normal">
            {divInView && <Counter end={stat.stats} />}
          </h2>
          <p className="uppercase">{stat.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
