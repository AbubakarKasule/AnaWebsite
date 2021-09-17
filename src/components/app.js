/* eslint-disable max-len */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter as Router } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import useForceUpdate from 'use-force-update';
import Container from './Container';
import Header from './Header';
import '../style.scss';

let lightMode = false;

function App() {
  const mobile = useMediaQuery('(max-width:1000px)');
  const forceUpdate = useForceUpdate();

  const change = () => {
    lightMode = lightMode !== true;
    forceUpdate();
  };

  return (
    <div>
      <Router>
        <div
          style={{
            background: 'white',
            padding: 0,
            margin: 0,
            width: '100vw',
            height: '100vh',
            overflowX: 'hidden',
          }}
        >
          <Header mobile={mobile} change={change} lightMode={lightMode} />
          <Container mobile={mobile} lightMode={lightMode} />
        </div>
      </Router>
    </div>
  );
}

export default App;
