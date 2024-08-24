let storyText = document.querySelector("#story");
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let voiceSelect = document.querySelector("#voiceSelect");
let storyVoice = new SpeechSynthesisUtterance();
let generateStory = document.querySelector(".generateStory");

let voices = [];
let plainText = '';
let words = [];
let currentWordIndex = -1;

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
    voices.forEach((voice) => {
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

async function storyGenerate(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        title.innerHTML = `"${data.title}"`;
        author.innerHTML = `By ${data.author}`;
        plainText = data.story;
        words = data.story.split(/\s+/);
        highlightText(data.story, data.moral);
    } catch (error) {
        console.error("Error fetching story:", error);
    }
}

function highlightText(text, moral) {
    // Create spans for each word in the story
    let highlightedText = text.split(/\s+/).map((word, index) => 
        `<span id="word${index}" class="word">${word}</span>`
    ).join(' ');

    // Create spans for each word in the moral
    let highlightedMoral = moral.split(/\s+/).map(word => 
        `<span>${word} </span>`
    ).join(' ');

    // Combine the story and moral text
    storyText.innerHTML = highlightedText + `<br><br>Moral: ${highlightedMoral}`;
}

document.querySelector(".play").addEventListener("click", () => {
    storyVoice.text = plainText;
    window.speechSynthesis.speak(storyVoice);

    // Reset previous highlight
    resetHighlights();

    // Handle boundaries to highlight current word
    storyVoice.onboundary = (event) => {
        if (event.name === 'word') {
            // Remove highlight from the previous word
            if (currentWordIndex >= 0) {
                document.getElementById(`word${currentWordIndex}`).classList.remove('highlight');
            }

            // Highlight the current word
            currentWordIndex = event.charIndex; // Update index for the current word
            document.getElementById(`word${currentWordIndex}`).classList.add('highlight');
        }
    };

    // Reset highlighting at the end of speech
    storyVoice.onend = () => {
        resetHighlights();
    };
});

function resetHighlights() {
    // Remove all highlights
    document.querySelectorAll('.highlight').forEach(element => {
        element.classList.remove('highlight');
    });
}

generateStory.addEventListener("click", () => {
    storyText.innerHTML = "";
    storyGenerate(storyApi);
});
