const keys = document.querySelectorAll(".key");

function getDomKey(keyName) {
  for (const key of keys) {
    const domKeyName = key.querySelector("kbd").innerText.toLowerCase();
    key.addEventListener("transitionend", (e) => {
      if (e.propertyName === "transform") {
        e.target.classList.remove("playing");
      }
    });
    if (domKeyName === keyName) {
      return key;
    }
  }
}

document.addEventListener("keydown", (e) => {
  const domKey = getDomKey(e.key);
  if (domKey) {
    const dataKey = domKey.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key='${dataKey}']`);
    if (!audio.ended) {
      audio.load();
    }
    audio.play();
    domKey.classList.add("playing");
  }
});
