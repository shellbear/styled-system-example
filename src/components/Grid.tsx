import styled from 'styled-components';
import {
  compose,
  grid,
  space,
  flexbox,
  GridProps,
  SpaceProps,
  FlexboxProps,
} from 'styled-system';

// Define the Grid Props for Typescript.
export type Props = GridProps & SpaceProps & FlexboxProps;

const Grid = styled.div<Props>`
  // Set default styles for our Grid.
  display: grid;

  // Use compose to combine all our styles into one for performance.
  ${compose(grid, space, flexbox)}
`;

export default Grid;
