let stepCount = 0
input.onGesture(Gesture.Shake, function () {
    stepCount = stepCount + 1
    basic.showNumber(stepCount)
})
input.onButtonPressed(Button.A, function () {
    stepCount = 0
    basic.showNumber(stepCount)
})
