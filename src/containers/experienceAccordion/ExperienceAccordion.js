import React, { Component } from "react";
import "./exp.css";
import { Fade, Flip } from "react-reveal";

class ExperienceAccordion extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <>
        {" "}
        <Fade bottom duration={2000} distance="40px">
          <>
            <center>
              <h2>Work Experience</h2>
            </center>
            <br />
            <div class="timeline-wrap">
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3><i>Full Stack Engineer</i></h3>
                  <i>December 2020 - Present</i>
                </div>

                <div class="timeline-content">
                  <h4><i>Infosys ltd</i></h4>
                  Deleaing with Engineering team as a Front-end and as a
                  Back-end developer uisng <br />
                  ReactJs, AngulatJs and SpringBoot
                  <br /><br />
                  <p>
                    Client : <i>HSBC</i> (Hongkong and Shanghai Banking
                    Corporation) 6th largest multinational
                    <br /> investment bank and financial services holding
                    company
                  </p>
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3><i>Automation Tester (QA)</i></h3>
                  <i>August 2020 - December 2020</i>
                </div>

                <div class="timeline-content">
                  <h4><i>Infosys ltd</i></h4>
                  Worked with Selenium and Java to automate my Work <br />Also i created a
                  new way of automation 
                  that successfully reduce the work effort by half
                  <br /><br />
                  Client : <i>FORD</i> (Ford Motor Company Automaker company)
                  <br />
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3><i>Front-end Developer</i></h3>
                  <i>August 2018 - July 2020</i>
                </div>

                <div class="timeline-content">
                  <h4><i>FreeLancer</i></h4>
                  <p>
                    Works as a freeLancer with the help of my father. Mainly
                    deals with creating, hosting and
                    <br /> maintaining the websites with online database access.
                  </p>
                </div>
              </div>
            </div>
          </>
        </Fade>
      </>
    );
  }
}

export default ExperienceAccordion;