function add<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  duration: Duration,
  options?: AddOptions<ResultDate> | undefined,
): ResultDate;