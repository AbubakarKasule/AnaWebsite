import React, { Component } from 'react';
// import { NavLink as Link } from 'react-router-dom';
import Footer from '../Footer';
// import ListItem from './ListItem';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(230, 232, 250, 0.5)',
          alignItems: 'center',
          margin: 28,
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
          <Footer />
        </div>
      </div>
    );
  }
}

export default Page;
