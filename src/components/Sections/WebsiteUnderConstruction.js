/* eslint-disable max-len */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
// import { NavLink as Link } from 'react-router-dom';
import Footer from '../Footer';
// import ListItem from './ListItem';

const Page = () => {
  const iPad = useMediaQuery('(max-width:1180px)');

  if (iPad) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(230, 232, 250, 0.5)',
          alignItems: 'center',
          padding: 0,
        }}
      >
        <div
          style={{
            marginTop: 200,
            display: 'flex',
            flexDirection: 'column',
            width: '86vw',
            alignItems: 'center',
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
        >
          <p
            style={{
              fontFamily: 'Canela',
              fontWeight: 250,
              fontSize: 40,
              padding: 0,
              marginLeft: 40,
              marginTop: 10,
              width: '90%',
              textAlign: 'center',
            }}
          >
            Hi! My website is getting developed (yay!), but you can view my complete prototype of it here:
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FF94W8agkWbd1CpekYOnPCE%2FPersonal-Projects%3Fpage-id%3D728%253A1583%26node-id%3D137%253A18%26viewport%3D243%252C48%252C0.06%26scaling%3Dscale-down-width%26starting-point-node-id%3D137%253A18"
            style={{
              fontFamily: 'Canela',
              fontWeight: 250,
              fontSize: 20,
              marginTop: 0,
              padding: 0,
              color: 'black',
              marginBottom: 40,
              textDecoration: 'none',
            }}
          >
            Link to prototype
          </a>
          <iframe
            style={{
              border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', height: `${(450 / 800) * 86}vw`, marginBottom: 150,
            }}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FF94W8agkWbd1CpekYOnPCE%2FPersonal-Projects%3Fpage-id%3D728%253A1583%26node-id%3D137%253A18%26viewport%3D243%252C48%252C0.06%26scaling%3Dscale-down-width%26starting-point-node-id%3D137%253A18"
            allowFullScreen
          />
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(230, 232, 250, 0.5)',
        alignItems: 'center',
        padding: 0,
      }}
    >
      <div
        style={{
          marginTop: 200,
          display: 'flex',
          flexDirection: 'column',
          width: '86vw',
          alignItems: 'center',
          padding: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
      >
        <p
          style={{
            fontFamily: 'Canela',
            fontWeight: 250,
            fontSize: 40,
            padding: 0,
            marginLeft: 40,
            marginTop: 10,
            width: '90%',
            textAlign: 'center',
          }}
        >
          Hi! My website is getting developed (yay!), but you can view my complete prototype of it here:
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FF94W8agkWbd1CpekYOnPCE%2FPersonal-Projects%3Fpage-id%3D728%253A1583%26node-id%3D137%253A18%26viewport%3D243%252C48%252C0.06%26scaling%3Dscale-down-width%26starting-point-node-id%3D137%253A18"
          style={{
            fontFamily: 'Canela',
            fontWeight: 250,
            fontSize: 20,
            marginTop: 0,
            padding: 0,
            color: 'black',
            marginBottom: 40,
            textDecoration: 'none',
          }}
        >
          Link to prototype
        </a>
        <iframe
          style={{
            border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', height: `${(450 / 800) * 86}vw`, marginBottom: 150,
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FF94W8agkWbd1CpekYOnPCE%2FPersonal-Projects%3Fpage-id%3D728%253A1583%26node-id%3D137%253A18%26viewport%3D243%252C48%252C0.06%26scaling%3Dscale-down-width%26starting-point-node-id%3D137%253A18"
          allowFullScreen
        />
        <Footer />
      </div>
    </div>
  );

  // return (
  //   <div
  //     style={{
  //       display: 'flex',
  //       flexDirection: 'column',
  //       background: 'rgba(230, 232, 250, 0.5)',
  //       alignItems: 'center',
  //       margin: 28,
  //       padding: 0,
  //     }}
  //   >
  //     <div
  //       style={{
  //         marginTop: 200,
  //         display: 'flex',
  //         flexDirection: 'column',
  //         width: `${(1240 / 1440) * 100}vw`,
  //         alignItems: 'center',
  //         padding: 0,
  //         marginLeft: 0,
  //         marginRight: 0,
  //         marginBottom: 0,
  //       }}
  //     >
  //       <p
  //         style={{
  //           fontFamily: 'Canela',
  //           fontWeight: 250,
  //           fontSize: 40,
  //           padding: 0,
  //           marginLeft: 40,
  //           marginTop: 10,
  //           width: '60%',
  //           textAlign: 'center',
  //         }}
  //       >
  //         Hi! My website is getting coded (yay!), but you can view my complete prototype of it here:
  //       </p>
  //       <iframe
  //         style={{
  //           border: '1px solid rgba(0, 0, 0, 0.1)', width: 800, height: 450, marginBottom: 150,
  //         }}
  //         src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FF94W8agkWbd1CpekYOnPCE%2FPersonal-Projects%3Fpage-id%3D728%253A1583%26node-id%3D137%253A18%26viewport%3D243%252C48%252C0.06%26scaling%3Dscale-down-width%26starting-point-node-id%3D137%253A18"
  //         allowFullScreen
  //       />
  //       <Footer />
  //     </div>
  //   </div>
  // );
};

export default Page;
