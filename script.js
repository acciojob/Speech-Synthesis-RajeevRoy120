// Your script here.
const synth = window.speechSynthesis;
const textInput = document.getElementById("text");
const rateInput = document.getElementById("rate");
const pitchInput = document.getElementById("pitch");
const voiceSelect = document.getElementById("voices");
const speakButton = document.getElementById("speak");
const stopButton = document.getElementById("stop");

let voices = [];

function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = voices
        .filter(voice => voice.lang.includes("en")) // Only English voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join("");
}

// Load voices when ready
synth.onvoiceschanged = populateVoices;

function speak() {
    if (synth.speaking) synth.cancel(); // Stop previous speech

    if (textInput.value.trim() !== "") {
        const utterance = new SpeechSynthesisUtterance(textInput.value);
        utterance.voice = voices.find(voice => voice.name === voiceSelect.value);
        utterance.rate = rateInput.value;
        utterance.pitch = pitchInput.value;

        synth.speak(utterance);
    }
}

speakButton.addEventListener("click", speak);
stopButton.addEventListener("click", () => synth.cancel());
