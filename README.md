# FlipClock.js

## Installation

FlipClock is designed to be used a UMD or ES6 module that can be required and
imported. NPM is the primary package manager. The CDN exposes `FlipClock` as a
global variable.

### NPM

```npm install flipclock --save```

### CDN

**Specific version**

`https://cdn.jsdelivr.net/npm/flipclock@<?js= pkg.version ?>/dist/flipclock.min.js`

**Always use latest version**

`https://cdn.jsdelivr.net/npm/flipclock/dist/flipclock.min.js`

<a href="https://github.com/objectivehtml/FlipClock/archive/master.zip" class="btn btn-primary">
	<i class="fa fa-download"></i> Download .ZIP
</a>

---

### New in v1.0

FlipClock originally was developed an example library for a computer science class that I taught. I never actually thought people would use it, let alone imagine how people would use it. It's been a long time coming, but FlipClock.js has been rewritten for a modern age with no dependencies.

- Rewritten ES6 Syntax
- No dependencies, pure vanilla JS
- Import with Webpack, Rollup, Browserify with the UMD build
- Mobile friendly with responsive CSS
- Supports negative values
- Supports alpha values
- All new CSS themes for different flip effects
- All new clock faces
- Extensible and customizable
- Unit testing with Jest

---

### Basic Usage

	import FlipClock from 'flipclock';

	const el = document.querySelector('.clock');

	const clock = new FlipClock(el, new Date, {
		face: 'HourCounter'
	});

---

### Collaborators

- [Justin Kimbrell](https://github.com/objectivehtml)
- [Brian Espinosa](https://github.com/brianespinosa)

---

### Special Credit

Big thanks to all the examples on the Internet. But in particular, a huge thanks goes out to Adem Ilter who built [this example](http://codepen.io/ademilter/pen/czIGo), which provided the best animation and least amount of code to prove the concept.

---

### License

[Licensed under MIT](./license.txt)
