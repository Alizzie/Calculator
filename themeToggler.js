//<<<<---------------- Theme Toggler & Session Storage ----------------->>>>>>
const colors = document.firstElementChild.lastElementChild;
const toggler = document.getElementById("slider");
const display = document.getElementsByClassName("displayText")[0];
const togNum = Array.from(document.getElementsByTagName("Span"));

//----------------------- Theme Toggler ---------------------------------
function checkTheme(value) {

  if (value == "1") {
    colors.className = "theme2";
    sessionStorage.setItem("theme", "1");
  } else if (value == "2") {
    colors.className = "theme3";
    sessionStorage.setItem("theme", "2");
  } else {
    colors.className = "theme1";
    sessionStorage.setItem("theme", "0");
  }
}
//---------------------------------------------------------------------
togNum.forEach(num => num.addEventListener("click", (e) => {
  toggler.value = Number(e.path[0].innerText) - 1;
}));

toggler.addEventListener("click", () => {
  checkTheme(toggler.value);
})

//<<<<---------------------- Session Storage -------------------------->>>>>>

// Reloading the page
window.onload = function test() {
  if (sessionStorage.getItem("theme") == null) {
    colors.className = "theme1";
  } else {
    toggler.value = sessionStorage.getItem("theme");
    checkTheme(toggler.value);
  }
  setTimeout(() => display.innerText = " ", 1000);
}
