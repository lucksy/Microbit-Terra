input.onButtonPressed(Button.A, function () {
    currentValue = pins.analogReadPin(AnalogPin.P1)
    resultValue = (currentValue - minValue) / (maxValue - minValue) * 100
    mapVar = Math.map(currentValue, minValue, maxValue, 0, 100)
    if (currentValue > 900) {
        basic.showIcon(IconNames.Umbrella)
        basic.pause(2000)
    } else if (currentValue >= 600) {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    resultValue,
    100
    )
})
let mapVar = 0
let resultValue = 0
let currentValue = 0
let maxValue = 0
let minValue = 0
minValue = 290
maxValue = 1023
basic.forever(function () {
	
})
