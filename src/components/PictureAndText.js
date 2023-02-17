import { Container, Row, Col } from 'reactstrap';

const PictureAndText = (props) => {
    const { picture, title, text } = props;

    return (
        <Container>
            <Row className='align-items-center row-content'>
                <Col sm='6'>
                    <img className='d-flex img-thumbnail' src={picture} alt=""/>
                </Col>
                <Col className='text-center' sm='6'>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default PictureAndText;