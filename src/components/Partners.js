import React from 'react';
import 'C:/Users/ASingh/PycharmProjects/tvishdhi/src/styles/Partners.css';
import img1 from "C:/Users/ASingh/PycharmProjects/tvishdhi/src/assets/images/aws.png";
import img2 from "C:/Users/ASingh/PycharmProjects/tvishdhi/src/assets/images/filevine__.jpeg";
import img3 from "C:/Users/ASingh/PycharmProjects/tvishdhi/src/assets/images/gcp.png";
import img4 from "C:/Users/ASingh/PycharmProjects/tvishdhi/src/assets/images/azure_bg.png";
import img5 from "C:/Users/ASingh/PycharmProjects/tvishdhi/src/assets/images/aderant_.png";
import img6 from "C:/Users/ASingh/PycharmProjects/tvishdhi/src/assets/images/zapier.png";
import img7 from "C:/Users/ASingh/PycharmProjects/tvishdhi/src/assets/images/workato.jpeg";
import img8 from "C:/Users/ASingh/PycharmProjects/tvishdhi/src/assets/images/clio.png";

const Partners = () => {
  return (
    <section className="partners" id="partners">
      <h2>Our Core Software Competencies</h2>
        <div className="partner-logos">
            <img src={img1} alt="AWS"/>
            <img src={img2} alt="Filevine"/>
            <img src={img3} alt="Aderant"/>
            <img src={img4} alt="Azure"/>
            <img src={img5} alt="Aderant"/>
            <img src={img6} alt="Zapier"/>
            <img src={img7} alt="workato"/>
            <img src={img8} alt="clio"/>
        </div>
    </section>
  );
};

export default Partners;
