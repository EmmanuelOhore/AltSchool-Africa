const app = document.querySelector(".app");

app.style.width = "100%";
app.style.heigth = "100vh";
app.style.display = "flex";
app.style.justifyContent = "center";
app.style.alignItems = "center";

const parent = document.createElement("div");
parent.style.display = "flex";
parent.style.alignItems = "center";
parent.style.gap = ".5rem";
const span = document.createElement("span");
const span2 = document.createElement("span");

[span, span2].forEach((el) => {
  el.textContent = `"`;
  el.style.color = "blue";
});

const ptag = document.createElement("p");
ptag.textContent =
  "this is the jaascript assignment that we are tryint to work on ";

parent.append(span);
parent.append(ptag);
parent.append(span2);
app.append(parent);

