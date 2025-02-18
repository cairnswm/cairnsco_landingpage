import React from "react";
import { Container, Row } from "react-bootstrap";
import ModuleCard from "./modulecard";

const Modules = ({ onShowMore }) => {
  const moduleItems = [
    {
      title: "Authentication",
      description: "Secure identity and access management solutions.",
      moreContent: "Secure identity and access management solutions to protect your applications. Features include multi-factor authentication, role-based access control, and OAuth integrations."
    },
    {
      title: "Loyalty Systems",
      description: "Drive customer engagement and retention.",
      moreContent: "Innovative loyalty programs that drive customer engagement and retention. Offers custom rewards, tiered loyalty plans, and insightful analytics for customer behavior."
    },
    {
      title: "Ordering & Payments",
      description: "Seamless transactions with integrated solutions.",
      moreContent: "Streamlined ordering experiences with integrated payment solutions for seamless transactions. Supports multiple payment gateways, secure transactions, and custom ordering workflows."
    },
    {
      title: "Bookings",
      description: "Enhance scheduling and operational efficiencies.",
      moreContent: "Dynamic booking systems tailored to enhance scheduling and operational efficiencies. Features include calendar integrations, automated reminders, and real-time availability."
    },
    {
      title: "News & Events",
      description: "Timely updates and engaging event management.",
      moreContent: "Stay connected with timely news updates and engaging event management modules. Offers content management, event scheduling, and interactive user notifications."
    },
    {
      title: "Calendars",
      description: "Personal and professional scheduling solutions.",
      moreContent: "Comprehensive calendar integrations for personal and professional scheduling. Includes features such as recurring events, integration with external calendar services, and reminders."
    }
  ];

  return (
    <section
      id="modules"
      className="py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <Container>
        <h2 className="mb-4 text-center">Custom Modules &amp; Packages</h2>
        <p className="text-center mb-5">
          I bring together a suite of bespoke modules to craft holistic
          solutions tailored for clients. These modules are proprietary and
          designed to to be integrated quickly into solutions clients ask for.
        </p>
        <Row className="g-4">
          {moduleItems.slice(0, 3).map((item, index) => (
            <ModuleCard
              key={index}
              {...item}
              onShowMore={onShowMore}
            />
          ))}
        </Row>
        <Row className="g-4 mt-4">
          {moduleItems.slice(3).map((item, index) => (
            <ModuleCard
              key={index + 3}
              {...item}
              onShowMore={onShowMore}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Modules;
