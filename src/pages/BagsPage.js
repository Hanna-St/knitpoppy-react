import { Container, Row } from "reactstrap";
import { WORKS } from "../app/shared/WORKS";
import SubHeader from "../components/SubHeader";
import LeftPictureCarousel from "../components/LeftPictureCarousel";
import RightPictureCarousel from "../components/RightPictureCarousel";

const BagsPage = () => {
    let bagsArray = [];
    for ( let i = 0; i < WORKS.length; i++){
        if (WORKS[i].type === 'bag') {
            bagsArray.push(WORKS[i]);
        }
    }
    
    let leftRightCarousel = [];
    for ( let i = 0; i < bagsArray.length; i++) {
        if (i%2 === 0) {
            leftRightCarousel.push(<LeftPictureCarousel item={bagsArray[i]} />);
        } else {
            leftRightCarousel.push(<RightPictureCarousel item={bagsArray[i]} />);
        }
    }

    return (
        <Container>
            <SubHeader current='Bags' detail={true}/>
            <Row className='text-center'>
                <h2>Bags</h2>
                {leftRightCarousel}
            </Row>
        </Container>
    );
}

export default BagsPage;