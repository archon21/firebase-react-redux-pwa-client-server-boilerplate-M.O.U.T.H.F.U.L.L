import React, { Component } from 'react';

class Fab extends Component {
  state = {
    isOptionHover: {}
  };

  optionHover = index => {
    const { isOptionHover } = this.state;
    const currOption = !isOptionHover[index];
    isOptionHover[index] = currOption;
    this.setState({ isOptionHover });
  };
  render() {
    const { isOptionHover } = this.state;
    const { options } = this.props;
    return (
      <div className="mdc-fab-container">
        <div className="fab fab-icon-holder">
          <i className="material-icons">more_vert</i>
        </div>
        <ul className="fab-options">
          {options.map((option, index) => {
            return (
              <li key={option.name}>
                {isOptionHover[index] ? (
                  <span
                    className={`fab-label p-5px ${option.backgroundColor &&
                      option.backgroundColor}`}
                  >
                    {option.label && option.label}
                  </span>
                ) : (
                  <div />
                )}
                <div
                  onClick={option.action}
                  className={`fab-icon-holder ${option.backgroundColor &&
                    option.backgroundColor}`}
                >
                  <i
                    onMouseLeave={() => this.optionHover(index)}
                    onMouseEnter={() => this.optionHover(index)}
                    className="material-icons"
                  >
                    {option.name}
                  </i>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Fab;
