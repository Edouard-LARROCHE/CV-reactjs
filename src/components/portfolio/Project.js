import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;
    return (
      <div className='project'>
        <div className='icons'>
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon} />
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt='picture' />
        <span className='infos'>
          <i className='fas fa-plus-circle' />
        </span>
      </div>
    );
  }
}
