[flipclock](../../../index.md) / [helpers/css](../index.md) / UseCss

# Type Alias: UseCss()\<TArgs, TReturn\>

> **UseCss**\<`TArgs`, `TReturn`\> = [`CssDeclaration`](CssDeclaration.md)\<`TReturn`\>

## Type Parameters

### TArgs

`TArgs` *extends* readonly `unknown`[] = `unknown`[]

### TReturn

`TReturn` *extends* [`CSSProperties`](../interfaces/CSSProperties.md) = [`CSSProperties`](../interfaces/CSSProperties.md)

> **UseCss**(...`args`): [`CssDeclaration`](CssDeclaration.md)\<`TReturn`\>

## Parameters

### args

...`TArgs`

## Returns

[`CssDeclaration`](CssDeclaration.md)\<`TReturn`\>

## Properties

### extend()

> **extend**: \<`TExtension`\>(`fn`) => `UseCss`\<`TArgs`, [`MergedCssDeclaration`](MergedCssDeclaration.md)\<`TReturn`, `TExtension`\>\>

#### Type Parameters

##### TExtension

`TExtension` *extends* [`CSSProperties`](../interfaces/CSSProperties.md)

#### Parameters

##### fn

[`UseCssDeclaration`](UseCssDeclaration.md)\<`TArgs`, `TExtension`\>

#### Returns

`UseCss`\<`TArgs`, [`MergedCssDeclaration`](MergedCssDeclaration.md)\<`TReturn`, `TExtension`\>\>

***

### merge()

> **merge**: \<`TExtension`\>(`fn`) => `UseCss`\<`TArgs`, [`MergedCssDeclaration`](MergedCssDeclaration.md)\<`TReturn`, `TExtension`\>\>

#### Type Parameters

##### TExtension

`TExtension` *extends* [`CSSProperties`](../interfaces/CSSProperties.md)

#### Parameters

##### fn

[`UseCssDeclaration`](UseCssDeclaration.md)\<`TArgs`, `TExtension`\>

#### Returns

`UseCss`\<`TArgs`, [`MergedCssDeclaration`](MergedCssDeclaration.md)\<`TReturn`, `TExtension`\>\>
