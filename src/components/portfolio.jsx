import React from "react";
import { Container, Row } from "react-bootstrap";
import PortfolioCard from "./portfoliocard";

const Portfolio = ({ onShowMore }) => {
  const portfolioItems = [
    {
      image: "/images/juzt-dance.jpg",
      title: "Juzt Dance",
      description: "Bringing the dance community together to celebrate movement and art.",
      projectUrl: "https://demo.juzt.dance",
      moreContent: "Juzt Dance is a platform that unites the dance community, offering tools and resources to enhance the art of dance.<br/>Selling tickets for events, implementing loyalty systems for venues."
    },
    {
      image: "/images/workflowcanvas.jpg",
      title: "WorkflowCanvas",
      description: "A revolutionary project management and workflow visualization tool. Built by hand, with assistance from AI",
      projectUrl: "https://cairns.co.za/workflowcanvas/",
      githubUrl: "https://github.com/cairnswm/workflowcanvas",
      moreContent: "WorkflowCanvas is an AI-driven tool that simplifies project management and workflow visualization, enhancing team productivity."
    },
    {
      image: "/images/kanban-board.jpg",
      title: "Kanban Board",
      description: "An intuitive agile project management tool ready for integration into any project tool (react).",
      githubUrl: "https://github.com/cairnsgames/IssueBoard",
      moreContent: "The Kanban Board is an AI-enhanced tool that streamlines agile project management, improving team collaboration and efficiency."
    },
    {
      image: "/images/postermaker.jpg",
      title: "PosterMaker",
      description: "Effortlessly create stunning posters with our simple to use design wizard.",
      projectUrl: "https://cairns.co.za/postermaker/",
      githubUrl: "https://github.com/cairnswm/postermaker",
      moreContent: "PosterMaker is an intuitive AI-powered tool that allows users to create visually appealing posters with ease."
    },
    {
      image: "/images/aicvbuilder.jpg",
      title: "AICVBuilder",
      description: "Generate custom CVs with intelligent AI-driven resume design and content.",
      projectUrl: "https://cairns.co.za/aicvbuilder/",
      githubUrl: "https://github.com/cairnswm/ai-cv-builder",
      moreContent: "AICVBuilder leverages AI to help users create professional and personalized CVs effortlessly. Upload your CV, upload the job spec, get a customized CV targetting that job spec."
    },
    {
      image: "/images/brtools.jpg",
      title: "BRTools",
      description: "Tools to assist managers of the Blackout Rugby Classic Management game.",
      moreContent: "BRTools provides essential utilities and analytics for Blackout Rugby Classic managers, helping them make data-driven decisions and optimize team performance."
    },
    {
      image: "/images/comingsoon.jpg",
      title: "Location Marking",
      description: "Track locations using GPS points with seamless photo integration.",
      moreContent: "Location Marking is a tool that allows users to track and document locations using GPS and photo integration."
    }
  ];

  return (
    <section id="portfolio" className="py-5">
      <Container>
        <h2 className="mb-4 text-center">Portfolio</h2>
        <p className="text-center mb-4">
          Leveraging artificial intelligence to create innovative solutions that enhance productivity and creativity. 
          These applications demonstrate the power of AI integration in modern software development.
        </p>
        <Row className="g-4">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              {...item}
              onShowMore={onShowMore}
            />
          ))}
        </Row>
        <Container className="mt-3">
          These are all concept application (Juzt.Dance is commercial) that are
          built to show techniques in real world application. They can be taken
          and used in your own projects. The code is available on Github for you
          to use.
          <div>
            Do you have an idea for a project?{" "}
            <a href="mailto:cairnswm@gmail.com">Contact me</a> and let's make it
            a reality.
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default Portfolio;
