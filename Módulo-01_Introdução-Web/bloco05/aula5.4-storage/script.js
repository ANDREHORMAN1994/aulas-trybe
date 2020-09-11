window.onload = function () {
  const inputText = document.querySelectorAll(".input");

  inputText[0].addEventListener("keyup", backgroundColor);
  function backgroundColor() {
    document.body.style.backgroundColor = inputText[0].value;
    localStorage.setItem("backgroundColor", inputText[0].value);
  }

  inputText[1].addEventListener("keyup", colorText);
  function colorText() {
    const p = document.querySelectorAll(".paragraph");
    for (let i = 0; i < p.length; i += 1) {
      p[i].style.color = inputText[1].value;
      localStorage.setItem("colorText", inputText[1].value);
    }
  }

  inputText[2].addEventListener("keyup", fontSize);
  function fontSize() {
    const p = document.querySelectorAll(".paragraph");
    for (let i = 0; i < p.length; i += 1) {
      p[i].style.fontSize = inputText[2].value + "px";
      localStorage.setItem("fontSize", inputText[2].value+"px");
    }
  }

  inputText[3].addEventListener("keyup", spaceLine);
  function spaceLine() {
    const p = document.querySelectorAll(".paragraph");
    for (let i = 0; i < p.length; i += 1) {
      p[i].style.lineHeight = inputText[3].value + "px";
      localStorage.setItem("spaceLine", inputText[3].value+"px");
    }
  }

  inputText[4].addEventListener("keyup", typeFont);
  function typeFont() {
    const p = document.querySelectorAll(".paragraph");
    for (let i = 0; i < p.length; i += 1) {
      p[i].style.fontFamily = inputText[4].value;
      localStorage.setItem("typeFont", inputText[4].value);
    }
  }

  // SALVANDO CONFIGURAÇÕES DO LOCALSTORAGE

  document.body.style.backgroundColor = localStorage.getItem("backgroundColor");

  const p = document.querySelectorAll(".paragraph");
  for (let i = 0; i < p.length; i += 1) {
    p[i].style.color = localStorage.getItem("colorText");
    p[i].style.fontSize = localStorage.getItem("fontSize");
    p[i].style.lineHeight = localStorage.getItem("spaceLine");
    p[i].style.fontFamily = localStorage.getItem("typeFont");
  }
};
