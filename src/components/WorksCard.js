import {Card, CardImg, CardImgOverlay, CardTitle, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

const WorksCard = (props) => {
const { worksTypeImg } = props;

let worksTypeArray = [];
for (let i = 0; i < worksTypeImg.length; i++) {
    worksTypeArray.push(
        <Col md='4' className='p-3 text-center '>
            <Link to={`${worksTypeImg[i].url}`}>
                <Card>
                    <CardImg 
                        top
                        width='100%' 
                        src={worksTypeImg[i].image} 
                        alt={worksTypeImg[i].title} 
                        style={{
                            height: 400,
                            width: 373
                        }}/>
                    <CardImgOverlay>
                        <CardTitle>{worksTypeImg[i].title}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </Link>    
        </Col>
    )
}

return (
    <Row className='row-content align-items-center'>
        {worksTypeArray}
    </Row>
    
);

}

export default WorksCard;