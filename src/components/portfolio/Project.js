import React, { Component } from 'react';

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
        <img src={picture} alt='picture' />
        <span className='infos'>
          <i className='fab fa-openid' onClick={this.handleInfo} />
        </span>

        {this.state.showInfo && (
          <div className='showInfos'>
            <div className='infosContent'>
              <div className='head'>
                <h2> {name} </h2>
              </div>

              <div className='button return' onClick={this.handleInfo}>
                Retour
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
