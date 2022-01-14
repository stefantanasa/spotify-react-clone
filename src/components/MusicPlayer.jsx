import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import player from "../data/player.png";
import playbtn from "../data/play-button.png";
import next from "../data/forward-button.png";
import back from "../data/rewind-button.png";
import shufle from "../data/shufle.png";
import repeat from "../data/repeat.png";
import mic from "../data/mic.png";
import speakers from "../data/speakers.png";
import volume from "../data/volume.png";

const MusicPlayer = () => {
  let now = 60;
  return (
    <div className="fixed-bottom">
      <Row
        className="d-flex text-white"
        style={{ backgroundColor: "rgb(29, 29, 27)", overflow: 'hidden' }}
      >
        <Col md={1} className="justify-content-start mt-2">
          <img
            style={{ height: "5rem" }}
            src="https://www.genius-lyrics.com/wp-content/uploads/2021/11/Dynasties-Dystopia-Lyrics-Denzel-Curry.jpg"
            alt=""
          />
        </Col>
        <Col md={1}>
          <p>Dynasties & Dystopia</p>
          <p>Denzel curry </p>
        </Col>
        <Col md={1} className="d-flex justify-content-start align-items-center">
          <span className="mr-2">
            <svg
              aria-hidden="true"
              height="1rem"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              className="svg-inline--fa fa-heart fa-w-16  "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="white"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>
          </span>
          <span>
            <img src={player} className="" style={{ height: "1rem" }} />
          </span>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Row>
            <div className="">
              <img src={shufle} className="m-3" style={{ height: "1rem" }} />
              <img src={back} className="" style={{ height: "1.5rem" }} />
              <img src={playbtn} className="m-2" style={{ height: "1.5rem" }} />
              <img src={next} className="" style={{ height: "1.5rem" }} />
              <img src={repeat} className="ml-3" style={{ height: "1rem" }} />

              <div>
                <ProgressBar
                  className=""
                  style={{ width: "60rem", height: "0.25rem" }}
                  now={now}
                  visuallyHidden
                />
              </div>
            </div>
          </Row>
        </Col>
        <Col md={3} className="d-flex  align-items-center">
          <span>
            <img src={mic} className="ml-3" style={{ height: "1rem" }} />
          </span>
          <span>
            <img src={speakers} className="ml-3" style={{ height: "1rem" }} />
          </span>
          <span>
            <img src={volume} className="ml-3" style={{ height: "1rem" }} />
          </span>
          <div>
            <ProgressBar
              className="m-4"
              style={{ width: "7rem", height: "0.5rem" }}
              now={now}
              visuallyHidden
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MusicPlayer;
