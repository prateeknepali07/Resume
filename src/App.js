import React, { Component } from "react";
import resume from "../src/resume.json";
import "./App.css";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./skills&pro";

class App extends Component {
  renderExperiences() {
    let resultsArray = [];
    resume.experiences.map((item, i) => {
      resultsArray.push(<Experience item={item} key={i} />);
    });
    return resultsArray;
  }

  renderProjects() {
    let allProjects = [];
    resume.projects.map((item, i) => {
      allProjects.push(<Projects item={item} key={i} />);
    });
    console.log("its running");
    return allProjects;
  }

  renderskill() {
    let allskills = [];
    resume.skill.map((item, i) => {
      allskills.push(<Skills item={item} key={i} />);
    });
    console.log("work");
    return allskills;
  }
  render() {
    console.log(resume);
    return (
      <div className="App">
        <div className="wrapper">
          <div className="sidebar-wrapper">
            <div className="profile-container">
              <img className="profile" src={resume.image} id="image" />
              <h1 className="name">{resume.name}</h1>
              <h3 className="tagline">Full Stack Developer</h3>
            </div>

            <div className="contact-container container-block">
              <ul className="list-unstyled contact-list">
                <li className="email">
                  <i className="fas fa-envelope" />
                  <a href="prateeknepali7@gmail.com">{resume.email}</a>
                </li>
                <li className="phone">
                  <i className="fas fa-phone" />
                  <a href="tel:0123 456 789">{resume.phone}</a>
                </li>
                <li className="website">
                  <i className="fas fa-globe" />
                  <a
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/"
                    target="_blank"
                  >
                    portfoliosite.com
                  </a>
                </li>
                <li className="linkedin">
                  <i className="fab fa-linkedin-in" />
                  <a
                    href="https://www.linkedin.com/in/prateek-kumar-a62976170"
                    target="_blank"
                  >
                    {resume.Linkedin}
                  </a>
                </li>
                <li className="github">
                  <i className="fab fa-github" />
                  <a href="https://github.com/prateeknepali07" target="_blank">
                    {resume.github}
                  </a>
                </li>
                <li className="twitter">
                  <i className="fab fa-twitter" />
                  <a href="https://twitter.com/NepaliPrateek" target="_blank">
                    {resume.twitter}
                  </a>
                </li>
              </ul>
            </div>

            <div className="education-container container-block">
              <h2 className="container-block-title">Education</h2>
              <div className="item">
                <h4 className="degree">MSc in Computer Science</h4>
                <h5 className="meta">University of London</h5>
                <div className="time">2011 - 2012</div>
              </div>

              <div className="item">
                <h4 className="degree">BSc in Applied Mathematics</h4>
                <h5 className="meta">Bristol University</h5>
                <div className="time">2007 - 2011</div>
              </div>
            </div>

            <div className="languages-container container-block">
              <h2 className="container-block-title">Languages</h2>
              <ul className="list-unstyled interests-list">
                <li>
                  English <span className="lang-desc">(Native)</span>
                </li>
                <li>
                  French <span className="lang-desc">(Professional)</span>
                </li>
                <li>
                  Spanish <span className="lang-desc">(Professional)</span>
                </li>
              </ul>
            </div>

            <div className="interests-container container-block">
              <h2 className="container-block-title">Interests</h2>
              <ul className="list-unstyled interests-list">
                <li>Climbing</li>
                <li>Snowboarding</li>
                <li>Cooking</li>
              </ul>
            </div>
          </div>

          <div className="main-wrapper">
            <section className="section summary-section">
              <h2 className="section-title">
                <span className="icon-holder">
                  <i className="fas fa-user" />
                </span>
                Career Profile
              </h2>
              <div className="summary">
                <p>
                  Summarise your career here lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. You can
                  <a
                    href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/"
                    target="_blank"
                  >
                    download this free resume/CV template here
                  </a>
                  . Aenean commodo ligula eget dolor aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu.
                </p>
              </div>
            </section>

            <section className="section experiences-section">
              <h2 className="section-title">
                <span className="icon-holder">
                  <i className="fas fa-briefcase" />
                </span>
                Experiences
              </h2>

              {this.renderExperiences()}
            </section>

            <section className="section projects-section">
              <h2 className="section-title">
                <span className="icon-holder">
                  <i className="fas fa-archive" />
                </span>
                Projectsexperiences
              </h2>
              <div className="intro">
                <p>
                  You can list your side projects or open source libraries in
                  this section. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum et ligula in nunc bibendum
                  fringilla a eu lectus.
                </p>
              </div>
              {this.renderProjects()}
            </section>

            <section className="skills-section section">
              <h2 className="section-title">
                <span className="icon-holder">
                  <i className="fas fa-rocket" />
                </span>
                Skills &amp; Proficiency
              </h2>

              {this.renderskill()}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
