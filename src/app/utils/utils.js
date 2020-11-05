export const getIdFromUrl = (url) => {
  const reversedUrl = url.slice(0, -1).split("").reverse().join("");
  let result = "";
  for (let i of reversedUrl) {
    if (i !== "/") {
      result = result + i;
    } else break;
  }
  return result;
};
