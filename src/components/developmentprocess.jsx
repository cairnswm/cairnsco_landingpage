import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const DevelopmentProcess = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">My Development Process</h2>
        <Row className="mb-4">
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Front End Development</Card.Title>
                <Card.Text>
                  I create a front end with mock data in the context, this
                  allows me to work on the AI ui and ux without worrying about
                  data fetching.
                  <br />I use React for my front end development, and I use the
                  latest version of React Bootstrap for my components.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>AI Development</Card.Title>
                <Card.Text>
                  I use <a href="bolt.new">Bolt.new</a> to build out a initial
                  prototype. I then use{" "}
                  <a href="https://github.com/stackblitz-labs/bolt.diy">
                    bolt.diy
                  </a>{" "}
                  to import the prototype and add functionality to it. Mostly
                  also with mock data, but then converting it to use APIs when
                  it is ready.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>API Development</Card.Title>
                <Card.Text>
                  I use php for my backend development, running on a simple
                  hosting site that provides php and mysql for almost no cost. I
                  have built out a common api layer that is shared accross all
                  components. I have also create a "General API" component layer
                  that alloows me to just set up a config and access my data
                  using a REST API.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mx-auto">
            <Card>
              <Card.Body>
                <Card.Title>GAPI</Card.Title>
                <Card.Text>
                  A General API component layer that simplifies REST API access
                  through configuration-based setup.
                </Card.Text>
                <a
                  href="https://github.com/cairnswm/gapi"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
                <Card.Text>
                  <em style={{fontSize:"0.75rem"}}>
                    I have built a gapiv2 but this is embedded in my API layer
                    and not yet an independant library.
                  </em>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DevelopmentProcess;
