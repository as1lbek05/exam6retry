import "../public/main.css"

let StartBtn = document.querySelector(".start-btn") as HTMLElement;
let Container = document.querySelector(".first") as HTMLElement;
let Info = document.querySelector(".second") as HTMLElement;

StartBtn.onclick = function(){
    Container.style.display="none"
    Info.style.display="grid"
}

