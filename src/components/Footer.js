/* eslint-disable max-len */
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import Resume from '../img/Resume.pdf';

function Footer({ mobile, change, lightMode }) {
  const iPad = useMediaQuery('(max-width:1180px)');

  if (iPad) {
    return (
      <div
        style={{
          height: 55,
          width: '100%',
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          marginBottom: 75,
        }}
      >
        <p
          style={{
            fontFamily: 'Canela',
            fontWeight: 250,
            fontSize: 20,
            marginTop: 0,
            padding: 0,
          }}
        >
          anasumbo.com
        </p>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'row',
            width: 175,
            justifyContent: 'space-between',
            marginBottom: 40,
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anasumbo/"
            style={{
              fontFamily: 'Canela',
              fontWeight: 250,
              fontSize: 20,
              marginTop: 0,
              padding: 0,
              color: 'black',
              marginRight: 10,
              textDecoration: 'none',
            }}
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Resume}
            style={{
              fontFamily: 'Canela',
              fontWeight: 250,
              fontSize: 20,
              marginTop: 0,
              padding: 0,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Resume
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        height: 55,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0,
        marginBottom: 75,
      }}
    >
      <p
        style={{
          fontFamily: 'Canela',
          fontWeight: 250,
          fontSize: 20,
          marginTop: 0,
          padding: 0,
        }}
      >
        anasumbo.com
      </p>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'row',
          width: 150,
          justifyContent: 'space-evenly',
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/anasumbo/"
          style={{
            fontFamily: 'Canela',
            fontWeight: 250,
            fontSize: 20,
            marginTop: 0,
            padding: 0,
            color: 'black',
            marginRight: 10,
            textDecoration: 'none',
          }}
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={Resume}
          style={{
            fontFamily: 'Canela',
            fontWeight: 250,
            fontSize: 20,
            marginTop: 0,
            padding: 0,
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Footer;
