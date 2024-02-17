let count = 0;
let assistant = document.getElementById("assistant");
assistant.onclick = function(){

    count++;
    function getVoices(){
        let voices = speechSynthesis.getVoices();
        if(!voices.length){
            let utterance = new SpeechSynthesisUtterance(" ");
            speechSynthesis.speak(utterance);
            voices = speechSynthesis.getVoices();
        }
        return voices;
    }
    function speak(text, voice, rate, pitch, volume){
        let speakData = new SpeechSynthesisUtterance();
        speakData.volume = volume;
        speakData.rate = rate;
        speakData.pitch = pitch;
        speakData.voice = voice;
        speakData.text = text;
        speakData.lang = 'en';
        speechSynthesis.speak(speakData);
    }
    if('speechSynthesis' in window && count == 1){
        let voices = getVoices();
        let rate = 0.8, pitch = 1, volume = 1;
        let text = "hello sir i am Santosh your digital assistant Welcom to cocoons. What is your name?";
        speak(text, voices[1],rate,pitch,volume);
    }
    else{
        console.log("error");
    
    }
    setTimeout(() =>{
        var recongnization = new webkitSpeechRecognition();
        recongnization.onstart =() =>{
         
    
           
        } 
        recongnization.onresult = (e) =>{
     
            var transcript = e.results[0][0].transcript;
           
    
          
            let array = transcript.split(' ');
            let s = array[array.length -1];
            
            
                
                    if('speechSynthesis' in window && count == 1){
                        let voices = getVoices();
                        let rate = 0.8, pitch = 1, volume = 1;
                        let text = 'hello.' + transcript + 'we provided many cour';
                        speak(text, voices[1],rate,pitch,volume);
                    }
                   
                    
                   
                  
        
                else{
                    console.log("error");
     
                }
                
              
          }
          recongnization.start();

    },8000)
   
}