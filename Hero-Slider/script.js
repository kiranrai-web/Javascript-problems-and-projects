let nextBtn = document.querySelector(".right-btn");
let prevBtn = document.querySelector(".left-btn");

nextBtn.addEventListener('click',()=>{
    let slides = document.querySelectorAll('.slide');
    document.querySelector(".hero-banner").appendChild(slides[0])
})

prevBtn.addEventListener('click',()=>{
    let slides = document.querySelectorAll('.slide');
    document.querySelector(".hero-banner").prepend(slides[slides.length -1])
})

document.querySelector('.btn1').addEventListener('click', () => {
    window.location.href = 'https://youtu.be/1hJ5J5QiyIY?si=7y7MJ8QGhF7VgDBK';
});

document.querySelector('.btn2').addEventListener('click', () => {
    window.location.href = 'https://youtu.be/i7wgl1v1_5M?si=ewk0ESpw5BSWpRLo';
});

document.querySelector('.btn3').addEventListener('click', () => {
    window.location.href = 'https://youtu.be/1Ip43DfbkUw?si=1d--xgKi-RlrNg_Z';
});

document.querySelector('.btn4').addEventListener('click', () => {
    window.location.href = 'https://youtu.be/5WLAUxb8AUk?si=qj25rvbC5NTvJnXb';
});

