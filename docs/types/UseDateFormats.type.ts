type UseDateFormats = UseDefinitionMap<DateFlagFormatFunction> & {
    format: (date: Date, format: string) => string;
};