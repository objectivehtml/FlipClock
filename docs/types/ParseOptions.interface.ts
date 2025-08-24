interface ParseOptions<T extends StartRuleNames = "array"> {
  /**
   * String or object that will be attached to the each `LocationRange` object
   * created by the parser. For example, this can be path to the parsed file
   * or even the File object.
   */
  readonly grammarSource?: GrammarSource;
  readonly startRule?: T;
  readonly tracer?: ParserTracer;

  // Internal use only:
  readonly peg$library?: boolean;
  // Internal use only:
  peg$currPos?: number;
  // Internal use only:
  peg$silentFails?: number;
  // Internal use only:
  peg$maxFailExpected?: Expectation[];
  // Extra application-specific properties
  [key: string]: unknown;
}