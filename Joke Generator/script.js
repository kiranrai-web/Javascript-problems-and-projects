const jokeBtn = document.getElementById("button");
const jokeDisplay = document.getElementById("joke");
const punchline = document.querySelector(".box");

const apiUrl = "https://official-joke-api.appspot.com/random_joke";

async function generateJokes(url){
    const respone = await fetch(url);
    var data = await respone.json();

    jokeDisplay.innerHTML = data.setup;
    punchline.addEventListener("click",(e)=>{
        punchline.innerHTML = data.punchline;
    })
    console.log(data);
}

jokeBtn.addEventListener("click",e=>{
    resetPunchline();
    generateJokes(apiUrl);
})

function resetPunchline(){
    punchline.innerHTML = "Show Punchline"
}

generateJokes(apiUrl);