import { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container, 
  Row, 
  Col
} from 'reactstrap';


const RightPictureCarousel = (props) => {
    const { item } = props;
    const images = item.images;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = images.map((image) => {
        return (
          <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={image.id}
          >
            <img src={image}  width='100%' alt='' />
          </CarouselItem>
        );
    });

    return (
        <Container>
            <Row className='align-items-center row-content'>
                <Col className='text-center' sm='6'>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>Size: {item.size}</p>
                    <p>Price: {item.price} $</p>
                </Col>
                <Col sm='6'>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    
                    >
                    <CarouselIndicators
                        items={images}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                    />
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default RightPictureCarousel;