var menus = document.getElementsByClassName("menu11")

for (let x=0; x<menus.length; x++) {
menus[x].addEventListener("mouseover", aplicarEstilo);
}

function aplicarEstilo(obj) {
obj.target.style.border = "5px solid red";

}







