function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  // html.classList.add("light") }
  html.classList.toggle("light")
}

var playBtn = document.getElementById("play"),
  hearbeat = document.getElementById("button-hover")
audios = document.querySelectorAll("audio")

console.log(audios)

playBtn.addEventListener(
  "mouseover",
  function () {
    ;[].forEach.call(audios, function (audio) {
      // do whatever
      audio.play()
    })
  },
  false
)

playBtn.addEventListener(
  "mouseleave",
  function () {
    heartbeat.pause()
    heartbeat.currentTime = 0
  },
  false
)
const audio = new Audio("./assets/selection.mp3");
const buttons = document.querySelectorAll("li");

buttons.forEach((li) => {
  li.addEventListener("click", () => {
    audio.play()
  })
})
