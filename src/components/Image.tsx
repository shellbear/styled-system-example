import styled from 'styled-components';
import { border, BorderProps } from 'styled-system';

// Define Image Props for Typescript.
export type Props = BorderProps;

const Image = styled.img<Props>`
  // Specify default styles for our Image.
  object-fit: contain;
  width: 20em;
  height: auto;
  border-radius: 20px;

  // Since we have a single style here, we don't have to use combine.
  ${border}
`;

export default Image;
