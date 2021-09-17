/* eslint-disable max-len */
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { fallDown as Menu } from 'react-burger-menu';
import { useMediaQuery } from '@material-ui/core';

// Hamburger borrowed from https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar

const Logo = ({ style }) => {
  return (
    <svg style={style || {}} width="113" height="57" viewBox="0 0 113 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55.7789 52.9525C50.5174 42.6892 66.2505 19.2305 75.4414 8.0492C52.8904 31.1304 6.63079 71.7532 2 49.5953C3.1577 27.1016 45.896 32.1096 67.1204 37.4252C72.7037 38.6242 83.5593 41.31 82.3152 42.4611C76.1649 43.5802 65.0221 47.2452 69.6529 52.9525C75.4414 60.0867 91.7215 45.8184 91.7215 39.9432C92.3244 38.1247 91.2873 33.8162 82.3152 31.1304C71.1 27.7731 64.9533 27.3534 66.3969 21.4782C67.8404 15.603 93.5304 -1.60292 104.384 1.33468C113.066 2.34181 112.584 7.34971 111.258 9.72777C108.725 13.085 102.575 19.4638 98.2335 18.1209M55.7789 52.9525C56.1784 53.7318 56.6988 54.4349 57.3524 55.0508L55.7789 52.9525Z" stroke="#882d17" strokeOpacity="1.0" strokeWidth="2" />
    </svg>
  );
};

function Header({ change, lightMode }) {
  const iPad = useMediaQuery('(max-width:1180px)');
  if (iPad) {
    return (
      <div
        style={{
          height: 110,
          width: '100vw',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 6,
          padding: 0,
          position: 'absolute',
          top: 0,
        }}
      >
        <Logo style={{ marginLeft: '5vw' }} />
        <Menu styles={{
          bmBurgerButton: {
            position: 'fixed',
            height: '30px',
            right: '5vw',
            top: '72px',
            width: '52px',
          },
          bmBurgerBarsHover: {
            background: '#a90000',
          },
          bmCrossButton: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            right: '5vw',
            top: '72px',
            height: 65,
            width: 65,
          },
          bmCross: {
            position: 'fixed',
            background: 'black',
            height: 45,
            width: 2,
            marginRight: 25,
          },
          bmMenu: {
            background: 'white',
            // padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
          },
          bmMorphShape: {
            fill: '#373a47',
          },
          bmItemList: {
            color: '#b8b7ad',
            // padding: '0.8em',
            height: '100%',
            width: '100%',
          },
          bmItem: {
            // display: 'inline-block',
            height: '100%',
            width: '100%',
          },
          bmOverlay: {
            background: 'white',
          },
          bmBurgerBars: {
            background: '#373a47',
            height: 1,
          },
          bmMenuWrap: {
            position: 'fixed',
            height: '100%',
            width: '100%',
            left: 0,
            padding: 0,
            margin: 0,
            top: 0,
          },
        }}
        >
          <div
            style={{
              minWidht: '100%',
              height: '100%',
              background: 'rgba(193, 206, 254, 0.65)',
              padding: 0,
              margin: 0,
            }}
          >
            <div
              style={{
                paddingTop: 53,
                paddingLeft: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                zIndex: 6,
              }}
            >
              <Logo style={{ marginBottom: 200 }} />
              <div
                style={{
                  display: 'flex',
                  alignContent: 'center',
                  flexDirection: 'column',
                  height: 100,
                  justifyContent: 'space-between',
                }}
              >
                <Link exact to="/" style={{ fontSize: 31 }} activeClassName="activeL" className="header-link">
                  Work
                </Link>
                <Link exact to="/about" style={{ fontSize: 31 }} activeClassName="activeL" className="header-link">
                  About
                </Link>
              </div>
            </div>
          </div>
        </Menu>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          zIndex: 6,
          width: '100%',
        }}
      >
        <div
          style={{
            height: 75,
            width: `${(1240 / 1440) * 100}%`,
            marginTop: 95,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            zIndex: 6,
            padding: 0,
          }}
        >
          <Logo />
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
              flexDirection: 'row',
              width: 150,
              justifyContent: 'space-evenly',
            }}
          >
            <Link exact to="/" activeClassName="activeL" className="header-link">
              Work
            </Link>
            <Link exact to="/about" activeClassName="activeL" className="header-link">
              About
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
