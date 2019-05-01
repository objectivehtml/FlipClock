This examples shows a {@link Faces.TwelveHourClock} without seconds.

<div class="mt-5 clock"></div>

<script type="text/javascript">
	const el = document.querySelector('.clock');

	const clock = new FlipClock(el, {
		face: 'TwelveHourClock'
	});
</script>
