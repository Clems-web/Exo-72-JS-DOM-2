let div = document.getElementsByClassName("name-tag");

for (let x = 0; x < div.length; x++) {
    let para = document.createElement("p");
    para.innerHTML = "HELLO WORLD";
    div[x].appendChild(para);
}










