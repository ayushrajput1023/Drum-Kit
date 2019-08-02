
/* To study about event lisner go to mdn and search for event listner.*/

/* Here,"whenclick" is the function name and the "click" is the event.We dont used "whenclick()" the
  function name with parenthesesis because if we use parenthesesis then the function will run without
   clicking on the button.For more details see vedio number 126. */

/*document.querySelector("button").addEventListener("click",whenclick);

function whenclick() {
  alert("You just clicked me");
}   */



   //  When button is clicked
var drumbutton=document.querySelectorAll(".drum").length  /*Here,".drum" is the class name*/
for(var i=0;i<drumbutton;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    //    this.style.color="white";   /* Here, "this" keyword is used which will return the clicked element like button in this case.*/
    makenoise(this.innerHTML);
    animation(this.innerHTML);
  });
}


   //When key is pressed
document.addEventListener("keypress",function(event){
  makenoise(event.key);
  animation(event.key);
})


function makenoise(key){
  switch (key) {
    case "w":
        var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s":
        var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
          var audio= new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
    case "j":
          var audio= new Audio("sounds/snare.mp3");
          audio.play();
          break;
    case "k":
       var audio= new Audio("sounds/kick-bass.mp3");
       audio.play();
       break;
    case "l":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
    default:console.log(this.innerHTML);

  }
}


function animation(currentkey){
     var activeButton = document.querySelector("." + currentkey);
          activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);



}
