def on_received_number(receivedNumber):
    if receivedNumber == 9:
        joystickbit.Vibration_Motor(500)
radio.on_received_number(on_received_number)

radio.set_group(120)
music.play(music.string_playable("G B C5 B A E F E ", 400),
    music.PlaybackMode.UNTIL_DONE)
joystickbit.init_joystick_bit()

def on_forever():
    if input.button_is_pressed(Button.A):
        basic.clear_screen()
        basic.pause(100)
        radio.send_number(0)
    elif joystickbit.get_rocker_value(joystickbit.rockerType.X) < 200:
        while True:
            radio.send_number(4)
            basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                """)
            if joystickbit.get_rocker_value(joystickbit.rockerType.X) > 200:
                basic.clear_screen()
                radio.send_number(0)
                break
    elif joystickbit.get_rocker_value(joystickbit.rockerType.X) > 800:
        while True:
            radio.send_number(3)
            basic.show_leds("""
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                """)
            if joystickbit.get_rocker_value(joystickbit.rockerType.X) < 800:
                basic.clear_screen()
                radio.send_number(0)
                break
    elif joystickbit.get_rocker_value(joystickbit.rockerType.Y) < 200:
        while True:
            radio.send_number(1)
            basic.show_leds("""
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                """)
            if joystickbit.get_rocker_value(joystickbit.rockerType.Y) > 200:
                basic.clear_screen()
                radio.send_number(0)
                break
    elif joystickbit.get_rocker_value(joystickbit.rockerType.Y) > 800:
        while True:
            radio.send_number(2)
            basic.show_leds("""
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                """)
            if joystickbit.get_rocker_value(joystickbit.rockerType.Y) < 800:
                basic.clear_screen()
                radio.send_number(0)
                break
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P13):
        while True:
            radio.send_number(5)
            basic.show_leds("""
                # . . . #
                # . # . #
                # # # # #
                # . # . #
                # . # . #
                """)
            if not (joystickbit.get_button(joystickbit.JoystickBitPin.P13)):
                basic.clear_screen()
                break
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P14):
        while True:
            radio.send_number(6)
            basic.show_leds("""
                # . # . #
                # . # . #
                # # # # #
                # . # . #
                # . . . #
                """)
            if not (joystickbit.get_button(joystickbit.JoystickBitPin.P14)):
                basic.clear_screen()
                radio.send_number(0)
                break
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P15):
        while True:
            radio.send_number(7)
            basic.show_leds("""
                . . . . .
                . . # . .
                # # # # .
                . . # . .
                . . . . .
                """)
            if not (joystickbit.get_button(joystickbit.JoystickBitPin.P15)):
                basic.clear_screen()
                radio.send_number(0)
                break
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P12):
        while True:
            radio.send_number(8)
            basic.show_leds("""
                . . . . .
                . . # . .
                . # # # #
                . . # . .
                . . . . .
                """)
            if not (joystickbit.get_button(joystickbit.JoystickBitPin.P12)):
                basic.clear_screen()
                radio.send_number(0)
                break
basic.forever(on_forever)
