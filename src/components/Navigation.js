import React from 'react';
import { masterForeground, masterAccent } from '../theme';

function Navigation(props) {
  const styles = {
    container: {
      width: '100%',
      maxHeight: '3em'
    },
    item: {
      color: masterForeground,
      '&hover': {
        color: masterAccent
      }
    }
  }

  return (
    <nav className={styles.container}>
      
    </nav>
  )
}

export default Navigation;