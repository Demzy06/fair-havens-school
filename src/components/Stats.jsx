import Counter from "./Counter";

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
    stats: 15000,
    text: "Alunmi",
  },
];

function Stats() {
  return (
    <div className="text-center text-white ">
      {schoolStats.map((stat) => (
        <div className="mb-6">
          <h2 className="text-[50px] font-normal">
            <Counter end={stat.stats} />
          </h2>
          <p>{stat.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
