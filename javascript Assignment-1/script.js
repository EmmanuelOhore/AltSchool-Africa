// constants and variables
const app = document.querySelector(".app");
const body = document.querySelector("body");
const parent = document.createElement("div");
const span = document.createElement("span");
const span2 = document.createElement("span");
const ptag = document.createElement("p");

// styling section
body.style.cssText = `
width:100%;
height: 100vh;
display:flex;
justify-content:center;
align-items:center;
 font-family: "Caveat",sans-serif;
`;

app.style.cssText = `
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`;

parent.style.cssText = `
display:flex;
position:relative;
width:100%;
height:7rem;
padding:1rem;
justify-content:center;
flex-direction:column;
background-color:#F9F9F9;
border-left:9px solid #007BFF;
`;

[span, span2].forEach((el, index) => {
  el.textContent = index === 0 ? `\u201C` : "\u201D";
  el.style.cssText = `
  color:#007BFF;
  font-size: 5.5rem;
  top:-1rem;
  position:absolute;
   display: inline;
   width:3%;
  text-align: center;
  `;
});

span2.style.cssText = `
margin-left:1rem;
position:absolute;
bottom:-3.9rem;
color:#007BFF;
font-size:5.5em;
display: inline;
width:3%;
text-align: center;
`;

ptag.style.cssText = `
font-size:2rem;
margin:0;
padding:0;
width:100%;

`;

ptag.textContent =
  "See you on the other side , where we will discuss the Events in Javascript, May the force be with you";

// appending the work
parent.append(span);
parent.append(ptag);
parent.append(span2);
app.append(parent);

// media query
function mediaQuery() {
  const mediaQuery = window.matchMedia("(max-width:800px)");
  const mediaQuery2 = window.matchMedia("(max-width:460px)");

  function handleMediaquery(e) {
    if (e.matches) {
      ptag.style.fontSize = "1.5rem";
    }
  }

  function mobileMQ(e) {
    if (e.matches) {
      ptag.style.fontSize = ".9rem";
      span.style.top = "-1rem";
      span.style.fontSize = "4rem";
      span2.style.bottom = "-2.5rem";
      span2.style.fontSize = "4rem";
    } else {
      ptag.style.fontSize = "2rem";
      span.style.top = "-1rem";
      span.style.fontSize = "6.5rem";
      span2.style.bottom = "-4rem";
      span2.style.fontSize = "6.5rem";
    }
  }

  mobileMQ(mediaQuery2);
  handleMediaquery(mediaQuery);
  mediaQuery.addEventListener("change", handleMediaquery);
  mediaQuery2.addEventListener("change", mobileMQ);
  med;
}

mediaQuery();
