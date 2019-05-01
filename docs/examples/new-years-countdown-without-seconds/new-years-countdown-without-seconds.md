This is an example of the {@link Faces.DayCounter} that counts down to the next New Year without showing the seconds.

<div class="clock mt-5"></div>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	// Grab the current date
	var currentDate = new Date();

	// Set some date in the past. In this case, it's always been since Jan 1
	var date  = new Date(currentDate.getFullYear() + 1, 0, 1);

	var clock = new FlipClock(el, date, {
		face: 'DayCounter',
		showSeconds: false,
		countdown: true
	});
</script>