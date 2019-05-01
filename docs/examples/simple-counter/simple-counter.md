This examples shows a {@link Faces.Counter} with buttons to increment the clock.

<div class="mt-5 clock"></div>

<button type="button" class="increment" style="margin: 25px; font-size: 20px; padding: 15px;" data-value="1">+1</button>

<button type="button" class="increment" style="margin: 25px; font-size: 20px; padding: 15px;" data-value="100">+100</button>

<button type="button" class="increment" style="margin: 25px; font-size: 20px; padding: 15px;" data-value="1000">+1000</button>

<button type="button" class="decrement" style="margin: 25px; font-size: 20px; padding: 15px;" data-value="1">-1</button>

<button type="button" class="decrement" style="margin: 25px; font-size: 20px; padding: 15px;" data-value="100">-100</button>

<button type="button" class="decrement" style="margin: 25px; font-size: 20px; padding: 15px;" data-value="1000">-1000</button>

<button type="button" class="reset" style="margin: 25px; font-size: 20px; padding: 15px;">Reset</button>

<script type="text/javascript">
	var el = document.querySelector('.clock');

	var clock = new FlipClock(el, 0, {
		face: 'Counter',
		autoStart: false,
		minimumDigits: 6
	});

	document.querySelectorAll('.increment').forEach(el => {
		el.addEventListener('click', event => {
			clock.increment(parseInt(event.target.getAttribute('data-value')));
		});
	});

	document.querySelectorAll('.decrement').forEach(el => {
		el.addEventListener('click', event => {
			clock.decrement(parseInt(event.target.getAttribute('data-value')));
		});
	});

	document.querySelector('.reset').addEventListener('click', event => {
		clock.reset();
	});

</script>
