import React from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { Typography } from 'antd';
// import Work from './Sections/Work';
// import About from './Sections/About';
import WUC from './Sections/WebsiteUnderConstruction';

// Heavilly borrowed from https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0

// const FallBack = (props) => {
//   return (
//     <Typography.Text level={1}>
//       ~Section not Found~  ....sorry :P
//     </Typography.Text>
//   );
// };

function Container({ location, mobile, lightMode }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              {/* <Route exact path="/" render={(props) => (<Work mobile={mobile} lightMode={lightMode} />)} />
              <Route exact path="/about" component={(props) => (<About mobile={mobile} lightMode={lightMode} />)} /> */}
              <Route exact path="/" render={(props) => (<WUC />)} />
              <Route component={WUC} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    // omitted
    
      div.transition-group {
           position: relative;
           padding: 0;
           margin: 0;
           width: 100vw;
      }
      section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        padding: 0;
        margin: 0;
      }
`;

export default withRouter(Container);
