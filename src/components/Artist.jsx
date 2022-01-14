import { Row, Col } from "react-bootstrap";
import nane from '../data/nane.jpg'
import verified from '../data/check.png'

const Artist = () => {

 
    return (
        <div>

            <img className = "jumbo w-100" src={nane}  />

        
        <div className="artist d-block ml-4" >
            <div className=""><img src={verified} style={{height: '1rem'}} alt="" srcSet="" />Artist verified</div>
            <div>
            <h1 style={{fontSize: '5rem'}}>Nane</h1>
            </div>
            
            <p>301,369 monthly listeners</p>
        </div>
     

        </div> 
     );
}
 
export default Artist;