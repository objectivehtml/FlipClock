This examples show how you can use multiple clock instances on the same page.

<div class="mt-5">
	<div class="clock-1"></div>
</div>

<div class="mt-5">
	<div class="clock-2"></div>
</div>

<script type="text/javascript">

	const date = new Date;

	date.setSeconds(date.getSeconds() + 10);

	var el1 = document.querySelector('.clock-1');

	var clock1 = new FlipClock(el1, date, {
		face: 'MinuteCounter',
		countdown: false
	});

	var el2 = document.querySelector('.clock-2');

	var clock2 = new FlipClock(el2, date, {
		face: 'MinuteCounter',
		countdown: true
	});
</script>
