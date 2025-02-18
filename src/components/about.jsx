import React from "react";
import { Container } from "react-bootstrap";
import Email from "../icons/email";
import Whatsapp from "../icons/whatsapp";

const About = () => {
  return (
    <section
      id="about"
      className="py-5"
      style={{ backgroundColor: "#e9f7ef" }}
    >
      <Container>
        <h2 className="mb-4 text-center">About Me</h2>
        <p>
          With a lifelong passion for software engineering, I have
          consistently strived to push the limits of technology. My expertise
          in bespoke software development using React and cutting-edge cloud
          solutions has empowered businesses to innovate and scale. I believe
          in continuous learning and the transformative power of modern
          development practices.
        </p>
        Do you have an idea for a project? Contact me and let's make it a
        reality.
        <div className="text-center mt-3">
          <a href="mailto:cairnswm@gmail.com" title="Email" className="me-3">
            <Email size={32} color="green" />
          </a>
          <a href="https://wa.me/27828034657" title="WhatsApp">
            <Whatsapp size={32} color="green" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default About;
