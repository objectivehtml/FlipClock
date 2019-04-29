# Getting Started

FlipClock is easy to get up and going fast. Simply instantiate a new `FlipClock`
instance and pass a DOM node, the starting value, and some options.

```
const el = document.querySelector('.clock');

const clock = new FlipClock(el, new Date('2014-01-01 05:02:12 pm'), {
    face: 'TwentyFourHourClock'
});
```

<div class="clock"></div>

<script>
const el = document.querySelector('.clock');

const clock = new FlipClock(el, new Date('2014-01-01 05:02:12 pm'), {
    face: 'TwentyFourHourClock'
});
</script>