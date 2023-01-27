import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/logo.png'
import './Navbar.css'
function Navbar() {
  return (
    <nav>

      <Nav className="justify-content-center">
        <div>
          <Nav.Item>
            <Nav.Link href="#guitars">Guitar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#bass'>Bass</Nav.Link>
          </Nav.Item>
        </div>
        <div className='logo'>
          <a href='#'>
            <img src={Logo} />
          </a>
        </div>
        <Nav.Item>
          <Nav.Link href='#pedals'>Pedals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#GuitarPicks'>
            Guitar Picks
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
}

export default Navbar;