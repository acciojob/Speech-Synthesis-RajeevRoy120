// Your script here.
// Get references to the elements
const textInput = document.getElementById("text");
const voiceSelect = document.getElementById("voices");
const rateInput = document.getElementById("rate");
const pitchInput = document.getElementById("pitch");
const speakButton = document.getElementById("speak");
const stopButton = document.getElementById("stop");

// Initialize the speech synthesis API
const synth = window.speechSynthesis;
let voices = [];

// Function to populate the voices dropdown
function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = voices
        .filter(voice => voice.lang.includes("en")) // Only English voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join("");
}

// Function to start the speech synthesis
function speak() {
    // Stop any ongoing speech
    synth.cancel();

    if (textInput.value.trim() !== "") {
        const utterance = new SpeechSynthesisUtterance(textInput.value);
        utterance.voice = voices.find(voice => voice.name === voiceSelect.value);
        utterance.rate = rateInput.value;
        utterance.pitch = pitchInput.value;

        synth.speak(utterance);
    }
}

// Function to stop the speech synthesis
function stop() {
    synth.cancel();
}

// Event listeners for the buttons
speakButton.addEventListener("click", speak);
stopButton.addEventListener("click", stop);

// Event listener for when the voices are loaded
synth.onvoiceschanged = populateVoices;
