import { 
    Navbar, 
    NavbarBrand, 
    Collapse, 
    NavbarToggler, 
    Nav, 
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, 
    Container, 
    Row, 
    Col 
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import PoppyLogo from '../app/assets/img/logo.png';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <Navbar light expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={PoppyLogo}  alt='poppy logo' className='float-start' />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='me-auto h4' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle nav caret>
                            Works
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag={Link} to="/bags">Bags</DropdownItem>
                            <DropdownItem tag={Link} to="/home_decor">Home Decor</DropdownItem>
                            <DropdownItem>Shoes</DropdownItem>
                            <DropdownItem>Carpits</DropdownItem>
                            <DropdownItem>Hats</DropdownItem>
                            <DropdownItem>Kitchen Accessories</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink className='nav-link' to='/tracking'>Track your order</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                    </NavItem>
                </Nav>
                    <span className='ml-auto'>
                        <Container>
                            <Row >
                                <Col className='text-center'>
                                <i class="fa-solid fa-magnifying-glass fa-xl text-info me-2"></i>
                                <i class="fa-solid fa-user fa-xl text-info me-2"></i>
                                <i class="fa-solid fa-cart-shopping fa-xl text-info me-2"></i>
                                </Col>
                            </Row>
                        </Container>
                    </span>
            </Collapse>
        </Navbar>
    );
}

export default Header;