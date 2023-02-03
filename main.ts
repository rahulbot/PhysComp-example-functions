function heart (times: number) {
    for (let index = 0; index < times; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(50)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(50)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    blink(1)
    blink(2)
    heart(3)
})
function blink (times: number) {
    for (let index = 0; index < times; index++) {
        basic.showIcon(IconNames.Square)
        basic.pause(50)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(50)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
