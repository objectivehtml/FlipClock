interface SourceText {
  /**
   * Identifier of an input that was used as a grammarSource in parse().
   */
  readonly source: GrammarSource;
  /** Source text of the input. */
  readonly text: string;
}