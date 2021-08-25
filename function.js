//<<<<----------- Theme Toggler -------------------->>>>>>>
function checkTheme(value) {

  if (value == "1"){
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
