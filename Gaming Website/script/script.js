document.addEventListener("DOMContentLoaded",()=>{
    let hamburger = document.querySelector(".hamburger img");
    let scrollContainer = document.querySelector(".currently-trending-game-container");
    let currentBtn = document.getElementById("currentBtn");
    let nextBtn = document.getElementById("nextBtn");
    let currentAll = document.getElementById("current-game-see");
    let dots = document.querySelector(".dots");
    let up = document.querySelector(".up");
    let currentGames = document.querySelector(".currently-trending-game-container");

    let navlinks = document.querySelectorAll(".nav-right-menu ul li a");
    let windowPath = window.location.pathname;

    navlinks.forEach(navlink =>{
        if(navlink.href.includes(windowPath)){
            navlink.classList.add('focus');
        }
    })


    hamburger.addEventListener("click",()=>{
        let menu = document.querySelector(".nav-right");

        if (menu.style.marginRight === "0px") {
            menu.style.marginRight = "-200%"; 
            hamburger.src = "images/hamburger.svg";
            menu.style.width = "0";
            menu.style.padding = "0";
        
        } else {
            menu.style.marginRight = "0"; 
            hamburger.src = "images/cross.svg";
            menu.style.width = "70%";
            menu.style.padding = "10px";
        }
    });

    currentBtn.classList.add("active");

    nextBtn.addEventListener("click",()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 1500;
        nextBtn.classList.add('active');
        if (currentBtn) {
            currentBtn.classList.remove('active');
        }
    })

    currentBtn.addEventListener("click",()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 1500;
        currentBtn.classList.add('active');
        if (nextBtn) {
            nextBtn.classList.remove('active');
        }
    })

    currentAll.addEventListener("click",()=>{
        currentGames.style.display = "block"; 
        dots.style.display = "none";
        up.style.display = "block";
    });

    up.addEventListener("click",()=>{
        currentGames.style.display = "flex";
        up.style.display = "none";
        dots.style.display = "flex";
    });

})