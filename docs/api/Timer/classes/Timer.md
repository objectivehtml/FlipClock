[flipclock](../../index.md) / [Timer](../index.md) / Timer

# Class: Timer

The Timer class uses a requestAnimationFrame loop to build a timer that can
start and stop.

## Constructors

### Constructor

> **new Timer**(`ms`): `Timer`

Construct the timer.

#### Parameters

##### ms

`number` = `1000`

#### Returns

`Timer`

## Properties

### $count

> `protected` **$count**: `number` = `0`

The count increments with each interval.

***

### $handle?

> `protected` `optional` **$handle**: `number`

The requestAnimationFrame handle number.

***

### $lastLoop?

> `protected` `optional` **$lastLoop**: `number`

The timestamp of the last loop.

***

### $startDate?

> `protected` `optional` **$startDate**: `Date`

The date the timer starts.

***

### interval

> `readonly` **interval**: `number`

The number of milliseconds that define an interval.

## Accessors

### count

#### Get Signature

> **get** **count**(): `number`

Get the number of times the timer has ticked.

##### Returns

`number`

***

### elapsed

#### Get Signature

> **get** **elapsed**(): `number`

The `elapsed` attribute.

##### Returns

`number`

***

### elapsedSinceLastLoop

#### Get Signature

> **get** **elapsedSinceLastLoop**(): `number`

The `elapsedSinceLastLoop` attribute.

##### Returns

`number`

***

### isRunning

#### Get Signature

> **get** **isRunning**(): `boolean`

Determines if the Timer is currently running.

##### Returns

`boolean`

***

### isStopped

#### Get Signature

> **get** **isStopped**(): `boolean`

Determines if the Timer is currently stopped.

##### Returns

`boolean`

***

### lastLoop

#### Get Signature

> **get** **lastLoop**(): `number`

Get the last timestamp the timer looped.

##### Returns

`number`

#### Set Signature

> **set** **lastLoop**(`value`): `void`

Set the last timestamp the timer looped.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### started

#### Get Signature

> **get** **started**(): `undefined` \| `Date`

Get the date object when the timer started.

##### Returns

`undefined` \| `Date`

## Methods

### reset()

> **reset**(`fn?`): `Timer`

Resets the timer. If a callback is provided, re-start the clock.

#### Parameters

##### fn?

(`timer`) => `void`

#### Returns

`Timer`

***

### start()

> **start**(`fn?`): `Timer`

Starts the timer.

#### Parameters

##### fn?

(`timer`) => `void`

#### Returns

`Timer`

***

### stop()

> **stop**(`fn?`): `Timer`

Stops the timer.

#### Parameters

##### fn?

(`timer`) => `void`

#### Returns

`Timer`
