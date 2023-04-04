import { Container } from "reactstrap";
import PictureAndText from "../components/PictureAndText";
import DesignerPhoto from '../app/assets/img/designer-foto.jpg';
import Reviews from "../components/Reviews";
import { FEEDBACKS } from "../app/shared/FEEDBACKS";
import FeaturedCollection from "../components/FeaturedCollection";
import { WORKS } from '../app/shared/WORKS';
import { CAROUSEL } from "../app/shared/CAROUSEL";
import MainCarousel from '../components/MainCarousel';
import SubHeader from "../components/SubHeader";
import GoToTop from "../components/GoToTop";

const HomePage = () => {
    const title = "Handmade With Love";
    const text = "I'm proud to say that everything in my works is 100% handmade with love. I believe that handmade products are superior because they are customizable and unique, made of natural quality material. All knitted things were in fashion, are and will be. Thank you for supporting my small handmade business!";

    return (
        <Container>
            <SubHeader current='Home' />
            <MainCarousel items={CAROUSEL} />
            <Reviews feedbacksArray={FEEDBACKS} />
            <PictureAndText picture={DesignerPhoto} title={title} text={text} />
            <FeaturedCollection imageWorks={WORKS} />
            <GoToTop />
        </Container>
    )
};

export default HomePage;