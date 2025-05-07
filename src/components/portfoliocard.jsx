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
  moreContent,
  commercial = false 
}) => {
  return (
    <Col md={6} lg={4}>
      <Card className="h-100 position-relative">
        {commercial && (
          <span
            style={{
              position: "absolute",
              top: "35px",
              left: "70px",
              background: "#ffc107",
              color: "#212529",
              padding: "0.35em 0.75em",
              borderRadius: "0.5em",
              fontWeight: "bold",
              fontSize: "0.9em",
              zIndex: 2,
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              transform: "rotate(-17deg)"
            }}
          >
            Commercial
          </span>
        )}
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
