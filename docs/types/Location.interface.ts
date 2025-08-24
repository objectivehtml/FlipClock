interface Location {
  /** Line in the parsed source (1-based). */
  readonly line: number;
  /** Column in the parsed source (1-based). */
  readonly column: number;
  /** Offset in the parsed source (0-based). */
  readonly offset: number;
}