import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";

const HomeDecorPage = () => {
    return (
        <Container>
            <SubHeader current='Home Decor' detail={true}/>
        </Container>
    );
}

export default HomeDecorPage;