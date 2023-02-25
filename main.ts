let x = 0
let y = 0
basic.forever(function () {
    led.plot(x, y)
    led.unplot(x - 1, y)
    basic.pause(100)
    x += 1
    if (x == 6) {
        led.unplot(x, y)
        x = 0
        y += 1
    }
    if (y == 6) {
        led.unplot(x, y)
        x = 0
        y = 0
    }
})
