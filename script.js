let value = document;

// console.log(value);

let documentAll = document.all;

console.log(documentAll);

// console.log(documentAll[1]);

let head1 = document.head;

console.log(head1);

// -------------------------

let title = document.title;

console.log(title);

// -------------------------

let body1 = document.body;

console.log(body1); 

// -------------------------

let document1 = document.documentElement;

console.log(document1);

// -------------------------

let documentImage = document.images;

console.log(documentImage);

// -------------------------

let links = document.links;

console.log(links);

// -------------------------

let docType = document.doctype;

console.log(docType);

// -------------------------

let domain = document.domain;

console.log(domain);

// -------------------------

let URL = document.URL;

console.log(URL);

// -------------------------

let BaseURL = document.baseURI;

console.log(BaseURL);

// -------------------------

let anchor = document.anchors;

console.log(anchor);

// getAttribute

let att = document.getElementById("head").getAttribute("class");

console.log("getAttribute " + att);

let att1 = document.getElementById("head").getAttribute("onclick");

console.log("getAttribute " + att1);

// -------------------------

let att2 = document.getElementById("head").getAttributeNode("class").value;

console.log(att2);

let att3 = document.getElementById("head").getAttributeNode("onclick");

console.log(att3);

// -------------------------

let att4 = document.getElementById("head").attributes;
// let att4 = document.getElementById("head").attributes[1].value;
// let att4 = document.getElementById("head").attributes[1].name;

console.log(att4);

// setAttribute
let setAtt = document.getElementById("list").setAttribute("class", "test");

let get = document.getElementById("list").getAttribute("class");

console.log(get);

document.querySelector("#h1").setAttribute("style", "border: 2px solid black");

let ele = (document.getElementById("h1").attributes[0].value = "test");

// --------------------------

// document.getElementById("h1").removeAttribute("class");

// -------------------------

// document.querySelector("#footer").className = "footer";
// document.querySelector("#footer").className = "footer footer1";
document.querySelector("#footer").classList = "footer footer1";

let class1 = document.querySelector("#footer").classList;
console.log(class1);

// --------------------------

const add = () => {
  document.querySelector("#footer").classList.add("footer", "last");
  // document.querySelector("#footer").classList.add("last");
};

const footer = () => {
  document.querySelector("#footer").classList.remove("last");
};

//
const abc = () => {
  console.log("Hello");
  document.querySelector("#footer").style.border = "2px solid blue";
};

document.querySelector("#btn").onclick = abc;

const xyz = () => {
  console.log("XYZ Calling");
  document.querySelector("#footer").style.border = "10px dotted yellow";
};
const pqr = () => {
  console.log("pqr Calling");
  document.querySelector("#footer").style.backgroundColor = "pink";
};

// document.getElementById("para").addEventListener("click", xyz);
// document.getElementById("para").addEventListener("click", pqr);

// outer inner

document.querySelector(".outer").addEventListener(
  "click",
  function () {
    this.style.border = "10px dashed black";
    alert("Outer Box");
  },
  false
);

document.querySelector(".inner").addEventListener(
  "click",
  function () {
    this.style.border = "10px dashed black";
    alert("Inner Box");
  },
  false
);

const mouseleave = () => {
  document.querySelector("#list-item").style.color = "red";
};

const click = () => {
  document
    .querySelector("#list-item")
    .removeEventListener("mouseleave", mouseleave);
};

document.querySelector("#list-item").addEventListener("mouseleave", mouseleave);
document.querySelector("#list-item").addEventListener("click", click);
