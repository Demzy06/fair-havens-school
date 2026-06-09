import { animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, end, {
      type: "spring",
      stiffness: 60,
      damping: 30,
      mass: 1.5,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [end]);

  return <span className="">{count.toLocaleString()}</span>;
}
