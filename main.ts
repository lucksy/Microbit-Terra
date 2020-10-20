input.onButtonPressed(Button.A, function () {
    currentValue = pins.analogReadPin(AnalogPin.P1)
    resultValue = (currentValue - minValue) / (maxValue - minValue) * 100
    mapVar = Math.map(currentValue, minValue, maxValue, 0, 100)
    if (currentValue > 725) {
        basic.showIcon(IconNames.Umbrella)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
    } else if (currentValue >= 400) {
        for (let index = 0; index < 2; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    } else {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
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
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
	
})
