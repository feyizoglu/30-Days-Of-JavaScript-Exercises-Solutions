let body = document.body;

let keyName = document.createElement("div");
let keyCode = document.createElement("div");

body.appendChild(keyName);
body.appendChild(keyCode);

body.style.fontFamily = "sans-serif";
// body.style.height = "100%";
body.style.display = "flex";
body.style.flexWrap = "wrap";

keyName.innerHTML = "<h1>Press any keyboard key</h1>";
keyName.style.height = "100%";
keyName.style.width = "100%";
keyName.style.border = "solid #ccc1c0";
keyName.style.boxShadow = "0 0 0 3px #9399a3";
keyName.style.textAlign = "center";
keyName.style.margin = "25% 25% 0 25%";

keyCode.innerHTML = "";

body.addEventListener("keydown", (e) => {
  if (e.which == 32){
    keyName.innerHTML = `<h1>You pressed <span>Space</span></h1>`;
  }else {
    keyName.innerHTML = `<h1>You pressed <span>${e.key}</span></h1>`;
  }
  let span1 = document.querySelector("span");
  span1.style.color = "green"
  keyCode.innerHTML = `<h1> ${e.which}</h1>`;
  keyCode.style.color = "green"
  keyCode.style.fontSize = "32px"
  keyCode.style.height = "200%";
  keyCode.style.width = "200%";
  keyCode.style.border = "solid #ccc1c0";
  keyCode.style.boxShadow = "0 0 0 3px #9399a3";
  keyCode.style.textAlign = "center";
  keyCode.style.margin = "1% 40% 0 40%";
  keyCode.style.padding ="50px 0"
});
