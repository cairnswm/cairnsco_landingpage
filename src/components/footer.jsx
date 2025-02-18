import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3" style={{ backgroundColor: "#28a745" }}>
      <Container className="text-center text-white">
        &copy; {currentYear} William Cairns. All Rights Reserved.
      </Container>
    </footer>
  );
};

export default Footer;
