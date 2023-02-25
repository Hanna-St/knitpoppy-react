import { Container, Row, Col } from 'reactstrap';

const Reviews = ( props ) => {
    const { feedbacksArray } = props;
    
    let reviewsArray = [];
    for (let i = feedbacksArray.length-3; i < feedbacksArray.length; i++) {
        reviewsArray.push(
            <Col className='text-center' sm='4'>
                <i class="fa-solid fa-quote-left fa-2xl"></i>
                <p>{feedbacksArray[i].description}</p>
            </Col>
        )
    }

    return (
        <Container>
            <Row className='text-center'>
                <h2>What My Customers Have To Say</h2>
            </Row>
            <Row className='row-content align-items-center'>
                {reviewsArray}
            </Row>
        </Container>
    )
}

export default Reviews;