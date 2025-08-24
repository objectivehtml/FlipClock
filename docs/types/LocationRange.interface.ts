interface LocationRange {
  /**
   * A string or object that was supplied to the `parse()` call as the
   * `grammarSource` option.
   */
  readonly source: GrammarSource;
  /** Position at the beginning of the expression. */
  readonly start: Location;
  /** Position after the end of the expression. */
  readonly end: Location;
}