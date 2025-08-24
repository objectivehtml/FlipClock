interface LiteralExpectation {
  readonly type: "literal";
  readonly text: string;
  readonly ignoreCase: boolean;
}