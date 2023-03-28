radio.onReceivedNumber(function (receivedNumber) {
    music.playMelody("- - C5 - - - - - ", 120)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("SOS")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
    radio.sendString("w r u")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    radio.sendString("hi")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("HELP")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
    radio.sendString("wsp")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    radio.sendString("ft")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    radio.sendString("h r u")
})
radio.setGroup(35)
