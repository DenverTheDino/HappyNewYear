function stepone(){
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

    

  },"5000");
  setTimeout(()=>{
   
   

  },"5500");
  setTimeout(()=>{
   
   

  },"6000");
  setTimeout(()=>{
    step1title.style.opacity = 0;
    step1title.transition = "8s"
    step1para.style.opacity = 0;
    step1para.style.transition = "8s"
    step1image.style.opacity = 0;
    step1image.style.transition = "8s"
    step1.style.opacity = 0;
    step1.style.transition = "8s"

  },"10000");
}

function start(){
  stepone();

}