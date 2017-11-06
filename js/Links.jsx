// @flow
import React from 'react';
import { css } from 'glamor';

const style = css({
  width: '100%',
  maxWidth: 500,
  margin: '0',
  color: '#86888a',
  borderCollapse: 'collapse',
  fontSize: '14px',
  lineHeight: '24px',
  marginBottom: 48,
  '& td': {
    padding: 0,
  },
  '& a': {
    color: '#4e7be2',
    textDecoration: 'none',
  },
  '& tr td:first-of-type': {
    width: '35%',
    fontWeight: '600',
  },
  '@media(min-width: 1050px)': {
    marginBottom: 72,
  },
});

const Links = () => (
  <table className={style}>
    <tr>
      <td>Portfolio:</td>
      <td>
        <a
          href="http://standayweb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          standayweb.com
        </a>
      </td>
    </tr>
    <tr>
      <td>Github:</td>
      <td>
        <a
          href="https://github.com/standayweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/standayweb
        </a>
      </td>
    </tr>
    <tr>
      <td>LinkedIn:</td>
      <td>
        <a
          href="https://www.linkedin.com/in/standayweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/standayweb
        </a>
      </td>
    </tr>
    <tr>
      <td>Treehouse:</td>
      <td>
        <a
          href="https://teamtreehouse.com/standayweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          teamtreehouse.com/standayweb
        </a>
      </td>
    </tr>
  </table>
);

export default Links;
