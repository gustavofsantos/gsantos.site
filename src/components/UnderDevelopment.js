import React from 'react';
import { masterForeground, masterAccent } from '../theme';


const styles = {
  div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 'auto',
    width: '50%'
  },
  h1: {
    color: masterForeground,
    '&:hover': {
      color: masterAccent
    }
  }
}

export default props => (
  <div style={styles.div}>
    <h1 style={styles.h1}>
      This site is under development
    </h1>
  </div>
);