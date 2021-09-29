import React, { Component } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      showInfo: !state.showInfo,
    }));
  }

  render() {
    const { name, languagesIcons, source, info, picture } = this.props.item;
    return (
      <>
        {this.state.showInfo ? (
          <div className='project' onClick={this.handleClick}>
            <div className='icons'>
              {languagesIcons.map((icon) => (
                <i className={icon} key={icon} />
              ))}
            </div>
            <h3>{name}</h3>
            <img src={picture} alt='projet' />
          </div>
        ) : (
          <div className='showInfos'>
            <div className='infosContent'>
              <div className='head'>
                <ArrowBackIosIcon className='back' onClick={this.handleClick} />
                <h2> {name} </h2>
              </div>
              <p className='text'> {info} </p>
              <a href={source} className='show' rel='noopener noreferrer' target='_blank'>
                <VisibilityIcon />
              </a>
            </div>
          </div>
        )}
      </>
    );
  }
}
