import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";

const BagsPage = () => {
    return (
        <Container>
            <SubHeader current='Bags' detail={true}/>
        </Container>
    );
}

export default BagsPage;