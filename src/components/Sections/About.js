/* eslint-disable max-len */
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
// import { NavLink as Link } from 'react-router-dom';
import Resume from '../../img/Resume.pdf';
import Footer from '../Footer';
// import ListItem from './ListItem';

function About() {
  const iPad = useMediaQuery('(max-width:1180px)');
  const mobile = useMediaQuery('(max-width:530px)');

  const LinkBox = ({
    title, title1, link1, title2, link2, title3, link3, marginR, marginL, width, height,
  }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: width || 150,
          width: width || 165,
          marginRight: marginR, // 85,
          marginLeft: marginL,
        }}
      >
        <p
          style={{
            fontFamily: 'Timeless',
            fontWeight: 700,
            fontSize: 12,
            color: 'rgba(136, 45, 23, 0.86)',
            lineHeight: '117%',
            marginBottom: 25,
            padding: 0,
          }}
        >
          {title}
        </p>
        <a
          href={link1}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Timeless',
            fontWeight: 400,
            fontSize: 16,
            color: 'rgba(136, 45, 23, 0.86)',
            lineHeight: '150%',
            padding: 0,
            textDecoration: 'none',
          }}
        >
          <span>{title1}</span>&gt;&gt;
        </a>
        <a
          href={link2}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Timeless',
            fontWeight: 400,
            fontSize: 16,
            color: 'rgba(136, 45, 23, 0.86)',
            lineHeight: '150%',
            padding: 0,
            textDecoration: 'none',
          }}
        >
          <span>{title2}</span>&gt;&gt;
        </a>
        <a
          href={link3}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Timeless',
            fontWeight: 400,
            fontSize: 16,
            color: 'rgba(136, 45, 23, 0.86)',
            lineHeight: '150%',
            padding: 0,
            textDecoration: 'none',
          }}
        >
          <span>{title3}</span>&gt;&gt;
        </a>
      </div>
    );
  };

  const TopSection = () => {
    return (
      <div
        style={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 0,
          marginBottom: 75,
        // backgroundColor: 'rgba(8,200, 5, 0.4)',
        }}
      >
        <div
          style={{
            height: `${((1240 / 1440) * 100) * 0.5}vw`,
            width: '48%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 0,
            backgroundColor: 'rgba(193, 206, 254, 0.65)',
          }}
        />
        <div
          style={{
            height: '100%',
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: 0,
            margin: 0,
          }}
        >
          <p
            style={{
              fontFamily: 'Canela',
              fontWeight: 400,
              fontSize: 49,
              marginLeft: 40,
              marginTop: 10,
              marginBottom: 20,
              // padding: '10px 40px 20px 40px',
            }}
          >
            Ana Sumbo
          </p>
          <p
            style={{
              fontFamily: 'Timeless',
              fontWeight: 'normal',
              fontSize: 16,
              fontStyle: 'normal',
              padding: 0,
              marginLeft: 40,
              marginTop: 10,
              color: 'rgba(64, 46, 46, 1)',
              lineHeight: '150%',
              marginBottom: 15,
              width: '85%',
            }}
          >
            Hello and welcome! I’m Ana Sumbo, a designer for the Digital Applied Learning and Innovation Lab (DALI) and Design Corps at Dartmouth College. As an end-to-end designer with a passion for all things unconventional, I am guided by curiosity and seek to create connections between human beings and the digital world. In my design process, I prioritize using an interdisciplinary design approach to develop robust, intersectional solutions to complex problems.
            <br /><br />
            Having studied geography and human-centered design, I am interested in how individuals relate to their digital environments and the sense of connectedness that is fostered in virtual micro-communities.  how to understand this dynamic relationship between people and their surroundings, I am empowered to create design solutions grounded in users and their relationships with their communities.
            <br /><br />
            When I’m not designing, I love keeping my serotonin levels high by immersing myself in new experiences. The traveler within me is constantly looking for new places to visit, new food to try, and new music to choreograph for and obsess over.
            <br /><br />
            I am currently looking for full-time design opportunities starting fall of 2022, so if you want to discuss my work, reach out to me!

          </p>
        </div>
      </div>
    );
  };

  const MidSection = () => {
    return (
      <div
        style={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 0,
          marginBottom: 190,
        // backgroundColor: 'rgba(8,200, 5, 0.4)',
        }}
      >
        <div
          style={{
            width: '48%',
            padding: 0,
            backgroundColor: 'rgba(193, 206, 254, 0)',
          }}
        />
        <div
          style={{
            height: '100%',
            width: '45%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginLeft: 40,
              height: 200,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: 80,
              }}
            >
              <p
                style={{
                  fontFamily: 'Timeless',
                  fontWeight: 700,
                  fontSize: 12,
                  color: 'rgba(136, 45, 23, 0.86)',
                }}
              >
                Contact
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:sumbo65@gmail.com"
                style={{
                  fontFamily: 'Timeless',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#402E2E',
                  textDecoration: 'none',
                }}
              >
                sumbo65@gmail.com
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: 100,
              }}
            >
              <p
                style={{
                  fontFamily: 'Timeless',
                  fontWeight: 700,
                  fontSize: 12,
                  color: 'rgba(136, 45, 23, 0.86)',
                }}
              >
                Links
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/anasumbo/"
                style={{
                  fontFamily: 'Timeless',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#22201C',
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
                  fontFamily: 'Timeless',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#22201C',
                  textDecoration: 'none',
                }}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BottomSection = () => {
    return (
      <div
        style={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 0,
          marginBottom: 315,
        // backgroundColor: 'rgba(8,200, 5, 0.4)',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '93%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '52%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <p
              style={{
                fontFamily: 'Canela',
                fontWeight: 250,
                fontSize: 31,
                color: '#22201C',
                width: 195,
                padding: 0,
                marginTop: 0,
              }}
            >
              Recommended
              by me!
            </p>
            <LinkBox
              title="Music"
              title1="Korobela"
              link1="https://open.spotify.com/playlist/7JIP2s3OKfcckXoyfAvHYR?si=8e02a9e026e24556"
              title2="Trabalho (Forte)"
              link2="https://open.spotify.com/playlist/50GtS7OGe7V6BdkEkZWBMM?si=6198867996f74b19"
              title3="Purple Playlist"
              link3="https://open.spotify.com/playlist/4j6YtsTij3gwruy7JWjHaz?si=e58c43d5a6f34a02"
              marginR={85}
              marginL={0}
            />
          </div>
          <div
            style={{
              display: 'flex',
              width: '48%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
          >
            <LinkBox
              title="Books"
              title1="all about love"
              link1="https://www.mahoganybooks.com/9780060959470"
              title2="No Sweetness Here"
              link2="https://1lib.us/book/6110343/f5ede2"
              title3="A Man of the People"
              link3="https://1lib.us/book/4650852/b3fa5d"
              marginR={125}
              marginL={38}
            />
            <LinkBox
              title="Podcasts"
              title1="Balanced Black Girl"
              link1="https://open.spotify.com/show/46muBfvOgp2U44ycqZJPPN?si=TY-QVYXnSLCRgqAMCQ3OwQ&dl_branch=1"
              title2="TED Talks Daily)"
              link2="https://open.spotify.com/show/1VXcH8QHkjRcTCEd88U3ti?si=WzR1paKqSLi-rMkpwCU6Gg&dl_branch=1"
              title3="Black Girl Songbook"
              link3="https://open.spotify.com/show/20Ifo2kqrmLweDY87KC0dr?si=Vuh4sj57RmOwkFGyBsB25g&dl_branch=1"
              marginR={0}
              marginL={0}
            />
          </div>
        </div>
      </div>
    );
  };

  if (iPad) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(230, 232, 250, 0.5)',
          alignItems: 'center',
          // width: '100%',
          padding: 0,
        }}
      >
        <div
          style={{
            marginTop: 175,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '90%',
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
        >
          <p
            style={{
              fontFamily: 'Canela',
              fontWeight: 400,
              fontSize: 39,
              marginBottom: 66,
            }}
          >
            Ana Sumbo
          </p>
          <div
            style={{
              height: mobile ? '117vw' : '70vw',
              width: mobile ? '100%' : '52%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 0,
              backgroundColor: 'rgba(193, 206, 254, 0.65)',
              marginBottom: mobile ? 20 : 96,
            }}
          />
          <p
            style={{
              fontFamily: 'Timeless',
              fontWeight: 'normal',
              fontSize: 16,
              fontStyle: 'normal',
              padding: 0,
              color: 'rgba(64, 46, 46, 1)',
              lineHeight: '150%',
              marginBottom: 20,
              width: '100%',
            }}
          >
            Hello and welcome! I’m Ana Sumbo, a designer for the Digital Applied Learning and Innovation Lab (DALI) and Design Corps at Dartmouth College. As an end-to-end designer with a passion for all things unconventional, I am guided by curiosity and seek to create connections between human beings and the digital world. In my design process, I prioritize using an interdisciplinary design approach to develop robust, intersectional solutions to complex problems.
            <br /><br />
            Having studied geography and human-centered design, I am interested in how individuals relate to their digital environments and the sense of connectedness that is fostered in virtual micro-communities.  how to understand this dynamic relationship between people and their surroundings, I am empowered to create design solutions grounded in users and their relationships with their communities.
            <br /><br />
            When I’m not designing, I love keeping my serotonin levels high by immersing myself in new experiences. The traveler within me is constantly looking for new places to visit, new food to try, and new music to choreograph for and obsess over.
            <br /><br />
            I am currently looking for full-time design opportunities starting fall of 2022, so if you want to discuss my work, reach out to me!

          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              height: 300,
              width: '100%',
              marginBottom: 60,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'flex-start',
                height: 120,
              }}
            >
              <p
                style={{
                  fontFamily: 'Timeless',
                  fontWeight: mobile ? 700 : 400,
                  fontSize: mobile ? 12 : 20,
                  color: 'rgba(136, 45, 23, 0.86)',
                }}
              >
                Contact
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:sumbo65@gmail.com"
                style={{
                  fontFamily: 'Timeless',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#402E2E',
                  textDecoration: 'none',
                }}
              >
                sumbo65@gmail.com
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'flex-start',
                height: 185,
              }}
            >
              <p
                style={{
                  fontFamily: 'Timeless',
                  fontWeight: mobile ? 700 : 400,
                  fontSize: mobile ? 12 : 20,
                  color: 'rgba(136, 45, 23, 0.86)',
                }}
              >
                Links
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/anasumbo/"
                style={{
                  fontFamily: 'Timeless',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#22201C',
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
                  fontFamily: 'Timeless',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#22201C',
                  textDecoration: 'none',
                }}
              >
                Resume
              </a>
            </div>
          </div>
          <p
            style={{
              fontFamily: 'Canela',
              fontWeight: 400,
              fontSize: 31,
              color: '#22201C',
              // width: 195,
              padding: 0,
              marginBottom: mobile ? 30 : 75,
              lineHeight: '119%',
              width: '100%',
              textAlign: 'left',
            }}
          >
            Recommended<br />
            by me!
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: mobile ? 'column' : 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginBottom: 110,
              height: mobile ? 660 : 'auto',
            }}
          >
            <LinkBox
              title="Music"
              title1="Korobela"
              link1="https://open.spotify.com/playlist/7JIP2s3OKfcckXoyfAvHYR?si=8e02a9e026e24556"
              title2="Trabalho (Forte)"
              link2="https://open.spotify.com/playlist/50GtS7OGe7V6BdkEkZWBMM?si=6198867996f74b19"
              title3="Purple Playlist"
              link3="https://open.spotify.com/playlist/4j6YtsTij3gwruy7JWjHaz?si=e58c43d5a6f34a02"
              marginR={0}
              marginL={0}
              width={180}
              height={270}
            />
            <LinkBox
              title="Books"
              title1="all about love"
              link1="https://www.mahoganybooks.com/9780060959470"
              title2="No Sweetness Here"
              link2="https://1lib.us/book/6110343/f5ede2"
              title3="A Man of the People"
              link3="https://1lib.us/book/4650852/b3fa5d"
              marginR={0}
              marginL={0}
              width={180}
              height={270}
            />
            <LinkBox
              title="Podcasts"
              title1="Balanced Black Girl"
              link1="https://open.spotify.com/show/46muBfvOgp2U44ycqZJPPN?si=TY-QVYXnSLCRgqAMCQ3OwQ&dl_branch=1"
              title2="TED Talks Daily)"
              link2="https://open.spotify.com/show/1VXcH8QHkjRcTCEd88U3ti?si=WzR1paKqSLi-rMkpwCU6Gg&dl_branch=1"
              title3="Black Girl Songbook"
              link3="https://open.spotify.com/show/20Ifo2kqrmLweDY87KC0dr?si=Vuh4sj57RmOwkFGyBsB25g&dl_branch=1"
              marginR={0}
              marginL={0}
              width={180}
              height={270}
            />
          </div>
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
        <TopSection />
        <MidSection />
        <BottomSection />
        <Footer />
      </div>
    </div>
  );
}

export default About;
