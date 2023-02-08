function animation(event) {
    document.getElementsByClassName(event)[0].classList.add("pressed")
    setTimeout(function () { document.getElementsByClassName(event)[0].classList.remove("pressed"); }, 100)


}
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerhtml = this.innerHTML;
        switch (buttonInnerhtml) {
            case "w":
                var crash = new Audio("sounds/crash.mp3")
                crash.play()
                animation("w")
                break;
            case "a":
                var kick_bass = new Audio("sounds/kick-bass.mp3")
                kick_bass.play()
                animation(buttonInnerhtml)
                break;
            case "s":
                var snare = new Audio("sounds/snare.mp3")
                snare.play()
                animation(buttonInnerhtml)
                break;
            case "d":
                var tom_1 = new Audio("sounds/tom-1.mp3")
                tom_1.play()
                animation(buttonInnerhtml)
                break;
            case "j":
                var tom_2 = new Audio("sounds/tom-2.mp3")
                tom_2.play()
                animation(buttonInnerhtml)
                break;
            case "k":
                var tom_3 = new Audio("sounds/tom-3.mp3")
                tom_3.play()
                animation(buttonInnerhtml)
                break;
            case "l":
                var tom_4 = new Audio("sounds/tom-4.mp3")
                tom_4.play()
                animation(buttonInnerhtml)
                break;

            default:
                break;
        }

    })
}
document.addEventListener("keypress", function (event) {

    switch (event.key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            animation(event.key)
            break;
        case "a":
            var kick_bass = new Audio("sounds/kick-bass.mp3")
            kick_bass.play()
            animation(event.key)
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            animation(event.key)
            break;
        case "d":
            var tom_1 = new Audio("sounds/tom-1.mp3")
            tom_1.play()
            animation(event.key)
            break;
        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3")
            tom_2.play()
            animation(event.key)
            break;
        case "k":
            var tom_3 = new Audio("sounds/tom-3.mp3")
            tom_3.play()
            animation(event.key)
            break;
        case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3")
            tom_4.play()
            animation(event.key)
            break;
        default:
            break;
    }
})
