import React, { Component } from 'react';
import Heading from './Heading';
import Section from './Section';
import Footer from './Footer';

class Page extends Component {
  render () {
    let sections = this.props.sections;
    return (
      <div>
        <Heading data={this.props.heading} />
          { sections ? sections.map( section => <Section data={ section } />) : '' }
        <Footer data={this.props.footer} />
      </div>
    )
  };
}

export default Page;