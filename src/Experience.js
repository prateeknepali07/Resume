import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="item">
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">{this.props.item.title}</h3>
              <div className="time">{this.props.item.Period}</div>
            </div>

            <div className="company">
              <a href="https://emjoy.co" />
              {this.props.item.company}
            </div>
          </div>

          <div className="details">
            <p>{this.props.item.details}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
