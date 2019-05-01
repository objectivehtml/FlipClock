This examples shows a {@link Faces.Counter} with a minimum of `6` digits.

<div class="mt-5 clock"></div>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	var clock = new FlipClock(el, 0, {
		minimumDigits: 6
	});
</script>
