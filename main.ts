input.onButtonPressed(Button.A, function () {
    contador += -1
    vol += -51
    music.setVolume(vol)
    for (let index = 0; index <= 4; index++) {
        led.unplot(x, index)
    }
    x += -1
})
input.onButtonPressed(Button.B, function () {
    vol += 51
    music.setVolume(vol)
    x += 1
    for (let index = 0; index <= contador; index++) {
        led.plot(x, y - index)
    }
    contador += 1
})
let contador = 0
let y = 0
let x = 0
let vol = 0
music.setVolume(51)
vol = 51
x = 0
y = 4
contador = 1
led.plot(x, y)
basic.forever(function () {
    music.playMelody("B A G A G F A C5 ", 120)
})
