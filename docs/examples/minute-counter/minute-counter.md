This is an example of the {@link Faces.MinuteCounter}.

<div class="clock mt-5 mb-3"></div>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	var clock = new FlipClock(el, new Date, {
		face: 'MinuteCounter'
	});
</script>
