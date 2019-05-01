This examples shows a {@link Faces.TwelveHourClock} with a custom time.

<div class="mt-5 clock"></div>

<script type="text/javascript">
	const el = document.querySelector('.clock');

	const clock = new FlipClock(el, new Date('2014-01-01 05:02:12 pm'), {
		face: 'TwelveHourClock'
	});
</script>
