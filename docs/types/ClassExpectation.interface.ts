interface ClassExpectation {
  readonly type: "class";
  readonly parts: ClassParts;
  readonly inverted: boolean;
  readonly ignoreCase: boolean;
}