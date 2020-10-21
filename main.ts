radio.onReceivedNumber(function (receivedNumber) {
    if (p_number != receivedNumber) {
        if (receivedNumber == 100) {
            pins.digitalWritePin(DigitalPin.P3, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P3, 1)
            basic.pause(2000)
        }
    } else {
        p_number = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
	
})
let mapVar = 0
let resultValue = 0
let currentValue = 0
let p_number = 0
OLED.init(128, 64)
radio.setGroup(1)
led.enable(false)
let minValue = 290
let maxValue = 1023
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P3, 0)
basic.forever(function () {
    OLED.writeNumNewLine(currentValue)
    currentValue = pins.analogReadPin(AnalogPin.P0)
    resultValue = (currentValue - minValue) / (maxValue - minValue) * 100
    mapVar = Math.map(currentValue, minValue, maxValue, 0, 100)
    if (currentValue > 725) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
    } else if (currentValue >= 400) {
        for (let index = 0; index < 2; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(5000)
})
