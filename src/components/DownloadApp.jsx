import { Col } from "react-bootstrap";
import download from '../data/download.png'

const DownloadApp = () => {
    return ( 
        <Col className="bg-dark">
        <img src={download} style={{height:'2rem'}} />
        <span className="text-white ml-2">Install App</span>
        </Col>
     );
}
 
export default DownloadApp;