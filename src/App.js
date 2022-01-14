import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import DownloadApp from "./components/DownloadApp";
import TopBar from "./components/TopBar";
import { useEffect, useState } from "react";
import AlbumCover from "./components/AlbumCover";

function App() {
  let [albumCover, setAlbumCover] = useState("");
  let [artistName, setArtistName] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
        );
        if (response.ok) {
          let data = await response.json();
          console.log(data.data[0].artist.name);
          setAlbumCover(data.data[0].album.cover);
          setArtistName(data.data[0].artist.name);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App ">
      <Row>
        <Col md={2}>
          <Sidebar />

          <DownloadApp />
        </Col>
        <Col md={10} className="text-white ">
          <Row>
            <Col>
              <TopBar />
            </Col>
          </Row>
          <Row>
            <h1 className="mt-5">#THROWBACKTHURSDAY</h1>
          </Row>

          <Row>
            <AlbumCover image={albumCover} artistName={artistName} />
          </Row>
        </Col>
        <MusicPlayer />
      </Row>
    </div>
  );
}

export default App;
