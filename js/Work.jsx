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
        <p>Software Engineer</p>
        <p>(2016-Present)</p>
      </div>
      <p css={{ fontWeight: 'bold', fontSize: 14 }}>
        ESL - The world’s largest e-sports network.
      </p>
      <List css={{ marginBottom: 36 }}>
        <li>
          Working in a team building out an advanced new product allowing ESL to
          reach into a newly developing e-sports market.
        </li>
        <li>
          Leading crucial technology decisions about how the product will be
          built.
        </li>
        <li>
          Working with React, Redux, ES6, Webpack, Flow, Jest and more to create
          a highly usable hybrid application which can run as a website, a
          desktop app and a mobile app.
        </li>
        <li>
          Working with node and GRPC to build out performant and scalable
          realtime web services.
        </li>
        <li>
          Building out scalable web socket proxy layer on top of GRPC to allow
          services to be accessed from the browser and handling stuff like rate
          limiting and authentication.
        </li>
        <li>
          Building out store system to handle both product subscriptions and one
          time purchases for many users, integrated with PayPal, Stripe and
          more.
        </li>
        <li>
          Successfully championed unit testing and typing initiatives bringing
          increases in quality and decreases in bugs across the board.
        </li>
        <li>
          Conducting interviews for web team applicants and being the go to
          person for knowledge of javascript and web technologies.
        </li>
      </List>

      <div className={jobTitleAndDateStyle}>
        <p>Web Developer</p>
        <p>(2014-2016)</p>
      </div>
      <p css={{ fontWeight: 'bold', fontSize: 14 }}>
        aw2.0 ltd - Working exclusively with Private Equity and Venture Capital.
      </p>
      <List css={{ marginBottom: 36 }}>
        <li>
          Working with UK and US based clients to build large scale web
          application’s and solutions to meet their business requirements.
          Working directly with the clients own personnel to ensure their ideas
          are executed to solutions fit for the purpose of their users and
          business needs.
        </li>
        <li>
          Successfully introduced react into the team bringing a wide range of
          benefits.
        </li>
      </List>

      <div className={jobTitleAndDateStyle}>
        <p>Web Developer</p>
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
