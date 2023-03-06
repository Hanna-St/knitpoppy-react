import { Container, Row, Col, Button } from 'reactstrap';
import { useState } from 'react';

const FeaturedCollection = (props) => {
    const { imageWorks } = props;
    
    let initialArray = [];
    for (let i = 0; i < imageWorks.length; i++) {
        if(imageWorks[i].featured) {
            initialArray.push(
                <Col className='text-center' sm='4'>
                    <img class='d-flex img-thumbnail' src={imageWorks[i].images[0]} alt=""/>
                </Col>
            )
            if(initialArray.length === 3) {
                break;
            }
        }
        
    }

    const [featuredArray, setFeaturedArray] = useState(initialArray);

    const handleViewAll = () => {
        let allFeaturedArray = [];
        for (let i = 0; i < imageWorks.length; i++) {
            if(imageWorks[i].featured) {
                allFeaturedArray.push(
                    <Col className='text-center pb-4' sm='4'>
                        <img class='d-flex img-thumbnail' src={imageWorks[i].images[0]} alt=""/>
                    </Col>
                )
            }
        }
        setFeaturedArray(allFeaturedArray);
    }

    return (
        <Container>
            <Row className='text-center'>
                <h2>Featured Collection</h2>
            </Row>
            <Row className='row-content align-items-center'>
                {featuredArray}
            </Row>
            <Row>
                <Col className='text-center'>
                    <Button type='submit' onClick={() => handleViewAll()} color='info'>VIEW ALL</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default FeaturedCollection;