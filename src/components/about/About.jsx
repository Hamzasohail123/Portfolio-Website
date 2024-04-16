import React from "react";
import "./about.css";
import AboutImg from "../../assets/about3.jpg";
import hamza from "../../assets/hamza.pdf";
import Info from "./Info";



const About = () => {

  return (
    <section class="about">
  <div class="about-heading">
    <h2>About Me</h2>
    <p>Get to know me</p>
  </div>
  <div class="about-content">
    <div class="about-image">
      <img src={AboutImg} alt="Your Name" />
    </div>
    <div class="about-description">
      <h3>Experience</h3>
      <p>
        With a solid background in forwarding and logistics, I've honed my teamwork and problem-solving skills during my 4.5 years in this challenging industry. Now, I'm on a new path, driven by my passion for creating intuitive and responsive user interfaces. I'm eager to bring my expertise to the tech world, where I'm excited to learn, grow, and contribute.
      </p>
    </div>
  </div>
</section>

  );
};

export default About;
