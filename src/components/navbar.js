import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Images/logo.png'
import classes from './appbar.module.scss'
const AppBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{background:'#035a58'}}light expand="md">
        <NavbarBrand  href="/"><img src={logo} className={classes.logo}  /></NavbarBrand>
        <NavbarToggler  onClick={toggle} />
        <Collapse  isOpen={isOpen} navbar>
          <Nav   className="mr-auto" navbar>
            <NavItem className={classes.main}>
              <NavLink>
              <Link  className={classes.dropitem1} to="/">How It Works</Link>
              </NavLink>
            </NavItem>
            <NavItem >
            <NavLink>
              <span style={{cursor:'Pointer'}} onClick={()=>window.location='https://portal.piaic.org/'} className={classes.dropitem1}>Apply</span>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown  className={classes.dropitem1} nav inNavbar>
              <DropdownToggle style={{color:'white'}} nav caret>               
              <span  className={classes.dropitem} >Available Programs</span>
              </DropdownToggle>  
              <DropdownMenu style={{backgroundColor: "#035a58"}} right>
                <DropdownItem className={classes.dropitem}>     
              <Link  className={classes.dropitem} to="/artificial-inteligence">Artificial Inteligence</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className={classes.dropitem}>                 
              <Link className={classes.dropitem} to="/cloud-native">Cloud Native and Web Computing Specilist</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className={classes.dropitem}>
              <Link className={classes.dropitem} to="/block-chain">Block chain</Link>
                </DropdownItem>
                <DropdownItem  divider />
                <DropdownItem className={classes.dropitem}>                
              <Link className={classes.dropitem} to="/iot">Internet Of Things</Link>

                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className={classes.dropitem1} nav inNavbar>
              <DropdownToggle style={{color:'white'}} nav caret>                
              <span className={classes.dropitem} to="/">Student Center</span>
              </DropdownToggle>
              <DropdownMenu style={{backgroundColor: "#035a58"}} right>
                <DropdownItem className={classes.dropitem}>      
                <span onClick={()=>window.location='https://www.piaic.org/docs/entrytestkarachi'} className={classes.dropitem} style={{cursor:'Pointer'}} >Karachi Entry Test Announcement</span>            
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className={classes.dropitem}>    
                <span onClick={()=>window.location='https://www.piaic.org/docs/scheduleofclasses'} className={classes.dropitem} style={{cursor:'Pointer'}} >Commencement of Classes</span>  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className={classes.dropitem1} nav inNavbar>
              <DropdownToggle  style={{color:'white'}} nav caret>
                <span className={classes.dropitem} >About</span>
              </DropdownToggle>
              <DropdownMenu style={{backgroundColor: "#035a58"}} right>
                <DropdownItem className={classes.dropitem}>                 
              <Link className={classes.dropitem} to="/about">The President</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className={classes.dropitem}>                  
              <Link className={classes.dropitem} to="/managementcommittee">Management Committee</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem >
            <NavLink>
              <Link className={classes.dropitem1} to="/">WIT</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppBar;