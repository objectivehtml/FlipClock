This example show how to bind and unbind events.

<div class="clock mt-5"></div>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	var clock = new FlipClock(el, new Date, {
		face: 'HourCounter'
	});

	var count = 0;

	clock.on('interval', () => {
		if(++count === 10) {
			clock.off('interval');
		}
	});

	clock.once('interval', () => {
		console.log('this gets called one time');
	});
</script>