function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


document.getElementsByTagName("body")[0].style.setProperty('--fleck-seed', getRandomInt(0, 123456));
document.getElementsByTagName("body")[0].style.setProperty('--fleck-count', getRandomInt(600, 800));


(async function () {
  if (CSS["paintWorklet"] === undefined) {
    await import("https://unpkg.com/css-paint-polyfill");
  }

  // The code for this worklet can be found here: https://github.com/georgedoescode/houdini-fleck-patterns/blob/main/fleck-worklet.js
  CSS.paintWorklet.addModule("https://unpkg.com/@georgedoescode/houdini-fleck");

  // Fix a weird Safari/Firefox polyfill issue...
  setTimeout(() => {
    document.querySelectorAll(".fleck-demo").forEach((el) => {
      el.style.width = "100%";
    });
  }, 250);
})();