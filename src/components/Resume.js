import React, { Component } from 'react';
import data from '../../data/hendranus.json'
import Page from './Page';

class Resume extends Component {
  render () {
    const heading = data.resume.heading;
    const sections = data.resume.chronology;
    const footer = { fullName: `${heading.name} ${heading.surname}`,  webSite: heading.url };

    return (
        <Page {...{heading, sections, footer}} />
    );
  }
};

export default Resume;