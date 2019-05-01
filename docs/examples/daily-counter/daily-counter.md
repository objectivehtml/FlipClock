This is the most basic example of a DayCounter.

<div class="clock mt-5"></div>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	var clock = new FlipClock(el, new Date, {
		face: 'DayCounter'
	});
</script>