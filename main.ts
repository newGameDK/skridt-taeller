let stepCount = 0
input.onButtonPressed(Button.A, function () {
    stepCount = 0
    basic.showNumber(stepCount)
})
input.onGesture(Gesture.Shake, function () {
    stepCount = stepCount + 1
    basic.showNumber(stepCount)
})
