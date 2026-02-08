radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 9) {
        joystickbit.Vibration_Motor(500)
    }
})
radio.setGroup(120)
music.play(music.stringPlayable("G B C5 B A E F E ", 400), music.PlaybackMode.UntilDone)
joystickbit.initJoystickBit()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(100)
        radio.sendNumber(0)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        while (true) {
            radio.sendNumber(4)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 200) {
                basic.clearScreen()
                radio.sendNumber(0)
                break;
            }
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        while (true) {
            radio.sendNumber(3)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 800) {
                basic.clearScreen()
                radio.sendNumber(0)
                break;
            }
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        while (true) {
            radio.sendNumber(1)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 200) {
                basic.clearScreen()
                radio.sendNumber(0)
                break;
            }
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        while (true) {
            radio.sendNumber(2)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 800) {
                basic.clearScreen()
                radio.sendNumber(0)
                break;
            }
        }
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        while (true) {
            radio.sendNumber(5)
            basic.showLeds(`
                # . . . #
                # . # . #
                # # # # #
                # . # . #
                # . # . #
                `)
            if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P13))) {
                basic.clearScreen()
                break;
            }
        }
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        while (true) {
            radio.sendNumber(6)
            basic.showLeds(`
                # . # . #
                # . # . #
                # # # # #
                # . # . #
                # . . . #
                `)
            if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P14))) {
                basic.clearScreen()
                radio.sendNumber(0)
                break;
            }
        }
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        while (true) {
            radio.sendNumber(7)
            basic.showLeds(`
                . . . . .
                . . # . .
                # # # # .
                . . # . .
                . . . . .
                `)
            if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P15))) {
                basic.clearScreen()
                radio.sendNumber(0)
                break;
            }
        }
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        while (true) {
            radio.sendNumber(8)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # #
                . . # . .
                . . . . .
                `)
            if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P12))) {
                basic.clearScreen()
                radio.sendNumber(0)
                break;
            }
        }
    }
})
