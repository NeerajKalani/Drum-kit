// for(var a=0;a<document.querySelectorAll(".drum").length;a++)
// {
//   document.querySelectorAll(".drum")[a].addEventListener("click",function(){
//     var b=this.innerHTML;
//     noise(b);
//   });
// }
//
// document.addEventListener("keypress",function(event){
//   noise(event.key);
// });
//
// function noise(key) {
//   switch (key) {
//     case "w":
//       var tom1 = new Audio('sounds/tom-1.mp3');
//       tom1.play();
//       break;
//     case "a":
//       var tom2 = new Audio('sounds/tom-2.mp3');
//       tom2.play();
//       break;
//     case "s":
//       var tom3 = new Audio('sounds/tom-3.mp3');
//       tom3.play();
//       break;
//     case "d":
//       var tom4 = new Audio('sounds/tom-4.mp3');
//       tom4.play();
//       break;
//     case "j":
//       var snare = new Audio('sounds/snare.mp3');
//       snare.play();
//       break;
//     case "k":
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//       break;
//     case "l":
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//       break;
//
//     default:
//   }
// }


for (var a = 0; a < document.querySelectorAll(".drum").length; a++) {
  document.querySelectorAll(".drum")[a].addEventListener("click", function() {
    var b = this.innerHTML;
    amazing(b);
    animation(b);
  });
}

document.addEventListener("keypress", function(event) {
  var c = event.key;
  amazing(c);
  animation(c);
});

function amazing(button) {
  switch (button) {
    case "w":
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
      break;
    case "a":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;
    case "l":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;


  }
}

function animation(key)
{
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  },100);
}
