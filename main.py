def on_button_pressed_a():
    global currentValue, resultValue, mapVar
    currentValue = pins.analog_read_pin(AnalogPin.P1)
    resultValue = (currentValue - minValue) / (maxValue - minValue) * 100
    mapVar = Math.map(currentValue, minValue, maxValue, 0, 100)
    if currentValue > 725:
        basic.show_icon(IconNames.UMBRELLA)
        pins.digital_write_pin(DigitalPin.P2, 1)
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(2000)
    elif currentValue >= 400:
        for index in range(2):
            pins.digital_write_pin(DigitalPin.P2, 1)
            pins.digital_write_pin(DigitalPin.P0, 0)
            basic.show_icon(IconNames.HEART)
            basic.show_icon(IconNames.SMALL_HEART)
    else:
        basic.show_icon(IconNames.SAD)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(2000)
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    led.plot_bar_graph(resultValue, 100)
input.on_button_pressed(Button.B, on_button_pressed_b)

mapVar = 0
resultValue = 0
currentValue = 0
maxValue = 0
minValue = 0
minValue = 290
maxValue = 1023
pins.digital_write_pin(DigitalPin.P2, 0)
pins.digital_write_pin(DigitalPin.P0, 0)

def on_forever():
    pass
basic.forever(on_forever)
