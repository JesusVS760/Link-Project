import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isMediaQuery, setIsMediaQuery] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setIsMediaQuery(window.innerWidth);

    // listening to the
    window.addEventListener("resize", handleResize);

    // clean up function to remove all unintended side effects
    //listen to an event of resize, than execute function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMediaQuery; // returning the width of screen
};

export default useMediaQuery;
