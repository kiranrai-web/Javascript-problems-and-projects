document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = anchor.getAttribute('href').substring(1); 
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

let resumeBtn = document.getElementById("resume-download");
let crossBtn = document.querySelector(".cross");
let downMsg = document.querySelector("#down-msg");

resumeBtn.addEventListener("click",()=>{
    if(downMsg){
        downMsg.classList.add("anime");
        downMsg.style.visibility = "visible";
    }
})

crossBtn.addEventListener("click", () => {
    if (downMsg) {
        downMsg.classList.remove("anime");
        downMsg.classList.add("anime-exit");
        setTimeout(() => {
            downMsg.style.visibility = "hidden";
            downMsg.classList.remove("anime-exit");
        }, 250);
    }
});

document.addEventListener("DOMContentLoaded",()=>{
    const arrow = document.querySelector(".up-arrow");

    if(arrow){
        arrow.addEventListener('click',()=>{
            window.scrollTo({
                top:0,
                behavior: 'smooth'
            })
        })
    }
})

let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click",()=>{
    document.querySelector(".menu").style.display = "block"; 
});

const validateName =()=>{
    var name = document.getElementById("input-name").value;

    if(name.length === 0){
        document.querySelector("#input-name + span").style.display = "inline";
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        document.querySelector("#input-name + span").style.display = "inline";
    }
}

const validateEmail =()=>{
    var email = document.getElementById("input-email").value;

    if(email.length === 0){
        document.querySelector("#input-email + span").style.display = "inline";
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.querySelector("#input-email + span").style.display = "inline";
    }
}

const validateWebsite =()=>{
    var website = document.getElementById("input-website").value;

    if(website.length === 0){
        document.querySelector("#input-website + span").style.display = "inline";
    }
}

// validateName();