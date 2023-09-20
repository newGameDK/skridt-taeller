let stepCount = 0
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    stepCount = stepCount + 1
    basic.showNumber(stepCount)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    stepCount = 0
    basic.showNumber(stepCount)
})
