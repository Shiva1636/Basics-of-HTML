let aish = document.createElement("p");
aish.textContent = "I'm Chitti";
aish.innerHTML = "Memory 1 Tera Byte";

aish.style.color = "orange";
aish.style.fontSize = "20px";
document.getElementById("vasi").appendChild(aish);
document.getElementById("vasi").style.backgroundColor = "#973a3a";
document.getElementById("vasi").style.textAlign = "center";

document.body.style.backgroundColor = "burlywood";

setTimeout(() => {
    let chitti = document.getElementsByClassName("list")[4];
    if (chitti) {
        chitti.remove();
    }
}, 2000);
setTimeout(() => {
    let chitti = document.getElementsByClassName("list")[1];
    if (chitti) {
        chitti.style.textAlign = "center";
        chitti.style.color = "pink";
        chitti.style.backgroundColor = "grey";
    }
}, 2000);

let newHeading = document.createElement("h2");
newHeading.innerHTML = "This is a new heading added by JavaScript";
newHeading.style.color = "purple";
newHeading.style.fontSize = "25px";
document.body.appendChild(newHeading);

setTimeout(() => {
    let newText = document.createElement("p");
    newText.textContent = "This text is added after 3 seconds";
    newText.style.color = "green";
    document.body.appendChild(newText);
}, 3000);

let tagText = document.createElement("p");
tagText.textContent = "this text is appended to the tag!";
tagText.style.color = "orange";
document.getElementById("vasi").appendChild(tagText);

let myList = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.textContent = "Item" + i;
    li.style.color = "blue";
    li.style.fontSize = "18px";
    myList.appendChild(li);
    document.body.appendChild(myList);
};
