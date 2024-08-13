const useCopy = (shortURL) => {
  navigator.clipboard.writeText(shortURL);
  alert("TEXT COPIED");
};

export default useCopy;
