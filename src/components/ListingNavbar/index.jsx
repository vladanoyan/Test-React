import React from 'react';
import { NavLink } from 'react-router-dom';
import TiIconPack from 'react-icons/lib/fa/align-justify';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import LogoBar from '../../resource/images/logoBar.png';
import cs from './component.pcss';


class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar light toggleable className={cs.Navbar}>
          <TiIconPack className={cs.icon} onClick={this.toggle} />
          <NavItem>
            <NavLink to="/" className={cs.brend}>
              <img src={LogoBar} alt="logo" />
              L<span>O</span>go</NavLink>
          </NavItem>
          <Collapse className={cs.collapse} isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink activeClassName={`${cs.active1}`} to="/app/contacts" className={cs.link}>Contact us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={`${cs.active1}`} to="/app/terms" className={cs.link}>Terms of Service</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarMenu;
