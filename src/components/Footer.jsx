import { faGithub, faInstagram, faThreads, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="vw-100 p-5 bg-secondary-green">
      <h6 className="h3 text-green fw-bolder">MusaMusaK.</h6>
      <div className="hero-line my-2">
        <div
          className="border-green"
          style={{ borderBottom: "1px solid" }}
        ></div>
      </div>
      <div className="py-3">
        <h5>Contact Me</h5>
        <ul className="list-unstyled d-flex gap-2">
          <li className="border-green p-1 px-2 mx-1" style={{border: '1px solid', borderRadius: '100%'}}>
            <a href="mailto:musamusakannike@gmail.com" className="text-green text-decoration-none">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li className="border-green p-1 px-2 mx-1" style={{border: '1px solid', borderRadius: '100%'}}>
            <a href="https://github.com/musamusakannike" className="text-green text-decoration-none">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="border-green p-1 px-2 mx-1" style={{border: '1px solid', borderRadius: '100%'}}>
            <a href="https://www.instagram.com/musa.codes" className="text-green text-decoration-none">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="border-green p-1 px-2 mx-1" style={{border: '1px solid', borderRadius: '100%'}}>
            <a href="https://www.threads.net/@musa.codes" className="text-green text-decoration-none">
              <FontAwesomeIcon icon={faThreads} />
            </a>
          </li>
          <li className="border-green p-1 px-2 mx-1" style={{border: '1px solid', borderRadius: '100%'}}>
            <a href="https://x.com/musa_codes" className="text-green text-decoration-none">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
