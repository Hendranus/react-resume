import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from "@storybook/addon-backgrounds";

import Button from '../src/components/Button';
import Page from '../src/components/Page';
import Heading from '../src/components/Heading';
import Section from '../src/components/Section';
import Content from '../src/components/Content';
import Title from '../src/components/Title';
import Footer from '../src/components/Footer';
import data from '../data/hendranus.json'

const heading = data.resume.heading;
const sections = data.resume.chronology;
const footer = { fullName: `${heading.name} ${heading.surname}`,  webSite: heading.url };

storiesOf('Page', module)
  .addDecorator(backgrounds([
    { name: "default", value: "#fff", default: true }
  ]))
  .add('with text', () => (
    <Page {...{heading, sections, footer}} />
  ));

storiesOf('Content', module)
  .addDecorator(backgrounds([
    { name: "default", value: "#fff", default: true }
  ]))
  .add('with empty children', () => (
    <Content>Hello Content</Content>
  ));