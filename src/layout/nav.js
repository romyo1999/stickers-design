
import logo from '../images/logo.svg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {  NavLink, useNavigate } from 'react-router-dom';
import BoxPopup from '../component/BoxPopup';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSignOut, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie';
import { useUserContext } from '../providers/UserProvider';
import { useFavoritContext } from '../providers/FavoritProvider';

function NavBar() {
  const {user,reload,setReload}=useUserContext()
  const {counter ,setCounter}=useFavoritContext()
  console.log(counter)
  const [cookies,setCookies,removeCookie]=useCookies(["auth_token"])
  const  auth_token=cookies["auth_token"]
  const fullName=localStorage.getItem("user_name")
  const navigate=useNavigate()
  const [term,setTerm]=useState("")
  const [Route,setRoute]=useState("")
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);

  };

const handleSearch=()=>{
  navigate(`/search/${term.replace(' ','+')}`)
}

  const LogOut=()=>{
    removeCookie('auth_token',{path:"/"})
    localStorage.removeItem('user_id')
    localStorage.removeItem('user_name')
    setReload(reload+2)
    setCounter(counter+3)
    navigate('/login')
  }

  return (
    <div >

        <Navbar key={"md"} expand={"md"} className=" mb-3 navbar" style={{background:"#ADD8E6"}}>
          <Container fluid>
            <Navbar.Brand ><NavLink onClick={()=>setRoute("")}  to={'/'}><img style={{width:"120px"}}  className="img-fluid" alt="logo img"  src={logo} /></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"md"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Form className="d-flex w-75 ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 w-100 ms-5 "
                    aria-label="Search"
                    onChange={(e)=>setTerm(e.target.value)}
                  />
                  <Button variant="outline-success" onClick={handleSearch}>Search</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
               
                  <Nav.Link > <NavLink  onClick={()=>setRoute("/stickers")}  to={'/stickers'} className={"navlink"}>Stickers</NavLink></Nav.Link>
                  <Nav.Link ><NavLink  onClick={()=>setRoute("/design")}  to={'/design'} className={"navlink"}>Designs</NavLink></Nav.Link>
                  <Nav.Link onClick={togglePopup} ><span className={"navlink"}>Filter</span></Nav.Link>
                  
                  {
                    auth_token?(
                      <NavDropdown
                      className='navlink'
                        title="Account"
                        id={`offcanvasNavbarDropdown-expand-${"md"}`}
                      >
                        <NavDropdown.Item>{fullName}</NavDropdown.Item>
                        <NavDropdown.Item >
                        <NavLink to={'/favorit'} className={"navlink"}><FontAwesomeIcon icon={faHeart} className='me-1'/>Favorite</NavLink>
                        </NavDropdown.Item>
                        {
                          user.role==="admin" &&(
                        <NavDropdown.Item >
                        <NavLink to={'/admin/products'} className={"navlink"}><FontAwesomeIcon icon={faUserSecret} className='me-1'/>Admin</NavLink>
                        </NavDropdown.Item>
                          )
                        }

                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={LogOut} >
                          <span className={"navlink"} ><FontAwesomeIcon icon={faSignOut} className='me-1'/>Logout</span>
                        </NavDropdown.Item>
                      </NavDropdown>
                    ):(
                  <Nav.Link ><NavLink    to={'/login'} className={"navlink"}>Sign in</NavLink></Nav.Link>
                    )
                  }
                 
                </Nav>
     
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <BoxPopup showPopup={showPopup} togglePopup={togglePopup} route={Route} />
    </div>
  );
}

export default NavBar;