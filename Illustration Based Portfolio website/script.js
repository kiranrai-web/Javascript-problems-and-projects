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