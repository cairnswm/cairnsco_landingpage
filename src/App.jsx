import React, { useState } from "react";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Biography from "./components/biography";
import Portfolio from "./components/portfolio";
import Modules from "./components/modules";
import About from "./components/about";
import Footer from "./components/footer";
import DetailModal from "./components/detailmodal";
import DevelopmentProcess from "./components/developmentprocess";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const handleShowModal = (title, body) => {
    setModalContent({ title, body });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Navigation />
      <Hero />
      <Biography />
      <Portfolio onShowMore={handleShowModal} />
      <Modules onShowMore={handleShowModal} />
      <About />
      <DevelopmentProcess />
      <Footer />
      <DetailModal
        show={showModal}
        onHide={handleCloseModal}
        title={modalContent.title}
        body={modalContent.body}
      />
    </>
  );
};

export default App;
