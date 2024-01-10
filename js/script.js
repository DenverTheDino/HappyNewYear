function play(){
const audio = document.getElementById("audio")
audio.volume = 0.1;
audio.currentTime < 20;
audio.play()
}
function stepone(){
  play()
  // variable card1
  var step1 = document.getElementById("step-1");
  // var titre card 1 
  var step1title = document.getElementById("step-1Title");
  // var paragraphe card 1
  var step1para = document.getElementById("step-1Para");
  // var image card 1
  var step1image = document.getElementById("step-1Image");
    

    // card 1 afficher afficher
    step1.style.opacity = 1;
    // title card 1 afficher et descend
    step1title.style.opacity = 1;
    step1title.style.top = 0;
    // para card 1 afficher et monte
    step1para.style.opacity = 1;
    step1para.style.bottom = 0;    
    // img card 1 afficher gauche
    step1image.style.opacity = 1
    step1image.style.right=0
  setTimeout(()=>{
    step1title.style.opacity = 0;
    step1para.style.opacity = 0;
    step1image.style.opacity = 0;
    step1.style.opacity = 0;
    

  },"10000");
  setTimeout(()=>{
    steptwo()
  },"10000");
}
function steptwo(){
  // variable card2
  var step2 = document.getElementById("step-2");
  // var titre card 2 
  var step2title = document.getElementById("step-2Title");
  // var paragraphe card 2
  var step2para = document.getElementById("step-2Para");
  // var image card 2
  var step2image = document.getElementById("step-2Image");
      

   // card 2 afficher afficher
   step2.style.opacity = 1;
   // title card 2 afficher 
   step2title.style.opacity = 1;
   // para card 2 afficher 
   step2para.style.opacity = 1;      
   // img card 2 afficher 
   step2image.style.opacity = 1
   

   setTimeout(()=>{
    step2title.style.opacity = 0;
    step2para.style.opacity = 0;
    step2image.style.opacity = 0;
    step2.style.opacity = 0;
  },"10000");
  setTimeout(()=>{
    stepthree()
  },"10000");
}
function stepthree(){
  // variable card2
  var step3 = document.getElementById("step-3");
  // var titre card 2 
  var step3title = document.getElementById("step-3Title");
  // var paragraphe card 2
  var step3para = document.getElementById("step-3Para");
  // var image card 2
  var step3image = document.getElementById("step-3Image");
      

   // card 2 afficher afficher
   step3.style.opacity = 1;
   // title card 2 afficher 
   step3title.style.opacity = 1;
   // para card 2 afficher 
   step3para.style.opacity = 1;      
   // img card 2 afficher 
   step3image.style.opacity = 1
    
   setTimeout(()=>{
    step3title.style.opacity = 0;
    step3para.style.opacity = 0;
    step3image.style.opacity = 0;
    step3.style.opacity = 0;
  },"10000");

  setTimeout(()=>{
    stepfour()
    

  },"10000");
}
function stepfour(){
  // variable card2
  var step4 = document.getElementById("step-4");
  // var titre card 2 
  var step4title = document.getElementById("step-4Title");
  // var paragraphe card 2
  var step4para = document.getElementById("step-4Para");
  // var image card 2
  var step4image = document.getElementById("step-4Image");
      

   // card 2 afficher afficher
   step4.style.opacity = 1;
   // title card 2 afficher 
   step4title.style.opacity = 1;
   // para card 2 afficher 
   step4para.style.opacity = 1;      
   // img card 2 afficher 
   step4image.style.opacity = 1
   

   setTimeout(()=>{
    step4title.style.opacity = 0;
    
    step4para.style.opacity = 0;
    
    step4image.style.opacity = 0;
    
    step4.style.opacity = 0;
    

  },"10000");
  setTimeout(()=>{
   stepcinq()
    

  },"10000");


  
}
function stepcinq(){
  // variable card2
  var step5 = document.getElementById("step-5");
  // var titre card 2 
  var step5title = document.getElementById("step-5Title");
  // var paragraphe card 2
  var step5para = document.getElementById("step-5Para");
  // var image card 2
  var step5image = document.getElementById("step-5Image");
      

   // card 2 afficher afficher
   step5.style.opacity = 1;
   // title card 2 afficher 
   step5title.style.opacity = 1;
   // para card 2 afficher 
   step5para.style.opacity = 1;      
   // img card 2 afficher 
   step5image.style.opacity = 1;
   

   setTimeout(()=>{
    step5title.style.opacity = 0;
    step5para.style.opacity = 0;
    step5image.style.opacity = 0;
    step5.style.opacity = 0;
    

  },"10000");


  
}


