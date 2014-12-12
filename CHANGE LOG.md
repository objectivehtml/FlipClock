# FlipClock.js

#### 0.7.8
##### 12/12/2014

- (Bug Fix) Fixed a Grunt compiling error and had to repackage the release (again)

#### 0.7.7
##### 12/12/2014

- (Bug Fix) Recompiled build and version. Mistake in previous release.

#### 0.7.6
##### 12/12/2014

- (Example) Added new interval callback example
- (Bug Fix) Merge pull request #160 from rustygreen/patch-1
- (Bug Fix) Fixed constructor bug passing "factory". Updated face.js, the "factory" was not being passed into the constructor, instead a typo was "factor".
- (Bug Fix) Merge pull request #150 from charlesbaynham/Fix-modulus-for-getWeeks
- (Bug Fix) Fixed typo in the definition of getWeeks, preventing its usage
- (Bug Fix) Merge pull request #156 from laureanoendeiza/patch-1
- (Bug Fix) Fixed typo in the definition of getWeeks, preventing its usage.

#### 0.7.5
##### 10/10/2014

- (Bug Fix) Fixed a typo in the definition of the (unused by default) method getWeeks.

#### 0.7.4
##### 10/06/2014

- (Feature) Published to NPM and can be installed with `npm install flipclock`

#### 0.7.3
##### 10/06/2014

- (Bug Fix) Fixed an issue that would prevent the seconds from showing on the TwentyFourHourClock face

#### 0.7.2
##### 10/06/2014

- (Bug Fix) Made it so the TwelveHourClock and TwentyFourHourClock faces can use the showSeconds parameter
- (Bug Fix) Fixed an issue with the time being overridden upon inheritance in the TwentyFourHour clock face
- (Refactor) Added param to the getTime and getMilitaryTime methods to hide the seconds from being returned
- (Example) Added twenty four hour clock without seconds
- (Example) Added Twelve Hour Clock example without seconds

#### 0.7.1
##### 10/06/2014

- (Bug Fix) Fixed an issue that would cause a JS error if the FlipClock.Time object wasn't instantiated with any options
- (Bug Fix) Fixed an issue with the minimumDigits property not being set
- (Bug Fix) Fixed an issue with the minimumDigits property not being set when a clock face was reset
- (Bug Fix) Removed more leaky abstractions within the TwentyFourHourClock face
- (Bug Fix) Removed unnecessary minimumDigits property
- (Bug Fix) Removed the way lists were instantiated. The minimumDigits property was removed, as it's not necessary
- (Bug Fix) Fixed a type that would cause the clock to improperly reset
- (Bug Fix) Updated code comments
- (Refactored) Removed minimumDigit property, which was a leaky abstraction
- (Example) Added new example to show a clock with a minimum number of digits

#### 0.7.0
##### 10/06/2014

- (Feature) Added ability to set the TwelveHourClock and TwentyFourHourClock faces to be able to use a custom date object passed upon instantiation or set after instantiation
- (Bug Fix) Fixed an issue with the HourlyCounter and MinuteCounter faces not working properly when new digits are added
- (Bug Fix) Fixed an issue where the clock wouldn't instantiate properly if a date object was passed to it
- (Bug Fix) Added the autoStart property to the FlipClock.Face class declaration
- (Bug Fix) Fixed the way the loadClockFace and loadLanguage methods worked
- (Bug Fix) The loadClockFace method now resets the clock so if the method is called after instantiation, the entire clock face is re-rendered
- (Bug Fix) Changed the way the getTimeSeconds method works. Now a date object can be passed to get the time relative to the date instead of always being the current time
- (Bug Fix) Fixed some issues with instantiating date objects within the jQuery object.
- (Bug Fix) Fixed an issue with the Counter face that would prevent the counter from auto-incrementing if the autoStart property was used.
- (Refactor) Add new `appendDigitToClock` to clock method to the `FlipClock.Face` class that will append the new digits to the DOM. This method can be inherted by the class face to change the default behavior
- (Refactor) Refactored the clock faces for leaky abstractions
- (Refactor) Refactored the FlipClock.Time.addSeconds() method to work when the time is a date object, not an integer
- (Refactor) Refactored the FlipClock.Time.subSeconds() method to work when the time is a date object, not an integer
- (Refactor) Added new FlipClock.Time.getDateObject method to always return a date object, even when the time is an integer
- (Refactor) Made the getMilitaryTime and getTime objects capable of returning time relative to a datestamp passed as an argument instead of always assuming to current time
- (Refactor) Removed another leaky abstraction from the getTimeSeconds methods
- (Example) Added new example to show how to set a twenty four hour clock with a custom time
- (Example) Added new example to show how to set a twelve hour clock with a custom time
- (Example) Added example to show how to change clock faces upon instantiation
- (Example) Added new example for the DailyCounter clock face

#### 0.6.3
##### 9/1/2014

