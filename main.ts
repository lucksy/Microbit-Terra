input.onButtonPressed(Button.A, function () {
    if (currentValue > 900) {
        basic.showIcon(IconNames.Surprised)
    } else if (currentValue >= 600) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    resultValue,
    100
    )
})
let resultValue = 0
let currentValue = 0
currentValue = pins.analogReadPin(AnalogPin.P1)
let minValue = 290
let maxValue = 1020
resultValue = (currentValue - minValue) / (maxValue - minValue) * 100
let mapVar = Math.map(currentValue, minValue, maxValue, 0, 100)
basic.forever(function () {
	
})
