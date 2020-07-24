input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    resultValue,
    100
    )
})
let mapVar = 0
let currentValue = 0
let resultValue = 0
let minValue = 290
let maxValue = 1020
basic.forever(function () {
    currentValue = pins.analogReadPin(AnalogPin.P1)
    resultValue = (currentValue - minValue) / (maxValue - minValue) * 100
    mapVar = Math.map(currentValue, minValue, maxValue, 0, 100)
    if (currentValue > 900) {
        basic.showIcon(IconNames.Umbrella)
    } else if (currentValue >= 600) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
