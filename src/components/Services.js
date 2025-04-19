import React from 'react';
import 'C:/Users/ASingh/PycharmProjects/tvishdhi/src/styles/Services.css';
// import React from 'react';
// import './Services.css';

const services = [
  {
    title: "Custom Development",
    description: "We craft tailored, scalable, and innovative software solutions to match your unique business goals.",
    icon: "🛠️", // Replace with actual icons if you use components or images
  },
  {
    title: "Cloud Integration",
    description: "Seamless, secure, and scalable cloud solutions that power your digital transformation.",
    icon: "☁️",
  },
  {
    title: "API Automation",
    description: "We streamline workflows and boost efficiency with intelligent, automated API integrations.",
    icon: "🔗",
  },
  {
    title: "AI & Data Consulting",
    description: "Turning data into insights with smart AI strategies tailored to your business needs.",
    icon: "🤖",
  },
];


const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};



export default Services;
