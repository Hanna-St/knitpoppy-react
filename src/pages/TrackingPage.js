import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import SubHeader from "../components/SubHeader";

const TrackingPage = () => {
    return (
        <Container>
            <SubHeader current='Tracking' />
            <Row className='text-center row-content'>
                <h2>Track Your Order</h2>
            </Row>
            <Form className="border">
                <Row className='align-items-center row-content'>
                    <Col md={5}>
                    <FormGroup>
                        <Label for="orderNumber">
                        Order Number
                        </Label>
                        <Input
                        id="orderNumber"
                        name="number"
                        placeholder=""
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                        Email
                        </Label>
                        <Input
                        id="exampleEmail"
                        name="email"
                        placeholder=""
                        type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Col md={10}>
                            <Button type='submit' color='info'>
                                Track
                            </Button>
                        </Col>
                    </FormGroup>
                    </Col>
                    <Col md={2} className='text-center'>
                    or
                    </Col>
                    <Col md={5}>
                    <FormGroup>
                        <Label for="trackingNumber">
                        Tracking Number
                        </Label>
                        <Input
                        id="trackingNumber"
                        name="number"
                        placeholder=""
                        />
                    </FormGroup>
                    <FormGroup>
                        <Col md={10}>
                            <Button type='submit' color='info'>
                                Track
                            </Button>
                        </Col>
                    </FormGroup>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default TrackingPage;