- (Bug Fix) Fixed an issue with the HourlyCounter and MinuteCounter faces not working properly when new digits are added
- (Refactor) Add new `appendDigitToClock` to clock method to the `FlipClock.Face` class that will append the new digits to the DOM. This method can be inherited by the class face to change the default behavior 

#### 0.6.2
##### 8/25/2014

- (Bug Fix) Removed console.log errors and recompiled the source

#### 0.6.1
##### 8/8/2014

- (Bug Fix) Fixed an issue with multiple instances breaking due to a property instance not getting properly set.
- (Bug Fix) Removed legacy flipclock.js file
- (Example) Added new example to illustrate multiple instances


#### 0.6.0
##### 7/31/2014

- (Feature) Added Norwegian Language Pack
- (Feature) Added Finnish Language Pack
- (Refactor) Refactored the face api. Replaced the $wrapper property with $el.
- (Refactor) Refactored the list api and replace the $obj with $el.
- (Refactor) Also added the lastDigit property to track the last digit that was selected.
- (Refactor) Added new createListItem method to create list items easily.
- (Refactor) Added getNextDigit method to get the next digit in the face
- (Refactor) Added getPrevDigit method to get the previous digit in the face
- (Refactor) Refactored the $obj property to $el
- (Bug Fix) Fixed several bugs as a result of the refactors
- (Bug Fix) Changed the way nodes are added to the DOM to hopefully fix some performance issues
- (Bug Fix) Changed the way the select() method works to use the new DOM nodes
- (Bug Fix) Manually merge pull request from Github issues
- (Bug Fix) Added the countdown propert to the class schema
- (Bug Fix) Fixed an issue with auto incrementing the clock properly. Added new autoIncrement() method to facilitate this action.
- (Bug Fix) Updated clock face to use the new autoIncrement API
- (Bug Fix) Fixed bug caused by trailing commas

#### 0.5.0
##### 5/25/2014

- (Feature) Added bower.js file to the core repo
- (Feature) Added ability to define a minimumDigit property in the FlipClock factory.
- (Feature) Added Swedish language pack
- (Feature) Added Italian language pack
- (Feature) Added Danish language pack
- (Feature) Added Dutch language pack
- (Bug Fix) Refactored libraries to be one class per file
- (Bug Fix) Fixed an issue with the reset method not working properly
- (Bug Fix) Fixed an issue with the minimumDigits property.
- (Bug Fix) Fixed issue that allows it to work with Boostrap library.
- (Bug Fix) Fixed a number of issues from Github that wouldn't merge
- (Bug Fix) Fixed an issue with the instantiation process not working consistently with the jQuery instantiator

#### 0.4.0
##### 1/20/2014

- (Feature) Added Arabic language pack
- (Feature) Added Russian language pack
- (Feature) Installed Node and Grunt to make compiling the source automated and much easier
- (Bug Fix) Capitalized French translations
- (Bug Fix) Fixed an issue with IE7
- (Bug Fix) Fixed a Firefox display issue
- (Bug Fix) Fixed an issue that would cause a JS if the property didn't exist. https://github.com/objectivehtml/FlipClock/pull/66

#### 0.3.2
##### 11/12/2013

- (Bug Fix) Fixed an issue with the clock not adding the play class to new digits when it is running

#### 0.3.1
##### 11/07/2013

- (Feature) Added new lang API that can be used to translate FlipClock into various languages
- (Feature) Added English, Spanish, and German language files
- (Bug Fix) Fixed core libraries to work with the new localizer
- (Example) Added new example for localizing the clock

#### 0.3.0
##### 11/06/2013

- (Feature) Added new Counter clock face that acts as a general flip-counter.
- (Feature) Removed prefixfree.js dependency
- (Feature) Added a new parameter to the DailyCounter clock face to include the seconds. If includeSeconds is set to false, no seconds will be added to the clock.
- (Bug Fix) Fixed an issue with the clocks counting down instead of up
- (Bug Fix) Fixed some IE compatibility issues
- (Bug Fix) Fixed various CSS issues

#### 0.2.0
##### 05/28/2013

- (Feature) Added new DailyCounter. Thanks for Brandon Kelly of Pixel & Tonic for the pull request.

#### 0.1.3
##### 04/24/2013

- (Bug Fix) Fixed an preventing the hour from decreasing properly.

#### 0.1.2
##### 04/20/2013

- (Bug Fix) Fixed an that caused the countdown to break if the clock when from "X digits" to "X - 1 digits". So if the clock went from 7 digits down to 6, it would break.
- (Bug Fix) Fixed an issue that caused the clock to break if the setTime() method was used and made the clock go from 6 digits to 7. 


#### 0.1.1
##### 04/17/2013

- (Bug Fix) Fixed an issue causing multiple clocks on the same page to work incorrectly
- (Bug Fix) Various API inconsistency fixes
- (Bug Fix) Fixed some JSHint errors

#### 0.1.0
##### 04/17/2013

Initial beta release