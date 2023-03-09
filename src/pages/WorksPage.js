import { Container, Row, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";

const WorksPage = () => {
    return (
        <Container>
            <SubHeader current='Works' />
            <Row className='text-center'>
                <Col xs='12'>
                    <h2>Works</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default WorksPage;