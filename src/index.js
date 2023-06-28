import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';
import Page from 'components/Page';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <Page />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
