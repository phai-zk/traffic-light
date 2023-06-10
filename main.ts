input.onButtonPressed(Button.A, function () {
    Check = true
})
input.onButtonPressed(Button.B, function () {
    Check = false
})
let Check = false
Check = false
let TimeG = 8
let TimeY = 2
let TimeR = 5
let Green = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
let Yellow = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
let Red = neopixel.create(DigitalPin.P2, 3, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showNumber(0)
    while (Check == true) {
        for (let index = 0; index <= TimeG; index++) {
            if (Check == true) {
                Green.showColor(neopixel.colors(NeoPixelColors.Green))
                basic.showNumber(TimeG - index)
                basic.pause(1000)
            } else {
                Green.clear()
                basic.showNumber(0)
                break;
            }
        }
        Green.clear()
        for (let index2 = 0; index2 <= TimeY; index2++) {
            if (Check == true) {
                Yellow.showColor(neopixel.colors(NeoPixelColors.Yellow))
                basic.showNumber(TimeY - index2)
                basic.pause(1000)
            } else {
                Yellow.clear()
                basic.showNumber(0)
                break;
            }
        }
        Yellow.clear()
        for (let index3 = 0; index3 <= TimeR; index3++) {
            if (Check == true) {
                Red.showColor(neopixel.colors(NeoPixelColors.Red))
                basic.showNumber(TimeR - index3)
                basic.pause(1000)
            } else {
                Red.clear()
                basic.showNumber(0)
                break;
            }
        }
        Red.clear()
    }
})
