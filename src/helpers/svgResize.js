window.addEventListener("resize", () => {
  const svg = document.querySelectorAll("svg");
  const outerWidth = window.outerWidth;
  console.log(outerWidth);
  // const svgWidth = Math.max(windowWidth, 390);
  svg.forEach((item) => {
    item.setAttribute("width", `${outerWidth}px`);
  });
});
