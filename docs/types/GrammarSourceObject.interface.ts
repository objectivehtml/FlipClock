interface GrammarSourceObject {
  readonly toString: () => string;

  /**
   * If specified, allows the grammar source to be embedded in a larger file
   * at some offset.
   */
  readonly offset?: undefined | ((loc: Location) => Location);
}