input.onButtonPressed(Button.A, function () {
    radio.sendString("Duff Man is not of a healthy weight")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(69)
basic.forever(function () {
	
})
