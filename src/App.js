import React, { Component } from 'react';
import UnderDevelopment from './components/UnderDevelopment';
import { masterBackground, masterForeground } from './theme';

const styles = {
  div: {
    background: masterBackground,
    color: masterForeground,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    textRendering: 'optimizeLegibility'
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.div}>
        <UnderDevelopment />
      </div>
    );
  }
}

export default App;
