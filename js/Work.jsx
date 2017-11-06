// @flow
import React from 'react';
import { css } from 'glamor';
import SectionTitle from './SectionTitle';
import List from './List';

const jobTitleAndDateStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14,
  margin: '0 0 12px 0',
});

const Work = () => (
  <section>
    <SectionTitle css={{ marginBottom: 12 }}>WORK</SectionTitle>
    <div css={{ display: 'flex', flexDirection: 'column', maxWidth: 600 }}>
      <div className={jobTitleAndDateStyle}>
        <p css={{ color: '#FFF ' }}>Software Engineer</p>
        <p>(2016-Present)</p>
      </div>
      <p css={{ fontWeight: 'bold', fontSize: 14 }}>
        ESL - The world’s largest e-sports network.
      </p>
      <List css={{ marginBottom: 36 }}>
        <li>
          Working with React, Redux, ES6, Webpack, Flow, Jest, Node, GRPC and
          more.
        </li>
        <li>
          Leading build of a hybrid app which can run on web, desktop and
          mobile.
        </li>
        <li>
          Leading build of a secure web socket GRPC proxy layer to allow service
          access from the browser.
        </li>
        <li>
          Leading build of a store system to handle both subscriptions and one
          time purchases.
        </li>
        <li>Building out performant and scalable real time web services.</li>
        <li>
          Successfully introducing unit testing and typing to the web team.
        </li>
        <li>Conducting interviews for web team applicants.</li>
        <li>
          Being the go to person for knowledge of JavaScript and web
          technologies.
        </li>
      </List>

      <div className={jobTitleAndDateStyle}>
        <p css={{ color: '#FFF ' }}>Web Developer</p>
        <p>(2014-2016)</p>
      </div>
      <p css={{ fontWeight: 'bold', fontSize: 14 }}>
        aw2.0 ltd - Working exclusively with Private Equity and Venture Capital.
      </p>
      <List css={{ marginBottom: 36 }}>
        <li>
          Working with US based clients to build large scale web application’s
          and solutions to meet their business requirements.
        </li>
        <li>
          Communicating directly with the clients own personnel to ensure their
          ideas are executed to solutions fit for the purpose of their users and
          business needs.
        </li>
        <li>
          Successfully introducing React into the team bringing a wide range of
          benefits.
        </li>
      </List>

      <div className={jobTitleAndDateStyle}>
        <p css={{ color: '#FFF ' }}>Web Developer</p>
        <p>(2012-2014)</p>
      </div>
      <p css={{ fontWeight: 'bold', fontSize: 14 }}>Self-employed</p>
      <List css={{ marginBottom: 36 }}>
        <li>Develop and maintain various websites.</li>
        <li>Managed client hosting, databases and backups.</li>
      </List>
    </div>
  </section>
);

export default Work;
