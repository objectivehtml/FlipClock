# FlipClock.js

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