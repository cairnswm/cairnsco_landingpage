import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const ModuleCard = ({ title, description, onShowMore, moreContent }) => {
  return (
    <Col md={4}>
      <Card className="h-100 border-success">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            variant="success"
            onClick={() => onShowMore(title, moreContent)}
          >
            More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ModuleCard;
