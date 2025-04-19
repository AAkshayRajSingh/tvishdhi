import React, { useState } from 'react';
import '../styles/Contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Let’s Build Something Great Together</h2>
        <p className="contact-subheading">Connect with Tvishdhi's team to explore your tech solutions</p>

        <form
          className="contact-form"
          action="https://formsubmit.co/Akshya@unitedtechnologyservicesllc.com" // Replace with your email address
          method="POST"
        >
          {/* Hidden inputs to disable captcha and set template */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* Full Name */}
          <div className="form-group two-column">
            <div>
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"  // Corrected to match state property
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"  // Corrected to match state property
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="form-group two-column">
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"  // Corrected to match state property
                value={formData.phone}
                onChange={handleChange}
                placeholder="(Optional)"
              />
            </div>
            {/* Company */}
            <div>
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"  // Corrected to match state property
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Inc."
              />
            </div>
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">Project Overview / Message</label>
            <textarea
              id="message"
              name="message"  // Corrected to match state property
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your project or idea..."
            />
          </div>

          {/* Consent Checkbox */}
          <div className="form-group">
            <label className="checkbox">
              <input
                type="checkbox"
                name="consent"  // Corrected to match state property
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              I agree to be contacted by Tvishdhi regarding my inquiry.
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="contact-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
