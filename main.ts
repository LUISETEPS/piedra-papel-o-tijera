radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.Square)
    }
    if (Tirada == 1 && receivedNumber == 2) {
        basic.showIcon(IconNames.Yes)
    }
    if (Tirada == 1 && receivedNumber == 3) {
        basic.showIcon(IconNames.No)
    }
    if (Tirada == 1 && receivedNumber == 1) {
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (Tirada == 2 && receivedNumber == 3) {
        basic.showIcon(IconNames.Yes)
    }
    if (Tirada == 2 && receivedNumber == 1) {
        basic.showIcon(IconNames.No)
    }
    if (Tirada == 2 && receivedNumber == 2) {
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (Tirada == 3 && receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    }
    if (Tirada == 3 && receivedNumber == 2) {
        basic.showIcon(IconNames.No)
    }
    if (Tirada == 3 && receivedNumber == 3) {
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (Tirada == 1 && receivedNumber == 2) {
        PUNTOS += 1
    }
    if (Tirada == 2 && receivedNumber == 3) {
        PUNTOS += 1
    }
    if (Tirada == 3 && receivedNumber == 1) {
        PUNTOS += 1
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(Tirada)
})
input.onGesture(Gesture.Shake, function () {
    Tirada = randint(1, 3)
    if (Tirada == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (Tirada == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    if (Tirada == 3) {
        basic.showIcon(IconNames.Square)
    }
})
let Tirada = 0
let PUNTOS = 0
radio.setGroup(119)
basic.forever(function () {
	
})
basic.forever(function () {
    if (PUNTOS == 5) {
        basic.showString("HAS GANADO")
    }
})
