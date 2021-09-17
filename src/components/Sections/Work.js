/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import Case1 from '../../img/case1.png';
import Case2 from '../../img/case2.png';
import Case3 from '../../img/case3.png';
import Footer from '../Footer';
// import ListItem from './ListItem';

const IPad = () => {
  const mobile = useMediaQuery('(max-width:530px)');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(230, 232, 250, 0.5)',
        alignItems: 'center',
        width: '100%',
        padding: 0,
      }}
    >
      <div
        style={{
          marginTop: 210,
          display: 'flex',
          flexDirection: 'column',
          width: mobile ? '86%' : '90%',
          padding: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
      >
        <p
          style={{
            marginBottom: 10,
            fontFamily: 'Timeless',
            fontWeight: 400,
            fontSize: 16,
            height: 44,
            padding: 0,
          }}
        >
          Welcome
        </p>
        <p
          style={{
            fontFamily: 'Canela',
            fontWeight: 250,
            fontSize: mobile ? 39 : 50,
            marginTop: 0,
            marginBottom: 90,
            padding: 0,
            width: '100%',
            lineHeight: '120%',
          }}
        >
          I’m <span style={{ color: '#882D17' }}>Ana</span>, a third culture kid at heart who designs to <span style={{ color: '#882D17' }}>facilitate connection</span>.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginBottom: mobile ? 90 : 120,
            width: '100%',
            padding: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: `${90 * 0.73}vw`,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(193, 206, 254, 0.65)',
            }}
          >
            <img src={Case1} style={{ width: '90%', height: 'auto' }} alt="case1" />
          </div>
          <div
            style={{
              width: 320,
              height: 183,
            }}
          >
            <p
              style={{
                fontFamily: 'Canela',
                fontWeight: 250,
                fontSize: 40,
                padding: 0,
                marginTop: 30,
              }}
            >
              ReCanh
            </p>
            <p
              style={{
                fontFamily: 'Timeless',
                fontWeight: 400,
                fontSize: 16,
                padding: 0,
                marginTop: 10,
                marginBottom: 15,
                color: 'rgba(64, 46, 46, 1)',
                lineHeight: '150%',
                width: 330,
              }}
            >
              Recanh is a conversation mediator that talks participants through conversations about voting.
            </p>
            <Link
              style={{
                fontFamily: 'Timeless',
                fontWeight: 700,
                fontSize: 12,
                color: 'rgba(136, 45, 23, 0.86)',
              }}
              to="/case_1"
            >READ CASE STUDY &gt;&gt;
            </Link>
          </div>
        </div>
        {/** ************************** */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginBottom: mobile ? 90 : 120,
            width: '100%',
            padding: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: `${90 * 0.73}vw`,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(182, 178, 231, 0.53)',
            }}
          >
            <img src={Case2} style={{ width: '90%', height: 'auto' }} alt="case1" />
          </div>
          <div
            style={{
              width: 320,
              height: 183,
            }}
          >
            <p
              style={{
                fontFamily: 'Canela',
                fontWeight: 250,
                fontSize: 40,
                padding: 0,
                marginTop: 30,
              }}
            >
              Symbio
            </p>
            <p
              style={{
                fontFamily: 'Timeless',
                fontWeight: 400,
                fontSize: 16,
                padding: 0,
                marginTop: 10,
                marginBottom: 15,
                color: 'rgba(64, 46, 46, 1)',
                lineHeight: '150%',
                width: 330,
              }}
            >
              Symbio facilitates mutual aid by connecting Dartmouth students to community aid and resources.
            </p>
            <Link
              style={{
                fontFamily: 'Timeless',
                fontWeight: 700,
                fontSize: 12,
                color: 'rgba(136, 45, 23, 0.86)',
              }}
              to="/case_2"
            >READ CASE STUDY &gt;&gt;
            </Link>
          </div>
        </div>
        {/** ************************** */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginBottom: mobile ? 90 : 120,
            width: '100%',
            padding: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: `${90 * 0.73}vw`,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(193, 206, 254, 0.65)',
            }}
          >
            <img src={Case3} style={{ width: '90%', height: '85%' }} alt="case1" />
          </div>
          <div
            style={{
              width: 320,
              height: 183,
            }}
          >
            <p
              style={{
                fontFamily: 'Canela',
                fontWeight: 250,
                fontSize: 40,
                padding: 0,
                marginTop: 30,
              }}
            >
              HoliHealth
            </p>
            <p
              style={{
                fontFamily: 'Timeless',
                fontWeight: 400,
                fontSize: 16,
                padding: 0,
                marginTop: 10,
                marginBottom: 15,
                color: 'rgba(64, 46, 46, 1)',
                lineHeight: '150%',
                width: 330,
              }}
            >
              Coming Soon.... <span role="img" alt="aria-label">👀</span>
            </p>
            <Link
              style={{
                fontFamily: 'Timeless',
                fontWeight: 700,
                fontSize: 12,
                color: 'rgba(136, 45, 23, 0.86)',
              }}
              to="/case_3"
            >READ CASE STUDY &gt;&gt;
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const Work = (props) => {
  const iPad = useMediaQuery('(max-width:1180px)');

  if (iPad) {
    return <IPad />;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(230, 232, 250, 0.5)',
        alignItems: 'center',
        margin: 28,
        // width: '100%',
        padding: 0,
      }}
    >
      <div
        style={{
          marginTop: 305,
          display: 'flex',
          flexDirection: 'column',
          width: `${(1240 / 1440) * 100}vw`,
          padding: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
      >
        <p
          style={{
            marginBottom: 0,
            fontFamily: 'Timeless',
            fontWeight: 400,
            fontSize: 16,
            height: 44,
            padding: 0,
          }}
        >
          Welcome
        </p>
        <p
          style={{
            fontFamily: 'Canela',
            fontWeight: 250,
            fontSize: 50,
            marginTop: 0,
            marginBottom: 130,
            padding: 0,
            height: 130,
            lineHeight: '120%',
          }}
        >
          I’m <span style={{ color: '#882D17' }}>Ana</span>, a third culture kid at heart who <br />designs to <span style={{ color: '#882D17' }}>facilitate connection</span>.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 190,
            height: 540,
            width: '100%',
            padding: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              minWidth: 776,
              height: 540,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(193, 206, 254, 0.65)',
            }}
          >
            <img src={Case1} style={{ width: 666, height: 464 }} alt="case1" />
          </div>
          <div
            style={{
              width: 320,
              height: 183,
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
              }}
            >
              ReCanh
            </p>
            <p
              style={{
                fontFamily: 'Timeless',
                fontWeight: 400,
                fontSize: 16,
                padding: 0,
                marginLeft: 40,
                marginTop: 10,
                marginBottom: 15,
                color: 'rgba(64, 46, 46, 1)',
                lineHeight: '150%',
                width: 260,
              }}
            >
              Recanh is a conversation mediator that talks participants through conversations about voting.
            </p>
            <Link
              style={{
                fontFamily: 'Timeless',
                fontWeight: 700,
                fontSize: 12,
                marginLeft: 40,
                color: 'rgba(136, 45, 23, 0.86)',
              }}
              to="/case_1"
            >READ CASE STUDY &gt;&gt;
            </Link>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'flex-start',
            marginBottom: 190,
            height: 540,
            width: '100%',
            padding: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              minWidth: 776,
              height: 540,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(182,178,231, 0.53)',
            }}
          >
            <img src={Case2} style={{ width: 666, height: 464 }} alt="case2" />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              width: 320,
              height: 183,
            }}
          >
            <p
              style={{
                fontFamily: 'Canela',
                fontWeight: 250,
                fontSize: 40,
                padding: 0,
                marginRight: 40,
                marginTop: 10,
                textAlign: 'right',
              }}
            >
              Symbio
            </p>
            <p
              style={{
                fontFamily: 'Timeless',
                fontWeight: 400,
                fontSize: 16,
                padding: 0,
                marginRight: 40,
                textAlign: 'right',
                marginTop: 10,
                marginBottom: 15,
                width: 260,
                color: 'rgba(64, 46, 46, 1)',
                lineHeight: '150%',
              }}
            >
              Symbio facilitates mutual aid by connecting Dartmouth students to community aid and resources.
            </p>
            <Link
              style={{
                fontFamily: 'Timeless',
                fontWeight: 700,
                fontSize: 12,
                marginRight: 40,
                textAlign: 'right',
                color: 'rgba(136, 45, 23, 0.86)',
              }}
              to="/case_2"
            >READ CASE STUDY &gt;&gt;
            </Link>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 190,
            height: 540,
            width: '100%',
            padding: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              minWidth: 776,
              height: 540,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(193, 206, 254, 0.65)',
            }}
          >
            <img src={Case3} style={{ width: 666, height: 464 }} alt="case1" />
          </div>
          <div
            style={{
              width: 320,
              height: 183,
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
                color: 'rgba(64, 46, 46, 1)',
                lineHeight: '150%',
              }}
            >
              HoliHealth
            </p>
            <p
              style={{
                fontFamily: 'Timeless',
                fontWeight: 400,
                fontSize: 16,
                padding: 0,
                marginLeft: 40,
                marginTop: 10,
                marginBottom: 15,
                width: 260,
              }}
            >
              Coming Soon.... <span role="img" alt="aria-label">👀</span>
            </p>
            <Link
              style={{
                fontFamily: 'Timeless',
                fontWeight: 700,
                fontSize: 12,
                marginLeft: 40,
                color: 'rgba(136, 45, 23, 0.86)',
              }}
              to="/case_3"
            >READ CASE STUDY &gt;&gt;
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Work;
