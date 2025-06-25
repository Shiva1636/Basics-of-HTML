document.title = "DOM in JavaScript";

document.getElementById("header").innerHTML =
"Hello, Java Script";
document.getElementById("para").style.color = "blue";
document.getElementById("para").style.fontSize = "30px";

document.getElementsByClassName("joke")[0].innerHTML = "Hello";
document.getElementsByClassName("joke")[1].innerHTML = "This is Java Script";
document.getElementsByClassName("joke")[0].style.color = "red";
document.getElementsByClassName("joke")[1].style.color = "black";
document.getElementsByTagName("h1")[0].style.color = "green";
document.body.style.backgroundColor = "orange";
document.getElementsByTagName("p")[2].style.fontSize = "40px";
document.getElementsByTagName("p")[2].style.textAlign = "center";

document.getElementsByTagName("p")[1].style.fontSize = "25px";
document.getElementsByTagName("p")[0].style.fontSize = "25px";
document.getElementsByTagName("p")[2].style.backgroundColor = "red";
document.getElementsByTagName("h1")[0].style.textAlign = "center";
document.getElementsByTagName("h1")[0].style.backgroundColor = "antiquewhite"