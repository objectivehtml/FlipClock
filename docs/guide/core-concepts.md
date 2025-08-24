# Core Concepts

## Clock

Think of a clock in the real world. The "clock" is the housing for the buttons, has an internal timer, and may have one or many functions. Each clock has a unique interface and appearance. Using this metaphor, the `FlipClock` instance is the "clock".

## Face

The clock `Face` determines the behavior and functionality. Some clocks display time in 12 hours, and others use a 24 hour format. A stop watch displays elapsed time. A train station flipboard has alphanumberic characters that show arrivals and destinations. Each face has its own unique functionality.

## FaceValue

The `FaceValue` is responsible for digitizing the data which is used by the `Face`. Each face can implement the `FaceValue` uniquely.

## Theme

The `Theme` determines how the `Face` is rendered. The `Theme` is more than just CSS. The `Theme` also renders the clock in the DOM. Each theme can have its own markup, animations, and CSS.

## CSS

FlipClock.js offers a comprehensive CSS-in-JS solution, creating your own CSS for a new theme, or extending the existing CSS to override it however you with. Of course, nothing stops you from using traditional CSS either.
