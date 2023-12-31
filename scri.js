
// number of classes having 'drum' element
var numofdrum = document.querySelectorAll(".drum").length;

// running a loop for alocating the function to each 'drum' class
for (var i = 0; i< numofdrum; i++){

    // detecting click press
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

    });

    // detecting keyboard press
    document.addEventListener("keypress",function(event) {
        makeSound(event.key);
    });

    function makeSound(key){
    switch (key) {
        case "w":
            var crash  = new Audio('crash.mp3');
            crash.play();
            break;
        case "a":
            var tom1  = new Audio('tom-1.mp3');
            tom1.play();
            break;
        case "s":
            var kickbass  = new Audio('kick-bass.mp3');
            kickbass.play();
            break;
        case "d":
            var tom2  = new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "j":
            var tom3  = new Audio('tom-3.mp3');
            tom3.play();
            break;
        case "k":
            var snare  = new Audio('snare.mp3');
            snare.play();
            break;
        case "l":
            var tom4  = new Audio('tom-4.mp3');
            tom4.play();
            break;
        }
    }
}
