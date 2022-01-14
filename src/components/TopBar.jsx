import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'

const TopBar = () => {
    return ( 
<div>
<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  className='justify-content-center top-bar'
>
  <Nav.Item>
    <Nav.Link href="/home">TRANDINGS</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">PODCASTS</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">MOODS AND GENRES</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">NEW RELEASES</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" disabled>DISCOVER</Nav.Link>
  </Nav.Item>
  
</Nav>

</div>

     );
}
 
export default TopBar;