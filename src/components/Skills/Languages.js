import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'Javascript', xp: 0.6 },
      { id: 2, value: 'Css', xp: 1 },
      { id: 3, value: 'NodeJs', xp: 0.6 },
      { id: 4, value: 'Typescript', xp: 0.2 },
    ],
    frameworks: [
      { id: 1, value: 'ReactJs', xp: 0.6 },
      { id: 2, value: 'Sass', xp: 0.3 },
      { id: 3, value: 'Material UI', xp: 0.5 },
      { id: 4, value: 'Styled Components', xp: 0.5 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className='languagesFramworks'>
        <ProgressBar languages={languages} className='languagesDisplay' title='Languages' />
        <ProgressBar languages={frameworks} className='frameworksDisplay' title='Frameworks & Bibliothèques' />
      </div>
    );
  }
}
