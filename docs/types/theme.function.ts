function theme(): Theme<any>;
function theme<T extends CssDeclaration>(options: FlipClockThemeOptions<T>): Theme<any>;
function theme<T extends CssDeclaration>(options?: FlipClockThemeOptions<T>): Theme<any>;