const reviews = [
    {
        'id': '1',
        'name': 'Ram Thapa',
        'img': './images/img.png',
        'job': 'Software Developer',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo possimus culpa expedita magnam rem quas veniam commodi ad, animi esse?'
    },
    {
        'id': '2',
        'name': 'Sita Sharma',
        'img': './images/img1.png',
        'job': 'Graphic Designer',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo possimus culpa expedita magnam rem quas veniam commodi ad, animi esse?'
    },
    {
        'id': '3',
        'name': 'Amit Joshi',
        'img': './images/img2.png',
        'job': 'Project Manager',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo possimus culpa expedita magnam rem quas veniam commodi ad, animi esse?'
    },
    {
        'id': '4',
        'name': 'Pooja Rathi',
        'img': './images/img3.png',
        'job': 'UX/UI Designer',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo possimus culpa expedita magnam rem quas veniam commodi ad, animi esse?'
    },
    {
        'id': '5',
        'name': 'Karan Singh',
        'img': './images/img4.png',
        'job': 'Data Scientist',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo possimus culpa expedita magnam rem quas veniam commodi ad, animi esse?'
    },
    {
        'id': '6',
        'name': 'Neha Gupta',
        'img': './images/img5.png',
        'job': 'Digital Marketer',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo possimus culpa expedita magnam rem quas veniam commodi ad, animi esse?'
    },
    {
        'id': '7',
        'name': 'Rajesh Mehta',
        'img': './images/img6.png',
        'job': 'DevOps Engineer',
        'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo possimus culpa expedita magnam rem quas veniam commodi ad, animi esse?'
    }
];

let galleryContainer = document.querySelector(".galleryContainer");
let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".previous");
let currentPointer = document.querySelector('.point-wrap')
const scrollAmount = 800;
let currentDiv;
let section = []

reviews.forEach((review,index)=>{
    if(index % 3 === 0){
        currentDiv = document.createElement('div');
        galleryContainer.appendChild(currentDiv);
        section.push(currentDiv)

        let span = document.createElement('span');
        span.classList.add('pointer');
        span.dataset.index = index / 3;
        // span.innerText = index /3 + 1;
        currentPointer.appendChild(span);

        // Add click event for the pointer
        span.addEventListener('click', () => {
            const targetScroll = parseInt(span.dataset.index) * scrollAmount; 
            galleryContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });
            setActivePointer(span);
        });
    }
    
    currentDiv.innerHTML += `
    <div class="box">
        <img src="${review.img}" alt="${review.name}">
        <h2>${review.name}</h2>
        <p class="job">${review.job}</p>
        <p>${review.desc}</p>
    </div>
`;


})

const setActivePointer =(activePointer)=>{
    const pointers = document.querySelectorAll('.pointer');

    pointers.forEach(pointer => {
        pointer.classList.remove('active');
    });

    activePointer.classList.add('active');
}

nextBtn.addEventListener('click',()=>{
    galleryContainer.scrollBy({left:scrollAmount,behavior:"smooth"})
});

prevBtn.addEventListener('click',()=>{
    galleryContainer.scrollBy({left:-scrollAmount,behavior:"smooth"})
})
