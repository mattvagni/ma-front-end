import React from 'react';
import styles from './About.css';

const About = () => (
  <div>
    <h2>About</h2>
    <p className={styles.quote}>
      {'A React + React Router v4 + Redux app with server side rendering, code splitting and HMR.'}
    </p>
  </div>
);

export default About;
