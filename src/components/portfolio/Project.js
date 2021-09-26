import React, { Component } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

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
        <img src={picture} alt='projet' onClick={this.handleInfo} />
        <span className='infos'></span>

        {this.state.showInfo && (
          <div className='showInfos'>
            <div className='infosContent'>
              <div className='head'>
                <ArrowBackIosIcon className='back' onClick={this.handleInfo} />
                <h2> {name} </h2>
              </div>
              <p className='text'> {info} </p>
              <a href={source} className='show' rel='noopener noreferrer' target='_blank'>
                <VisibilityIcon />
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}
