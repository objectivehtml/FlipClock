function sub<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  duration: Duration,
  options?: SubOptions<ResultDate>,
): ResultDate;