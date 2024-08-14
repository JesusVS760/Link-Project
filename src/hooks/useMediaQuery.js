import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isMediaQuery, setIsMediaQuery] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setIsMediaQuery(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMediaQuery;
};

export default useMediaQuery;
