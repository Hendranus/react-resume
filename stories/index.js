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
import Resume from '../src/components/Resume';

storiesOf('Resume', module)
  .addDecorator(backgrounds([
    { name: "default", value: "#fff", default: true }
  ]))
  .add('with text', () => (
    <Resume/>
  ));

storiesOf('Content', module)
  .addDecorator(backgrounds([
    { name: "default", value: "#fff", default: true }
  ]))
  .add('with empty children', () => (
    <Content>Hello Content</Content>
  ));