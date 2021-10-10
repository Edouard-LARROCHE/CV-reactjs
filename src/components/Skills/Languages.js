import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'Javascript', xp: 0.7 },
      { id: 2, value: 'HTML / CSS', xp: 0.96 },
      { id: 3, value: 'Typescript', xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: 'ReactJs', xp: 0.7 },
      { id: 2, value: 'Angular', xp: 0.1 },
      { id: 3, value: 'Sass', xp: 0.7 },
      { id: 4, value: 'Material UI', xp: 0.6 },
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
