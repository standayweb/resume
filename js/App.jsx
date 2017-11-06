// @flow
import React from 'react';
import { css } from 'glamor';
import 'glamor/reset';
import Header from './Header';
import Current from './Current';
import Download from './Download';
import Links from './Links';
import Summary from './Summary';
import Skills from './Skills';
import Work from './Work';
import Footer from './Footer';

css.global('html ', { boxSizing: 'border-box' });
css.global('*, *:before, *:after', { boxSizing: 'inherit' });

css.global('body', {
  fontFamily: '"Open Sans", sans-serif',
  lineHeight: '24px',
});

css.global('h1, h2, h3, h4, p', { margin: 0 });

const bgStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(0deg, #035580, #239fde)',
  '@media(min-width: 1050px)': {
    padding: '96px 24px 24px 24px',
  },
});

const boxStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1260px',
  boxShadow: '0 0 72px rgba(0, 0, 0, 0.1)',
  marginBottom: 12,
  '@media(min-width: 1050px)': {
    flexDirection: 'row',
  },
});

const sidebarStyle = css({
  display: 'flex',
  background: 'white',
  flexDirection: 'column',
  padding: '0 24px',
  '@media(min-width: 600px)': {
    padding: '0 48px',
  },
  '@media(min-width: 1050px)': {
    padding: '0 24px',
    width: '31%',
    minWidth: 390,
  },
});

const mainStyle = css({
  display: 'flex',
  flexDirection: 'column',
  background: '#3F4346',
  color: '#9c9fa0',
  padding: '72px 24px 36px 24px',
  '@media(min-width: 600px)': {
    padding: '72px 48px 36px 48px',
  },
  '@media(min-width: 1050px)': {
    width: '69%',
  },
});

const App = () => (
  <div className={bgStyle}>
    <div className={boxStyle}>
      <aside className={sidebarStyle}>
        <Header />
        <Current />
        <Download />
        <Links />
        <Summary />
      </aside>
      <main className={mainStyle}>
        <Skills />
        <Work />
      </main>
    </div>
    <Footer />
  </div>
);

export default App;
