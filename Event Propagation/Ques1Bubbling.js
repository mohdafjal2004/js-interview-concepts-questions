// *  Q-1 : Basics of Event Propagation
// 𝗘𝘃𝗲𝗻𝘁 𝗣𝗿𝗼𝗽𝗮𝗴𝗮𝘁𝗶𝗼𝗻 : Means in DOM tree whether events  are triggered
// from top to bottom or from bottom to top

// Types of Event Propagation: 1. Event Capturing   2. Event Bubbling

// *  Q-2 : 𝗘𝘃𝗲𝗻𝘁 𝗕𝘂𝗯𝗯𝗹𝗶𝗻𝗴 : Means when events are triggered from bottom to top
//Event Bubbling is the 𝗱𝗲𝗳𝗮𝘂𝗹𝘁 𝗯𝗲𝗵𝗮𝘃𝗶𝗼𝗿 𝗼𝗳 𝗲𝘃𝗲𝗻𝘁 𝗣𝗿𝗼𝗽𝗮𝗴𝗮𝘁𝗶𝗼𝗻

const div = document.querySelector("#div");
const form = document.querySelector("#form");
const button = document.querySelector("#id");

div.addEventListener("click", function () {
  alert("div");
});
form.addEventListener("click", function () {
  alert("form");
});
button.addEventListener("click", function () {
  alert("button");
});

// *  Q-3 : event.target vs this.target vs event.currentTarget
div.addEventListener("click", func);
form.addEventListener("click", func);
button.addEventListener("click", func);

function func(event) {
  alert(
    "currentTarget = " +
      event.currentTarget.tagName +
      " target " +
      event.target.tagName +
      " this " +
      this.tagName
  );
}


