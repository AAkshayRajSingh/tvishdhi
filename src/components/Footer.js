import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 United Technology Solutions. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com" target="https://www.linkedin.com/company/tvishdhi/?viewAsMember=true" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.facebook.com/profile.php?id=61575254526753" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/tvishdhi/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://x.com/tvishdhi" target="_blank" rel="noopener noreferrer">X</a>
      </div>
    </footer>
  );
};

export default Footer;
