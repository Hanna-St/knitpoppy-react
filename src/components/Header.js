import { Navbar, NavbarBrand } from 'reactstrap';
import PoppyLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar light sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={PoppyLogo}  alt='poppy logo' />
            </NavbarBrand>
        </Navbar>
    );
}

export default Header;