const imageBox = document.querySelector(".imageGallery");
const imageSearch = document.querySelector(".searchImage input")
const searchBtn = document.querySelector(".searchImage button")
const showMore = document.querySelector(".showMore")

let images = [];

const accessKey = 's79N_tFoa2aSgJezwYjyqtLXKn3UB8SMtOkMzpPzQV8'
let page = 1;
let keyword = "nature";

const fetchImage = async ()=>{
    try {
        let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
        let response = await fetch(url);

        if(!response.ok){
            throw new Error('Fetch was not successful ' + api.statusText)
        }

        let data = await response.json()

        if(page === 1){
            imageBox.innerHTML = '';
        }

        imageSearch.input = '';

        if (data.results.length > 0) {
            data.results.forEach((image) => {
                const imgElement = document.createElement('img');
                imgElement.src = image.urls.small;
                imgElement.alt = image.alt_description;
                imageBox.appendChild(imgElement);
            })}
        else{
            console.log('No more images found for this search.');
            showMore.style.display = 'none'; 
        }

    } catch (error) {
        throw(error);
    }
}


showMore.addEventListener('click',()=>{
    page++;
    fetchImage()
})

searchBtn.addEventListener("click",()=>{
    keyword = imageSearch.value || 'default' 
    page = 1;
    images = []
    fetchImage()
})

imageSearch.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
        keyword = imageSearch.value || 'default' 
        page = 1;
        images = []
        fetchImage()
    }
})
 

fetchImage()