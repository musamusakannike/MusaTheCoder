import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <main className="bg-tertiary-green py-5 px-sm-2 px-md-3">
      <h2
        data-aos="fade-up"
        className="display-2 fw-bold text-green text-center py-4"
      >
        Skills
      </h2>
      <p data-aos="fade-up" className="text-center text-green mx-md-4 mx-lg-5">
        Hi, I'm Musa Musa K., a passionate Frontend Developer with a knack for
        creating dynamic and user-friendly web applications. Let's create
        something amazing together!
      </p>

      <div className="row gap-2 justify-content-center">
        <div
          data-aos="slide-right"
          className="col-md-5 col-lg-5 custom-card text-center p-5"
          style={{ border: "1px solid" }}
        >
          <h3 className="text-green fw-bold">BASIC FRONTEND DEVELOPMENT</h3>
          <p className="my-3 text-green text-start">
            <span className="fw-bold">HTML:</span> Proficient in creating
            semantic and accessible markup for web pages. <br />
            <span className="fw-bold">CSS:</span> Skilled in styling and layout
            techniques, including responsive design and CSS frameworks like
            Bootstrap. <br />
            <span className="fw-bold">JavaScript:</span> Strong understanding of
            core JavaScript concepts and ES6+ features for interactive web
            experiences.
          </p>
          <div className="progress">
            <div
              className="progress-bar bg-green"
              role="progressbar"
              style={{ width: "95%" }}
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              95%
            </div>
          </div>
        </div>

        <div
          data-aos="slide-left"
          className="col-md-5 col-lg-5 custom-card text-center p-5"
          style={{ border: "1px solid" }}
        >
          <h3 className="text-green fw-bold">CSS FRAMEWORK</h3>
          <p className="my-3 text-green text-start">
            <span className="fw-bold">Bootstrap:</span> Proficient in utilizing
            Bootstrap to create responsive and visually appealing designs,
            leveraging its grid system and components.
          </p>
          <div className="progress">
            <div
              className="progress-bar bg-green"
              role="progressbar"
              style={{ width: "97%" }}
              aria-valuenow="97"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              97%
            </div>
          </div>
        </div>

        <div
          data-aos="slide-right"
          className="col-md-5 col-lg-5 custom-card text-center p-5"
          style={{ border: "1px solid" }}
        >
          <h3 className="text-green fw-bold">RESPONSIVE DESIGN</h3>
          <p className="my-3 text-green">
            I specialize in responsive design, ensuring seamless user
            experiences across devices. Proficient in leveraging CSS media
            queries and frameworks like Bootstrap, I design websites that adapt
            fluidly to various screen sizes. My approach combines aesthetic
            sensitivity with technical precision, optimizing layouts for
            usability and performance.
          </p>
          <div className="progress">
            <div
              className="progress-bar bg-green"
              role="progressbar"
              style={{ width: "96%" }}
              aria-valuenow="96"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              96%
            </div>
          </div>
        </div>

        <div
         data-aos="slide-left"
          className="col-md-5 col-lg-5 custom-card text-center p-5"
          style={{ border: "1px solid" }}
        >
          <h3 className="text-green fw-bold">JAVASCRIPT FRAMEWORKS</h3>
          <p className="my-3 text-green text-start">
            <span className="fw-bold">jQuery:</span> Experienced in using jQuery
            for DOM manipulation and event handling, though increasingly moving
            towards modern JavaScript frameworks.
            <br />
            <span className="fw-bold">React js:</span> Experienced in building
            dynamic and scalable user interfaces using React.js, including state
            management and component-based architecture. <br />
            <span className="fw-bold">Next js:</span> Knowledgeable in using
            Next.js for server-side rendering, routing, and optimizing React
            applications for performance.
          </p>
          <div className="progress">
            <div
              className="progress-bar bg-green"
              role="progressbar"
              style={{ width: "91%" }}
              aria-valuenow="91"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              91%
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-3">
        <Link to="/portfolio" data-aos="zoom-in">
          <button className="button-green rounded-pill">SEE PORTFOLIO</button>
        </Link>
      </div>
    </main>
  );
};

export default AboutMe;
