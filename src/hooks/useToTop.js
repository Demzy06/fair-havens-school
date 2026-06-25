import { useEffect } from "react";

function useToTop() {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
}

export default useToTop