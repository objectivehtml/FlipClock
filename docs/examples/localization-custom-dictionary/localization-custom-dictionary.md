This examples show how localize the clock using a custom dictionary.

<div class="clock mt-5"></div>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	var clock = new FlipClock(el, new Date, {
		face: 'HourCounter',
		language: {
			'years'   : '1',
			'months'  : '2',
			'days'    : '3',
			'hours'   : '4',
			'minutes' : '5',
			'seconds' : '6'
		}
	});
</script>