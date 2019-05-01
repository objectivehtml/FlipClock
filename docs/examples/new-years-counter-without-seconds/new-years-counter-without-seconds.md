This is an example of the {@link Faces.DayCounter} that counts up from the last New Year without showing the seconds.

<div class="clock mt-5"></div>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	// Grab the current date
	var currentDate = new Date();

	// Set some date in the past. In this case, it's always been since Jan 1
	var pastDate  = new Date(currentDate.getFullYear(), 0, 1);

	var clock = new FlipClock(el, pastDate, {
		face: 'DayCounter',
		showSeconds: false
	});
</script>