import { Container, Col, Row } from 'reactstrap';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col sm='6' className='text-center'>
                        <h5>Links</h5>
                        {/* <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Leave Feedback</Link>
                            </li>
                            <li>
                                <Link to='/'>Shipping&Returns</Link>
                            </li>
                            <li>
                                <Link to='/'>Contact</Link>
                            </li>
                        </ul> */}
                    </Col>
                    <Col sm='6' className='text-center'>
                        <h4>STAY CONNECTED</h4>
                        <h6>Get Amazing Discounts, Promotions Directly Into Your Inbox.</h6>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <h5>Social</h5>
                        <a href="http://instagram.com/" class="text-info"><i class="fa-brands fa-instagram fa-2xl"></i></a>{' '}
                        <a href="http://facebook.com/" class="text-info"><i class="fa-brands fa-facebook fa-2xl"></i></a>{' '}
                        <a href="http://youtube.com/" class="text-info"><i class="fa-brands fa-youtube fa-2xl"></i></a>{' '}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;