// src/components/ImageContainer.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";

const ProjectCard = ({ to, src, title, description }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="col-md-6 col-lg-4 my-2">
      <div data-aos="fade-up" className="card shadow bg-secondary-green">
        <div className="card-img">
          <a target="_blank" href={to} className="image-container">
            <div className="image-wrapper">
              <img src={src} alt={title} className="image" />
              <div className="title-overlay">
                <h3 className="title">{title}</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title text-green">{title}</h5>
          <p className="card-text text-green">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
