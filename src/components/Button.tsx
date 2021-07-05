import styled from 'styled-components';
import {
  variant,
  compose,
  width,
  space,
  color,
  WidthProps,
  SpaceProps,
  ColorProps,
} from 'styled-system';

// Defines ButtonProps and the variant prop for Typescript.
export type ButtonProps = WidthProps &
  SpaceProps &
  ColorProps & {
    variant: 'primary' | 'secondary';
  };

const Button = styled.button<ButtonProps>`
  // Define default styles for our button.
  // These styles will be used by both variants and replaced by variant value on conflict.
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 18px 50px;
  cursor: pointer;
  transition: all 0.15s ease-in-out 0s;
  color: white;

  // Add Button animation on hover.
  &:hover {
    transform: scale(1.04);
  }

  // Use compose to combine all our styles into one for performance.
  ${compose(
    variant({
      // Specify our list of variants.
      variants: {
        // Defines primary variant styles.
        primary: {
          backgroundColor: 'black',
        },
        // Defines secondary variant styles.
        secondary: {
          backgroundColor: 'blueviolet',
        },
      },
      // Use width, space and colors styles.
    }),
    width,
    space,
    color,
  )}
`;

export default Button;
