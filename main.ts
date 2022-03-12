radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    mapped_bar = Math.map(signal, -95, -42, 0, 9)
    if (mapped_bar <= 1) {
        flash_freq = 1000
        is_play_music = 0
    } else if (mapped_bar <= 4) {
        flash_freq = 500
        is_play_music = 0
    } else if (mapped_bar <= 7) {
        flash_freq = 200
        is_play_music = 0
    } else {
        flash_freq = 100
        is_play_music = 1
    }
})
let signal = 0
let is_play_music = 0
let flash_freq = 0
let mapped_bar = 0
radio.setGroup(1)
mapped_bar = 0
flash_freq = 1000
is_play_music = 0
basic.forever(function () {
    led.plotBarGraph(
    mapped_bar,
    9
    )
    basic.pause(flash_freq)
    basic.clearScreen()
    basic.pause(flash_freq)
})
basic.forever(function () {
    if (is_play_music) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.pause(5000)
    }
})
