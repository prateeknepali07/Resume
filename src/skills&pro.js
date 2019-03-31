import React, { Component } from "react";

class skills extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="skillset">
        <div className="item">
          <h3 className="level-title">{this.props.item.name}</h3>
          {/* <div className="level-bar">
            <div
              className="level-bar-inner"
              data-level={this.props.item.precent}
            />
          </div> */}
          <div className="progress level-bar">
            <div
              className="progress-bar theme-progress-bar"
              role="progressbar"
              aria-valuenow={this.props.item.precent}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{
                width: this.props.item.precent + "%"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default skills;
