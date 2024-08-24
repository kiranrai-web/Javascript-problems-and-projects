let storyText = document.querySelector("#story")
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let voiceSelect = document.querySelector("#voiceSelect");
let storyVoice = new SpeechSynthesisUtterance();

let voices =[];
let plainText = '';
let words = [];
let currentWordIndex = -1;

let generateStory = document.querySelector(".generateStory");
storyText.value = "";

const storyApi = 'https://shortstories-api.onrender.com';

// Check for available voices when the page first loads
voices = window.speechSynthesis.getVoices();
populateVoiceList();

// Update voices array and populate voiceSelect when voiceschanged event fires
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    populateVoiceList();
};

// Function to populate the voiceSelect dropdown with available voices
function populateVoiceList() {
    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.textContent = voice.name;
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
}

// Handle voice selection change
voiceSelect.addEventListener("change", () => {
    storyVoice.voice = voices.find(voice => voice.name === voiceSelect.selectedOptions[0].getAttribute('data-name'));
});

async function storyGenerate(url){
    const response = await fetch(url);
    var data = await response.json();

    title.innerHTML = `"${data.title}"`;
    author.innerHTML = `By ${data.author}`;
    // storyText.value = data.story + `\n\nMoral: ${data.moral}`T
    plainText = data.story;
    words = data.story.split(/\s+/);
    highlightText(data.story,data.moral);
    // highlightText(data.moral);

    //split textarea content into span
    // let words = data.story.split(/\s+/);
    // storyText.value = words.map(word=> `<span>${word}</span>`).join();
    // storyText.value = words.map(word => `${word}`).join();
}

function highlightText(text,moral){
    let highlightedText = text.split(/\s+/).map((word,index) =>`<span id="word${index}" class="word">${word}</span>`).join(' ');
    let highlightedMoral = moral.split(/\s+/).map(word => `<span>${word} </span>`).join('');
    storyText.innerHTML = highlightedText + `\n\nMoral: ${highlightedMoral}`;
}

document.querySelector(".play").addEventListener("click",()=>{
        storyVoice.text = plainText;
        window.speechSynthesis.speak(storyVoice);
        storyVoice.onboundary = (event)=>{
            if(event.name === 'word'){
                currentWordIndex = event.charIndex;
                document.getElementById(`word${currentWordIndex}`).classList.add('highlight');
                console.log(currentWordIndex);
            }

            storyVoice.onend = () => {
                // Remove highlight from the last word when speech ends
                if (currentWordIndex >= 0) {
                    document.getElementById(`word${currentWordIndex}`).classList.remove('highlight');
                }
                currentWordIndex = -1; // Reset index
            };
        }
})

generateStory.addEventListener("click",()=>{
    storyText.innerHTML = "";
    storyGenerate(storyApi);
})


