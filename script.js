// Your script here.
const textInput = document.getElementById("text");
const voiceSelect = document.getElementById("voices");
// ... get references to the other elements ...

// Initialize the speech synthesis API
const synth = window.speechSynthesis;

// Function to populate the voices dropdown
function populateVoices() {
    // Get the list of voices
    const voices = synth.getVoices();
    
    // Populate the dropdown with the voice options
    // ... your code here ...
}

// Function to start the speech synthesis
function speak() {
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    
    // Set the voice, rate, and pitch of the utterance
    // ... your code here ...
    
    // Start the speech synthesis
    synth.speak(utterance);
}

// Function to stop the speech synthesis
function stop() {
    // ... your code here ...
}

// Event listeners for the buttons
speakButton.addEventListener("click", speak);
stopButton.addEventListener("click", stop);

// Event listener for when the voices are loaded
synth.onvoiceschanged = populateVoices;