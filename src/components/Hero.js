import React, { useState, useEffect } from 'react';
import 'C:/Users/ASingh/PycharmProjects/tvishdhi/src/styles/Hero.css'; // Ensure the CSS path is correct

const Hero = () => {
  const [showBrillianceText, setShowBrillianceText] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowBrillianceText(prevState => !prevState);
    }, 10000); // Toggle text every 5 seconds

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          {showBrillianceText ? (
            <>
              Where <span className="highlight-text">Technology</span> meets{' '}
              <span className="highlight-text">Brilliance</span>
            </>
          ) : (
            <>
              Solving <span className="highlight-text">Intricate</span> problems with simple solutions
            </>
          )}
        </h1>
        <a href="#contact" className="cta-button">Let’s Talk</a>
      </div>
    </section>
  );
};

export default Hero;
