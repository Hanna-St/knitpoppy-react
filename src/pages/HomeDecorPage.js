import { Container, Row } from "reactstrap";
import { WORKS } from "../app/shared/WORKS";
import SubHeader from "../components/SubHeader";
import LeftPictureCarousel from "../components/LeftPictureCarousel";
import RightPictureCarousel from "../components/RightPictureCarousel";

const HomeDecorPage = () => {
    let homeDecorArray = [];
    for ( let i = 0; i < WORKS.length; i++){
        if (WORKS[i].type === 'home_decor') {
            homeDecorArray.push(WORKS[i]);
        }
    }
    
    let leftRightCarousel = [];
    for ( let i = 0; i < homeDecorArray.length; i++) {
        if (i%2 === 0) {
            leftRightCarousel.push(<LeftPictureCarousel item={homeDecorArray[i]} />);
        } else {
            leftRightCarousel.push(<RightPictureCarousel item={homeDecorArray[i]} />);
        }
    }

    return (
        <Container>
            <SubHeader current='Home Decor' detail={true}/>
            <Row className='text-center'>
                <h2>Home Decor</h2>
                {leftRightCarousel}
            </Row>
        </Container>
    );
}

export default HomeDecorPage;