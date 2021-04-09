// @flow
import React from "react";
import SectionTitle from "./SectionTitle";
import List from "./List";

const Skills = () => (
  <section>
    <SectionTitle>SKILLS</SectionTitle>
    <div css={{ display: "flex", flexWrap: "wrap" }}>
      <div css={{ flexGrow: 1 }}>
        <h4>Front End</h4>
        <List>
          <li>JavaScript, ES6, HTML, CSS</li>
          <li>React, Redux, Jest, Typescript</li>
          <li>Tailwind, SASS, CSS in JS</li>
          <li>UX, Responsive, Design Systems</li>
          <li>Rx, Ramda, Lodash, Functional</li>
          <li>Grunt, Gulp, NPM, Webpack</li>
          <li>Mobile Web, Electron, Widgets</li>
        </List>
      </div>
      <div css={{ flexGrow: 1 }}>
        <h4>Dev</h4>
        <List>
          <li>Nodejs Tooling</li>
          <li>Unit Testing, TDD</li>
          <li>Git, SVN</li>
          <li>Scrum, Jira</li>
        </List>
      </div>
      <div css={{ flexGrow: 1 }}>
        <h4>Backend</h4>
        <List>
          <li>Node.js, Nest.js, Express, Mongodb, Postgres</li>
          <li>AWS, EC2, S3, API Gateway, Lambda</li>
          <li>Firebase</li>
          <li>GRPC, Web Services</li>
          <li>REST</li>
        </List>
      </div>
    </div>
  </section>
);

export default Skills;
