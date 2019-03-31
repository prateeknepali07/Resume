import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="item">
          <span className="project-title">
            <a>{this.props.item.name}</a>
          </span>{" "}
          <br />
          <a href={this.props.item.url}>{this.props.item.url}</a>
          <br />
          <span className="project-tagline">
            A responsive website template designed to help startups promote,
            market and sell their products.
          </span>
        </div>
      </div>
    );
  }
}

export default Projects;
