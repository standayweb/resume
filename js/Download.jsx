// @flow
import React from 'react';
import { css } from 'glamor';

const buttonStyle = css({
  background: 'transparent',
  borderRadius: 0,
  border: 'none',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.2)',
  color: 'rgba(0, 0, 0, 0.6)',
  padding: 12,
  lineHeight: '24px',
  margin: '0 24px 48px 24px',
  overflow: 'hidden',
  letterSpacing: '3.25px',
  cursor: 'pointer',
  width: 'calc(100% - 48px)',
  transition: 'all 0.2s ease-out',
  ':hover': {
    color: '#fff',
    background: '#222222',
    boxShadow: '0 0 0 1px #222222',
  },
  '@media(min-width: 600px)': {
    margin: '0 0 48px 0',
    maxWidth: 300,
  },
  '@media(min-width: 1050px)': {
    margin: '0 24px 48px 24px',
  },
});

const Download = () => (
  <form
    method="get"
    action="/public/stanley-day-resume.pdf"
    target="_blank"
    css={{
      width: '100%',
    }}
  >
    <button className={buttonStyle}>
      DOWNLOAD PDF
      <div />
    </button>
  </form>
);

export default Download;
