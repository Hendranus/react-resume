import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from "@storybook/addon-backgrounds";

import Button from '../src/components/Button';
import Page from '../src/components/Page';
import Section from '../src/components/Section';
import Content from '../src/components/Content';
import Title from '../src/components/Title';

storiesOf('Page', module)
  .addDecorator(backgrounds([
    { name: "default", value: "#fff", default: true }
  ]))
  .add('with text', () => (
    <Page>Hello Page</Page>
  ));

storiesOf('Content', module)
  .addDecorator(backgrounds([
    { name: "default", value: "#fff", default: true }
  ]))
  .add('with empty children', () => (
    <Content>Hello Content</Content>
  ));