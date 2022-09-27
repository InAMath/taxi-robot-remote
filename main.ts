input.onButtonPressed(Button.A, function () {
    led.unplot(xklik, 4 - yklik)
    yklik += 1
    led.plot(xklik, 4 - yklik)
})
input.onButtonPressed(Button.AB, function () {
    x.push(xklik)
    y.push(yklik)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(xklik, 4 - yklik)
    xklik += 1
    led.plot(xklik, 4 - yklik)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index <= x.length - 1; index++) {
        led.plot(x[index], 4 - y[index])
        radio.sendNumber(x[index])
        radio.sendNumber(y[index])
    }
    radio.sendNumber(-1)
})
let y: number[] = []
let x: number[] = []
let yklik = 0
let xklik = 0
radio.setGroup(50)
xklik = 0
yklik = 0
led.plot(xklik, 4 - yklik)
x = []
y = []
x.push(xklik)
y.push(yklik)
basic.forever(function () {
	
})
