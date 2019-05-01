This examples show how to change a clock the {@link Faces.HourCounter} to the {@link Faces.MinuteCounter} during runtime.

<div class="clock mt-5"></div>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	var clock = new FlipClock(el, new Date, {
		face: 'HourCounter',
		showSeconds: false
	});

	setTimeout(function() {
		// Set the options before you set the face. Setting the face triggers
		// a the render functions. If you set the option after face, you have
		// to re-render twice.
		clock.showSeconds = true;
		clock.face = 'MinuteCounter';
	}, 3000);
</script>