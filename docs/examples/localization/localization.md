This examples show how localize the clock using spanish.

<div class="clock mt-5"></div>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	var clock = new FlipClock(el, new Date, {
		face: 'HourCounter',
		language: 'es'
	});
</script>