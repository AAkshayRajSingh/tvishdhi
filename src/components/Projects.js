import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <div className="projects-text">
          <h2>Our Accomplishments</h2>
          <p>
            Over the Past 7 years, <strong>TVISHDHI</strong> has delivered impactful solutions across diverse domains.
            From intelligent automation to real-time communication systems, our work showcases a wide range of technical excellence.
          </p>
        </div>

        <div className="project-cards">
          <div className="project-card">
            <h3> Real-Time SMS Notifications</h3>
            <p>
              Integrated SMS APIs to deliver instant status updates, ensuring seamless and timely client communication.
            </p>
          </div>

          <div className="project-card">
            <h3> Email Integration</h3>
            <p>
              Built robust pipelines for automated email flows, enabling real-time correspondence and streamlined communication.
            </p>
          </div>

          <div className="project-card">
            <h3> Custom Report Automation</h3>
            <p>
              Delivered powerful reporting systems that automate analytics and deliver insightful, client-specific data.
            </p>
          </div>

          <div className="project-card">
            <h3> Secure Government Portal Integration</h3>
            <p>
              Enabled secure submissions of forms and complaints via direct API integration with government platforms.
            </p>
          </div>

          <div className="project-card">
            <h3> Cloud-Based Deployments</h3>
            <p>
              Leveraged Microsoft Azure for scalable, reliable, and secure deployment of mission-critical applications.
            </p>
          </div>

          <div className="project-card">
            <h3> Tailor-Made Workflow Solutions</h3>
            <p>
              Designed custom digital workflows that optimize operations and enhance productivity for businesses.
            </p>
          </div>
        </div>

        {/*<div className="projects-footer">*/}
        {/*  <p>*/}
        {/*    Our commitment to <strong>quality</strong>, <strong>innovation</strong>, and <strong>client success</strong> is reflected in every project we deliver.*/}
        {/*    With <strong>TVISHDHI</strong>, you’re not just choosing a service provider—you’re gaining a long-term technology partner.*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default Projects;
