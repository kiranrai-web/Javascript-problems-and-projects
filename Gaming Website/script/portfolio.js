let clientNum = document.querySelector(".client-num");
    let locationNum = document.querySelector(".location-num");
    let porjectNum = document.querySelector(".project-num");
    let currentBtn = document.getElementById("current-review-gallery");
    let nextBtn = document.getElementById("next-review-gallery");
    let scrollContainer = document.querySelector(".customer-review-container");

    currentBtn.classList.add("active");

    for(let i =0 ;i<=90;i++){
        setTimeout(() => {
            clientNum.innerHTML = i + "+"
        }, i * 30);
    }
    for(let i =0 ;i<=30;i++){
        setTimeout(() => {
            locationNum.innerHTML = i + "+"
        }, i * 30);
    }
    for(let i =0 ;i<=50;i++){
        setTimeout(() => {
            porjectNum.innerHTML = i + "+"
        }, i * 30);
    }

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