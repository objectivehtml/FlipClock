export function parseDuration(duration: string | null | undefined): number {
    // const match = duration?.trim().split(',')[0]?.match(/^([+-]?(?:\d+\.?\d*|\.\d+))\s*(ms|s|m|h)$/i);
    const match = duration?.trim().split(',')[0]?.match(/^([+-]?)(\d+(?:\.\d+)?|\.\d+)\s*(ms|s|m|h)$/i);
    
    if (!match) {
        return 0;
    }

    const [,, val, unit] = match;

    return parseFloat(val!) * {
        ms: 1,
        s: 1000,
        m: 60000,
        h: 3600000
    }[unit!.toLowerCase()]!;
}

export function getAnimationRate(el: Element) {
    return parseDuration(
        getComputedStyle(el).getPropertyValue('--animation-duration')
    );
}