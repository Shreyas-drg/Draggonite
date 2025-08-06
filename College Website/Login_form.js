let Tbtn = document.querySelector(".Toggle");
let body = document.querySelector("body");
let header = document.querySelector(".Sign");
let SubButton = document.querySelector('.Submit');

let currmode = "light";
Tbtn.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light"); //We have to also remove the light after adding the dark, and vice versa.
        header.classList.add("Hdark");
        header.classList.remove("Hlight");
        Tbtn.innerHTML="Light Theme";
    }
    else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        header.classList.add("Hlight");
        header.classList.remove("Hdark");
        Tbtn.innerHTML="Dark Theme";
    }
    console.log(currmode);
});

SubButton.addEventListener("click",()=>{
    SubButton.innerHTML = "Form is Submitted";
    SubButton.classList.add("green");
});

