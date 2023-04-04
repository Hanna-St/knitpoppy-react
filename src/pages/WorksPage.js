import { Container, Row, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";
import WorksCard from '../components/WorksCard';
import { WORKSTYPE } from "../app/shared/WORKSTYPE";

const WorksPage = () => {
    return (
        <Container>
            <SubHeader current='Works' />
            <Row className='text-center'>
                <Col xs='12'>
                    <h2>Works</h2>
                </Col>
                <Col md='12'>
                    <WorksCard worksTypeImg={WORKSTYPE}/>
                </Col>
            </Row>
        </Container>
    );
};

export default WorksPage;