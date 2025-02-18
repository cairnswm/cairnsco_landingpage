import React from "react";
import { Card, Button, ButtonGroup, Col } from "react-bootstrap";
import Github from "../icons/github";

const PortfolioCard = ({ 
  image, 
  title, 
  description, 
  projectUrl, 
  githubUrl, 
  onShowMore, 
  moreContent 
}) => {
  return (
    <Col md={6} lg={4}>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={image}
          alt={`${title} Thumbnail`}
          style={{ height: "300px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ButtonGroup>
            <Button
              variant="success"
              href={projectUrl}
              target="_blank"
              disabled={!projectUrl}
            >
              View Project
            </Button>
            <Button
              variant="secondary"
              onClick={() => onShowMore(title, moreContent)}
            >
              More
            </Button>
            {githubUrl && (
              <Button
                variant="outline-secondary"
                href={githubUrl}
                target="_blank"
              >
                <Github />
              </Button>
            )}
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PortfolioCard;
