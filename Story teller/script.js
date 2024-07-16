let storyText = document.querySelector("textarea");
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let voiceSelect = document.querySelector("#voiceSelect");
let storyVoice = new SpeechSynthesisUtterance();

let voices =[];

let generateStory = document.querySelector(".generateStory");

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
    storyText.value = data.story + `\n\nMoral: ${data.moral}`;

    //split textarea content into span
    let words = data.story.split(/\s+/);
    storyText.innerHTML = words.map(word=> `<span>${word}</span>`).join();
}

document.querySelector(".play").addEventListener("click",()=>{
        storyVoice.text = storyText.value;
        window.speechSynthesis.speak(storyVoice);
        textHighLightWord();
})

generateStory.addEventListener("click",()=>{
    storyText.value = "";
    storyGenerate(storyApi);
})


