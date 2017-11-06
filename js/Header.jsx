// @flow
import React from 'react';
import { css } from 'glamor';

const headerStyle = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  height: 216,
  '@media(min-width: 600px)': {
    maxWidth: 320,
    justifyContent: 'flex-start',
  },
  '@media(min-width: 1050px)': {
    justifyContent: 'center',
  },
});

const imgStyle = css({
  width: 75,
  height: 75,
  borderRadius: 9999,
  marginRight: 24,
});

const nameStyle = css({
  fontSize: '36px',
  fontWeight: '400',
  color: '#95989a',
  lineHeight: '1.15',
});

const Header = () => (
  <header className={headerStyle}>
    <img className={imgStyle} src="/public/profile.jpg" alt="" />
    <h1 className={nameStyle}>
      STANLEY<br /> E.M. DAY
    </h1>
  </header>
);

export default Header;
