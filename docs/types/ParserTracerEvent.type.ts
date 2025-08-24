type ParserTracerEvent
  = {
      readonly type: "rule.enter";
      readonly rule: string;
      readonly location: LocationRange
    }
  | {
      readonly type: "rule.fail";
      readonly rule: string;
      readonly location: LocationRange
    }
  | {
      readonly type: "rule.match";
      readonly rule: string;
      readonly location: LocationRange
      /** Return value from the rule. */
      readonly result: unknown;
    };