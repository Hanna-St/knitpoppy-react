import { Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const TrackingPage = () => {
    return (
        <Container>
            <SubHeader current='Tracking' />
            <Row className='text-center'>
                <h2>Track Your Order</h2>
            </Row>
        </Container>
    );
};

export default TrackingPage;