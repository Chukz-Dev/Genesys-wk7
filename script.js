let input = document.getElementById("name-input");
let greetings = document.getElementById("hel-fri");
let nam = document.querySelector(".name");

input.addEventListener("input", () => {
  let name = input.value;
  if (name === "") {
    greetings.innerText = "Hello Friend!";
  } else {
    greetings.innerText = `Hello ${name} !`;
  };
  nam.innerText = ` ${name}`;
});




let box = document.querySelector(".box")
let grow = document.querySelector(".grow-btn");
let shrink = document.querySelector(".shrink-btn");

grow.addEventListener("click", () => {
  box.style.transition = "0.5s";
  box.style.width = "70px";
  box.style.height = "70px";
});

shrink.addEventListener("click", () => {
  box.style.width = "50px";
  box.style.height = "50px";
});


let mode = document.getElementById("mode-btn");

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



let btn = document.getElementById("secret-btn");
let message = document.getElementById("secret-message");

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