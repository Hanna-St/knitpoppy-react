import { Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const WorksPage = () => {
    return (
        <Container>
            <SubHeader current='Works' />
            <Row className='text-center'>
                <h2>Works</h2>
            </Row>
        </Container>
    );
};

export default WorksPage;