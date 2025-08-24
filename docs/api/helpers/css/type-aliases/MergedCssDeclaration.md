[flipclock](../../../index.md) / [helpers/css](../index.md) / MergedCssDeclaration

# Type Alias: MergedCssDeclaration\<T, U\>

> **MergedCssDeclaration**\<`T`, `U`\> = \{ \[K in keyof T \| keyof U\]: K extends keyof U ? U\[K\] : K extends keyof T ? T\[K\] : never \}

## Type Parameters

### T

`T`

### U

`U`
