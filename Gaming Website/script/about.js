let nextbtn = document.getElementById("about-nxt");
let prevbtn = document.getElementById("about-prev");
let currentNum = document.querySelector(".current-num");
let scrollContainer = document.querySelector(".about-banner-right-bg-box")

nextbtn.addEventListener("click",()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
  currentNum.innerHTML = "2";
})

prevbtn.addEventListener("click",()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
  currentNum.innerHTML = "1";
})