/**
 * Faces are classes that hook into the core of Flipclock to provide unique
 * functionality. The core doesn't do a lot, except facilitate the interaction
 * between all the components. The Face is what makes the clock "tick".
 *
 * @namespace Faces
 */

import Counter from './Counter';
import DayCounter from './DayCounter';
import HourCounter from './HourCounter';
import MinuteCounter from './MinuteCounter';
import TwelveHourClock from './TwelveHourClock';
import TwentyFourHourClock from './TwentyFourHourClock';
import WeekCounter from './WeekCounter';
import YearCounter from './YearCounter';

export {
    Counter,
    DayCounter,
    MinuteCounter,
    HourCounter,
    TwelveHourClock,
    TwentyFourHourClock,
    WeekCounter,
    YearCounter
};
