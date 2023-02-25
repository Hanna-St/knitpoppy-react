import { Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='About Us' />
            <Row className='text-center'>
                <h2>About Us</h2>
            </Row>
        </Container>
    );
};

export default ContactPage;