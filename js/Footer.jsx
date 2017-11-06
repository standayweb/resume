// @flow
import React from 'react';
import { css } from 'glamor';

const footerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1260px',
  fontSize: 14,
  color: 'rgba(255, 255, 255, 0.5)',
  padding: '0 24px',
  marginBottom: 12,
  '@media(min-width: 600px)': {
    flexDirection: 'row',
  },
});

const Footer = () => (
  <footer css={footerStyle}>
    <p>Built with Preact, Webpack, and Glamor.</p>
    <p>
      Check out the code on{' '}
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        css={{ color: 'inherit' }}
      >
        github
      </a>!
    </p>
  </footer>
);

export default Footer;
