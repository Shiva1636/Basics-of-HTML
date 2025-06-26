document.body.style.backgroundColor = "burlywood";


let Sonic = document.getElementsByClassName("sonic");
Sonic[0].style.color = "green";
// Sonic[0].style.backgroundColor = "lightblue";
Sonic[0].style.textAlign = "center";
Sonic[1].style.color = "green";
// Sonic[1].style.backgroundColor = "pink";
Sonic[1].style.textAlign = "center";
Sonic[2].style.color = "green";
// Sonic[2].style.backgroundColor = "lightgreen";
Sonic[2].style.textAlign = "center";

document.querySelector(".hello").style.color = "red";
document.querySelector("#hello").style.color = "red";
let hello = document.querySelectorAll(".hello");
hello[0].style.color = "red";
hello[1].style.color = "green";
hello[2].style.color = "red";
hello[3].style.color = "green";

// function change(){
//     document.body.style.backgroundColor = "lightgreen";
// document.body.style.textAlign = "center";
//     alert("The background colour has been changed");
// }
// function change() {
//     if (document.body.style.backgroundColor === "burlywood") {
//         document.body.style.backgroundColor = "lightgreen";
//     } else {
//         document.body.style.backgroundColor = "burlywood";

//     }
// }
// function change() {
//     document.body.style.backgroundColor =
//         document.body.style.backgroundColor === "burlywood" ?  document.body.style.backgroundColor = "lightgreen" :  document.body.style.backgroundColor = "burlywood";
//     alert("The color is changed")
// }
function change() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "burlywood" ? "lightgreen" : "burlywood";
    // alert("The color is changed")
}
// function changetext() {
//     if(document.getElementById("clg").innerHTML === "HELLO"){
//         document.getElementById("clg").innerHTML = "MOTO";

//     } else {
//         document.getElementById("clg").innerHTML = "HELLO";
//     }
// }

function changetext() {
    document.getElementById("clg").innerHTML = "MOTO";
    document.getElementById("clg").style.backgroundColor = "#05a7669e";
    document.getElementById("clg").style.color = "white";
    documenent.getElementById("clg").style.fontSize = "30px";
    document.getElementById("clg").style.textAlign = "center";
}
