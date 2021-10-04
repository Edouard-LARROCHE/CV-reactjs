import React, { Component } from 'react';
import PageviewIcon from '@material-ui/icons/Pageview';
import CancelIcon from '@material-ui/icons/Cancel';

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
          <div className='project'>
            <div className='icons'>
              {languagesIcons.map((icon) => (
                <i className={icon} key={icon} />
              ))}
            </div>
            <h3>{name}</h3>
            <img src={picture} alt='projet' onClick={this.handleClick} />
          </div>
        ) : (
          <div className='showInfos'>
            <h3> {name} </h3>
            <div className='icons'>
              {languagesIcons.map((icon) => (
                <i className={icon} key={icon} />
              ))}
            </div>
            <p className='text'> {info} </p>
            <ul className='show'>
              <li>
                <CancelIcon onClick={this.handleClick} />
              </li>
              <li>
                <a href={source} rel='noopener noreferrer' target='_blank'>
                  <PageviewIcon />
                </a>
              </li>
            </ul>
          </div>
        )}
      </>
    );
  }
}
