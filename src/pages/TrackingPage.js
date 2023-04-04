import { Container, Row, Col, FormGroup, Label, Button } from "reactstrap";
import SubHeader from "../components/SubHeader";
import { Formik,Form, Field, ErrorMessage } from "formik";
import { validateTrackingOrderNumber } from "../utils/validateTrackingOrderNumber";
import { validateTrackingNumber } from "../utils/validateTrackingNumber";

const TrackingPage = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };
    return (
        <Container>
            <SubHeader current='Tracking' />
            <Row className='row-content'>
                <Col xs='12' className="text-center">
                    <h2>Track Your Order</h2>
                    <br/>
                </Col>
                <Col md={{ size: 10, offset: 1 }}>
                    <Row className='align-items-center row-content'>
                        <Col md={5}>
                            <Formik
                                initialValues={{
                                    orderNumber: '',
                                    email: ''
                                    }}
                                onSubmit={handleSubmit}
                                validate={validateTrackingOrderNumber}
                            >
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="orderNumber">
                                        Order Number
                                        </Label>
                                        <Field
                                            className='form-control' 
                                            name='orderNumber'
                                            placeholder=''
                                        />
                                        <ErrorMessage name='orderNumber'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email">
                                        Email
                                        </Label>
                                        <Field
                                            className='form-control'
                                            name='email'
                                            placeholder=''
                                        />
                                        <ErrorMessage name='email'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col md={10}>
                                            <Button type='submit' color='info'>
                                                Track
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Formik>
                        </Col>
                        <Col md={2} className='text-center'>
                            or
                        </Col>
                        <Col md={5}>
                            <Formik
                                initialValues={{
                                    trackingNumber: ''
                                    }}
                                onSubmit={handleSubmit}
                                validate={validateTrackingNumber}
                            >
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="trackingNumber">
                                        Tracking Number
                                        </Label>
                                        <Field
                                            className='form-control'
                                            name='trackingNumber'
                                            placeholder=''
                                            validate={validateTrackingNumber}
                                        />
                                        <ErrorMessage name='trackingNumber'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col md={10}>
                                            <Button type='submit' color='info'>
                                                Track
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Formik>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default TrackingPage;