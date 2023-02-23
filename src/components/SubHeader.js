import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current, detail }) => {
    return (
            <Row>
                <Col>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/' className='text-info'>Home</Link>
                        </BreadcrumbItem>
                        {detail && (
                            <BreadcrumbItem>
                                <Link to='/works' className='text-info'>Works</Link>
                            </BreadcrumbItem>
                        )}
                        <BreadcrumbItem active>{current}</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>
    )
};

export default SubHeader;