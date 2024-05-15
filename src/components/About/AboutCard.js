import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Javed Akhtar </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            <ImPointRight />   I am a under-graduate Computer Science student.
            <br />
            <ImPointRight /> I have completed Bachelor's in Technology in Computer Science Engineering  at Parala Maharaja Engineering College, Berhampur, Odisha.
            <br />
            <ImPointRight /> I have completed Senior Secondary Education (12th) at Kendriya Vidyalaya No.2, CRPF Campus Bhubaneswar, Odisha.
            <br />
            <ImPointRight /> I have completed Higher Secondary Education (10th) at Kendriya Vidyalaya No.2, CRPF Campus Bhubaneswar, Odisha.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to MUsics
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing poetry
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Javed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
