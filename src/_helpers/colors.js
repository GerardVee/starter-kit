import { darken, lighten, complement, invert, shade, tint } from 'polished';

const baseBlue = '#0074D9';
const baseLime = '#32CD32';

const colors = (color, isComplement) =>
{
    const map = (base) => ({ base, darker: darken(0.2, base), lighter: lighten(0.2, base), inverted: invert(base), shaded: shade(0.4, base), tinted: tint(0.4, base) });
    if (isComplement)
    {
        return map(color);
    }
    else
    {
        return { ...map(color), complement: colors(complement(color), true) };
    }
}

export const blues = colors(baseBlue);
export const limes = colors(baseLime);
