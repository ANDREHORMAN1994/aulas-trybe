var paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";
paragraph.innerText = `KILL BILL`;

var paragraph2 = document.getElementById("second-paragraph");
paragraph2.innerText =
  "KillBill, filme campeão de bilheteria, dividido em dois volumes, contando a história de vingança da noiva Beatriz Kido contra toda organização que tentou matar ela, comandada por Bill, seu Ex-Chefe e Amante";

var title = document.getElementById("page-title");
title.innerText = "TARANTINO MOVIES";
title.style.background = "white";
title.style.textAlign = "center";
title.style.padding = "10px";
title.style.margin = "0";
title.style.fontSize = "30px"

var subtitle = document.getElementById("subtitle");
subtitle.innerText = "FILME MEGABOGA";

let tagClass = document.getElementsByClassName("styleClass");

for(let i =0; i < tagClass.length; i += 1) {
  tagClass[i].style.background = "green";
  tagClass[i].style.textAlign = "center"
  tagClass[0].style.color = "white";
  tagClass[0].style.fontSize = "30px";
}

let tagH4 = document.getElementsByTagName("h4");
tagH4[0].style.color = "white";
tagH4[0].style.background = "blue";
tagH4[0].style.textAlign = "center";

document.body.style.background = "black"
document.body.style.margin = 0;
document.body.style.padding = 0;