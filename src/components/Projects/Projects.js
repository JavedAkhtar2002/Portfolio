import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GuftGuu"
              description="Personal Chat Room or Workspace to share each other's thoughts and messages."
              ghLink="https://github.com/JavedAkhtar2002/chat-fend"
              demoLink="https://realtime-chat-app11.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Employee Manager"
              description="Employee Manager is a user-friendly website that empowers administrators to effortlessly manage employee details, including creating, reading, updating, and deleting records."
              ghLink="https://github.com/JavedAkhtar2002/FEND_CRUD"
              demoLink="https://web-react-vite.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hotel Management"
              description="Hotel management system in Python facilitates booking, guest management, and staff coordination, enhancing efficiency and customer experience."
              ghLink="https://github.com/JavedAkhtar2002/JavedAkhtar2002/blob/main/hotel%20management.py"
              demoLink="https://www.pythonanywhere.com/user/Javed21Akhtar/shares/40e121168c9c4b1d8dc99c9296acefa1/"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AgriLegder"
              description="AgriLedger utilizes blockchain for secure, traceable paddy procurement, ensuring transparency and trust in transactions. It's a decentralized application (DApp) enhancing efficiency and accountability in agricultural supply chains."
              ghLink="https://github.com/JavedAkhtar2002/Paddy-Procurement-System"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
