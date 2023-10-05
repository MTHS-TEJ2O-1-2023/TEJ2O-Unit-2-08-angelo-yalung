/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Oct 2023
 * This program turns on the individual colors for the RGB LED
*/

// p
basic.clearScreen()
basic.pause(1000)

// colors
input.onButtonPressed(Button.A, function() {
  pins.digitalWritePin(DigitalPin.P14, 1)
  basic.showString("Green") //BLue

  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P14, 0)
  basic.showString("Blue") 
  pins.digitalWritePin(DigitalPin.P15,1)

  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P15, 0)
  basic.showString("Red") 
  pins.digitalWritePin(DigitalPin.P16, 1)

  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P15,1)
  pins.digitalWritePin(DigitalPin.P14,1)
  basic.showString("White")

  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P16,0)
  basic.showString("Magenta")

  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P16,1)
  pins.digitalWritePin(DigitalPin.P15,0)
  basic.showString("Yellow")

  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P15,1)
  pins.digitalWritePin(DigitalPin.P14,0)

  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P14,0)
  pins.digitalWritePin(DigitalPin.P15,0)
  pins.digitalWritePin(DigitalPin.P16,0)

  basic.clearScreen()
})
