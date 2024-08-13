import { useState } from "react";

const useMediaQuery = (query) => {
  const [isMediaQuery, setIsMediaQuery] = useState(window.matchMedia(query));

  // return (  );
};

export default useMediaQuery;
