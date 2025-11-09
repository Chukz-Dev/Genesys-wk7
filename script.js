const input = document.getElementById("name-input");
const greetings = document.getElementById("hel-fri");
const nam = document.querySelector(".name");
const box = document.querySelector(".box")
const grow = document.querySelector(".grow-btn");
const shrink = document.querySelector(".shrink-btn");
const mode = document.getElementById("mode-btn");
const btn = document.getElementById("secret-btn");
const message = document.getElementById("secret-message");


// live input greeting
input.addEventListener("input", () => {
  let name = input.value;
  if (name === "") {
    greetings.innerText = "Hello Friend!";
  } else {
    greetings.innerText = `Hello ${name} !`;
  };
  nam.innerText = ` ${name}`;
});


// the mood box -grow and shrink
grow.addEventListener("click", () => {
  box.style.transition = "0.5s";
  box.style.width = "70px";
  box.style.height = "70px";
});

shrink.addEventListener("click", () => {
  box.style.width = "50px";
  box.style.height = "50px";
});


// mode light and dark
mode.addEventListener("click", function () {
  if (mode.innerText === "Dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.transition = "0.3s";
    mode.innerText = "light"
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    mode.innerText = "Dark"
  }
});


// secret message 
btn.addEventListener("click", function () {
  if (btn.innerText === "Unveil" && message.innerText === "") {
    btn.innerText = "Hide";
    message.innerText = "~I love Genesys cohort 2, it's really what I've being looking for and I can't wait for learnable!"
  } else {
    btn.innerText = "Unveil";
    message.innerText = "";
  }
});


// The difference between "innerText" and "innerHTML"
// "innerText" is used just to change the inner content of an element while "innerHTML"
// changes the elements and add more structure to the page
// "innerHTML" allows for the manipulation of the HTML structure