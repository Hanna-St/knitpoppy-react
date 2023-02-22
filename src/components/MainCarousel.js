import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container, 
  Row, 
  Col
} from 'reactstrap';

const MainCarousel = (props) => {
    const { items } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
          <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.image}
          >
            <img src={item.image} width='100%' alt='' />
            <CarouselCaption
                captionText={item.subtitle}
                captionHeader={item.title}
            />
          </CarouselItem>
        );
    });
    
      return (
        <Container>
            <Row className='row-content'>
                <Col  sm='9' className='mx-auto'>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    
                    >
                    <CarouselIndicators
                        items={items}
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
    );
}

export default MainCarousel;