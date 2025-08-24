interface CSSProperties extends Properties {
    [key: string]: CSSProperties | string | number | undefined | null;
}