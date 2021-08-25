//<<<<---------------- Theme Toggler & Session Storage ----------------->>>>>>
const colors = document.firstElementChild.lastElementChild;
const toggler = document.getElementById("slider");
const display = document.getElementsByClassName("displayText")[0];
const togNum = Array.from(document.getElementsByTagName("Span"));

togNum.forEach(num => num.addEventListener("click", (e) => {
  console.log(e.path[0].innerText);
  toggler.value = Number(e.path[0].innerText) - 1;
  console.log("Toggler Value: " + toggler.value);
  }
));

toggler.addEventListener("click", () => {
  console.log("Toggler Value: " + toggler.value);
  checkTheme(toggler.value);
})

//<<<<---------------------- Session Storage -------------------------->>>>>>
//Situation: Reloading the page
window.onload = function test() {
  if (sessionStorage.getItem("theme") == null) {
    colors.className = "theme1";
  } else {
    toggler.value = sessionStorage.getItem("theme");
    checkTheme(toggler.value);
  }
  setTimeout(() => display.innerText = " ", 1000);
}
