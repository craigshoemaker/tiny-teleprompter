(() => {
  let currentElement = document.querySelector("p");
  const advance = (direction) => {
    currentElement = currentElement[direction + "ElementSibling"];
    if (!currentElement) currentElement = document.querySelector("p");
    currentElement.scrollIntoView(true);
  };
  document.body.onkeyup = (e) => {
    const keyCode = e.keyCode.toString();
    if (/32|39|77/.test(keyCode)) advance("next");
    if (/37|78/.test(keyCode)) advance("previous");
  };
})();
