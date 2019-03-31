import React, { Component } from "react";

class Language extends Component {
  render() {
    return (
      <div>
        <li>
          <li>
            <span className="lang-desc">{this.props.item.name}:</span>
          </li>
          <span className="lang-desc">{this.props.item.details}</span>
        </li>
      </div>
    );
  }
}

export default Language;
