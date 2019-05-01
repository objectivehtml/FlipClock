This examples shows how the {@link Faces.MinuteCounter} handles adding new digits, aka: overflowing.

<div class="clock mt-5"></div>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	var clock = new FlipClock(el, new Date, {
		face: 'MinuteCounter'
	});

	clock.on('start', () => {
		const date = new Date;

		date.setMinutes(date.getMinutes() + 10);

		clock.value = date;
	});
</script>