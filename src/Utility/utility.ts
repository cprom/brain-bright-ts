const textToSpeech = (text: string, rate: number) => {
  const utterance = new SpeechSynthesisUtterance(text);

  utterance.volume = 1;
  utterance.rate = rate;
  utterance.pitch = 1;
  utterance.lang = "en-US";

  window.speechSynthesis.speak(utterance);
};


export default textToSpeech