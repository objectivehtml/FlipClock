[flipclock](../../../index.md) / [helpers/parser](../index.md) / ParserTracerEvent

# Type Alias: ParserTracerEvent

> **ParserTracerEvent** = \{ `location`: [`LocationRange`](../interfaces/LocationRange.md); `rule`: `string`; `type`: `"rule.enter"`; \} \| \{ `location`: [`LocationRange`](../interfaces/LocationRange.md); `rule`: `string`; `type`: `"rule.fail"`; \} \| \{ `location`: [`LocationRange`](../interfaces/LocationRange.md); `result`: `unknown`; `rule`: `string`; `type`: `"rule.match"`; \}

## Type declaration

\{ `location`: [`LocationRange`](../interfaces/LocationRange.md); `rule`: `string`; `type`: `"rule.enter"`; \}

### location

> `readonly` **location**: [`LocationRange`](../interfaces/LocationRange.md)

### rule

> `readonly` **rule**: `string`

### type

> `readonly` **type**: `"rule.enter"`

\{ `location`: [`LocationRange`](../interfaces/LocationRange.md); `rule`: `string`; `type`: `"rule.fail"`; \}

### location

> `readonly` **location**: [`LocationRange`](../interfaces/LocationRange.md)

### rule

> `readonly` **rule**: `string`

### type

> `readonly` **type**: `"rule.fail"`

\{ `location`: [`LocationRange`](../interfaces/LocationRange.md); `result`: `unknown`; `rule`: `string`; `type`: `"rule.match"`; \}

### location

> `readonly` **location**: [`LocationRange`](../interfaces/LocationRange.md)

### result

> `readonly` **result**: `unknown`

Return value from the rule.

### rule

> `readonly` **rule**: `string`

### type

> `readonly` **type**: `"rule.match"`
