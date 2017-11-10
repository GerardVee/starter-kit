// inspired by https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
import { css } from 'styled-components';

const sizes =
{
    small: 1,
    medium: 768,
    large: 1280
};

export const media = Object.keys(sizes).reduce((accumulator, label) =>
{
    const size = sizes[label];
    accumulator[label] = (...args) => css`
    @media (min-width: ${ size }px)
    {
      ${ css(...args) }
    }
    `;
    return accumulator;
}, { });
