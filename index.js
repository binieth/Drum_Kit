var drumKitCounter = document.querySelectorAll('.drum').length; // selected all my buttons with a class of drum.
var i = 0; // creat a variable to store my counting.

// Once done i need to create a function that will be triggered when an event happen such as 'click'.

// function soundPlayer(){
//     var audio = new Audio('sounds/crash.mp3');
//     audio.play();
// }
// creating a for loop to go through all the drums & when clicked to play the sound assigned to it.

// detecting button press! 
for (i = 0; i < drumKitCounter; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

//detecting keyboard press! 

document.addEventListener('keypress', function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();

            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();

            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();

            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();

            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();

            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();

            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();

            break;

        default:
            break;
    }
}

//button animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);

}