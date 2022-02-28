const recognition = new webkitSpeechRecognition();
recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    console.log(text)
    document.getElementById('user_voice').innerText = text;
    readTheVoice(text);
}

const readTheVoice = (text) => {
    const speech = new SpeechSynthesisUtterance()
    speech.text = text
    console.log(speech.text)
    // if (text = 'what is your name?') {
    //     speech.text = 'My name is Alexa'
    // }

    document.getElementById('alexa_voice').innerText = speech.text;
    window.speechSynthesis.speak(speech);
} 