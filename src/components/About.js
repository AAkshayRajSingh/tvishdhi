import React from 'react';
import '../styles/About.css';


const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        {/* Title: Why Choose TVISHDHI? */}
        <div className="about-text">
          <h2>Why Choose TVISHDHI?</h2>
          <p>
            At <strong>TVISHDHI</strong>, we specialize in transforming your vision into reality. We help businesses navigate the complexities of the digital world, ensuring that your technology strategy is not just functional, but extraordinary. Our team of highly skilled designers and developers work seamlessly together to craft the best solutions tailored specifically for you. Let us bring your ideas to life with clarity and purpose.
          </p>
        </div>

        {/* Side by side: Solution Development and Experience Design */}
        <div className="about-services">
          <div className="service">
            <h3>Solution Development</h3>
            <p>
              This is where we shine. Our engineering team thrives on tackling the most intricate challenges, offering innovative solutions to complex problems. What sets us apart is our unique approach: we combine exceptional design with cutting-edge engineering, ensuring that you get both in one seamless package—unlike our competitors who might only offer one or the other.
            </p>
          </div>

          <div className="service">
            <h3>Experience Design</h3>
            <p>
              User experience is everything. We understand that how your users interact with your platform is crucial to building loyalty and engagement. By blending advanced technology with intuitive, visually appealing design, we create digital experiences that not only attract users but also turn them into passionate advocates for your brand.
            </p>
          </div>
        </div>

        {/* Side by side: Strategy Consulting and Project Management */}
        <div className="about-strategy">
          <div className="strategy-service">
            <h3>Strategy Consulting</h3>
            <p>
              Success isn’t one-size-fits-all, and neither are our solutions. We take a holistic approach to strategy, working closely with you to identify the most effective path to reach your goals. Whether it’s a complete design overhaul or developing custom automation solutions, we focus on delivering sustainable, long-term results that truly make an impact.
            </p>
          </div>

          <div className="strategy-service">
            <h3>Project Management</h3>
            <p>
              Every project is unique, and so are its challenges. Our project managers bring years of expertise and flexibility to handle any situation. With an in-depth understanding of your industry and needs, we act as an extension of your team, ensuring your project stays on track, on time, and aligned with your business objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
