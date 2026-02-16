

const textToSpeech = (text: string, rate: number) => {
  let voices = []
  const utterance = new SpeechSynthesisUtterance(text);
  voices = window.speechSynthesis.getVoices();
  utterance.voice = voices[0]
  utterance.volume = 1;
  utterance.rate = rate;
  utterance.pitch = 1;
  utterance.lang = "en-US";

  window.speechSynthesis.speak(utterance);
};


export default textToSpeech