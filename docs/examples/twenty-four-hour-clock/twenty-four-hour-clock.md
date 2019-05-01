This examples shows a {@link Faces.TwentyFourHourClock}.

<div class="mt-5 clock"></div>

<script type="text/javascript">
	const el = document.querySelector('.clock');

	const clock = new FlipClock(el, {
		face: 'TwentyFourHourClock'
	});
</script>
