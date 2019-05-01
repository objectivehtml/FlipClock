This is an example of the {@link Faces.MinuteCounter} that counts up 5 seconds and stops.

<div class="clock mt-5 mb-3"></div>

<p class="message"></p>

<button class="btn btn-primary start">Start Clock</button>
<button class="btn btn-danger stop">Stop Clock</button>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	function date(offset = 0) {
		return new Date(new Date().setSeconds(new Date().getSeconds() + offset));
	}

	var clock = new FlipClock(el, () => date(), {
		face: 'MinuteCounter',
		autoStart: false,
		stopAt: 5
	});

	clock.on('start', () => {
		document.querySelector('.message').innerHTML = 'Clock started!';
	});

	clock.on('stop', () => {
		document.querySelector('.message').innerHTML = 'Clock stopped!';
	});

	document.querySelector('.start').addEventListener('click', event => {
		clock.timer.isStopped && clock.start();
	});

	document.querySelector('.stop').addEventListener('click', event => {
		clock.timer.isRunning && clock.stop();
	});
</script>
