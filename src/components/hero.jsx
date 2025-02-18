import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <header className="py-5" style={{ backgroundColor: "#e9f7ef" }}>
      <Container className="text-center">
        <h1 className="display-4">William Cairns</h1>
        <p className="lead">
          Specialist Software Engineer using React and Modern Technologies
        </p>
        <p>
          A passionate software engineer and team lead with 28 years of
          experience as a solution architect and developer.
        </p>
        <Button variant="success" size="lg" href="#biography">
          Discover More
        </Button>
      </Container>
    </header>
  );
};

export default Hero;
