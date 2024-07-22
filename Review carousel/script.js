let reviewBox = document.querySelector(".review-box");
let nextBtn = document.getElementById("next");
let backBtn = document.getElementById("back");

reviewBox.addEventListener("wheel",(evnt)=>{
    evnt.preventDefault();
    reviewBox.scrollLeft += evnt.deltaY;
    reviewBox.style.scrollBehaviour = "auto";
});

nextBtn.addEventListener("click",()=>{
    reviewBox.style.scrollBehaviour = "smooth";
    reviewBox.scrollLeft += 1000;
});

backBtn.addEventListener("click",()=>{
    reviewBox.style.scrollBehaviour = "smooth";
    reviewBox.scrollLeft -= 1000;
})