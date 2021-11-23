import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'Javascript', xp: 1 },
      { id: 2, value: 'HTML / CSS', xp: 1 },
      { id: 3, value: 'Typescript', xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: 'ReactJs', xp: 1 },
      { id: 2, value: 'NodeJs', xp: 0.8 },
      { id: 3, value: 'jQuery', xp: 1 },
      { id: 4, value: 'Sass', xp: 0.8 },
      { id: 5, value: 'Material UI', xp: 1 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className='languagesFrameworks'>
        <ProgressBar languages={languages} className='languagesDisplay' title='Languages' />
        <ProgressBar languages={frameworks} className='frameworksDisplay' title='Frameworks & Bibliothèques' />
      </div>
    );
  }
}
