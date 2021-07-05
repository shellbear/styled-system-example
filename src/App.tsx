import React from 'react';

import Grid from './components/Grid';
import Button from './components/Button';
import Image from './components/Image';

const App = (): JSX.Element => (
  <Grid justifyItems="center" my="5rem">
    <h1>Styled-system example</h1>
    <Grid justifyItems="center" my="4rem">
      <h2>Example buttons</h2>
      {/*
        Use Responsive Styles with the gridTemplateColumns style. This results in the following layout:
          Small - 1 button per line
          Medium - 2 buttons per line
          Large - 3 buttons per line
          Extra Large - 4 buttons per line
      */}
      <Grid
        gridTemplateColumns={[
          '1fr',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gridGap="1rem"
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="primary" bg="plum">
          Plum Color
        </Button>
        <Button variant="primary" bg="thistle">
          Thistle prop
        </Button>
      </Grid>
    </Grid>
    <Grid justifyItems="center" mt="2rem" mb="4rem">
      <h2>Example pictures</h2>
      <h3>Reduce screen size on Desktop to see difference!</h3>
      {/*
        Use Responsive Styles with the gridTemplateColumns style. This results in the following layout:
          Small - 1 images per line
          Medium - 2 images per line
          Large - 2 images per line
          Extra Large - 3 images per line
      */}
      <Grid
        gridTemplateColumns={[
          '1fr',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]}
        gridGap="1rem"
      >
        {[...Array(20)].map((_, index) => (
          <Image
            alt="img"
            key={index}
            src="https://source.unsplash.com/user/erondu"
            borderWidth="5px"
            borderStyle="solid"
            borderRadius="10px"
            // We specify different border colors that depends on Screen size.
            borderColor={['thistle', 'gainsboro', 'plum', 'black']}
          />
        ))}
      </Grid>
    </Grid>
    <Grid>
      <a href="https://github.com/shellbear/styled-system-example">
        github.com/shellbear/styled-system-example
      </a>
    </Grid>
  </Grid>
);

export default App;
