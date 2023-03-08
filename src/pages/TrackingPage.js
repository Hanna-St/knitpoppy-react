import { Container, Row, Col, FormGroup, Label, Button } from "reactstrap";
import SubHeader from "../components/SubHeader";
import { Formik,Form, Field, ErrorMessage } from "formik";
import { validateTrackingForm } from "../utils/validateTrackingForm";

const TrackingPage = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };
    return (
        <Container>
            <SubHeader current='Tracking' />
            <Row className='text-center row-content'>
                <h2>Track Your Order</h2>
            </Row>
            <Formik
                initialValues={{
                    orderNumber: '',
                    email: '',
                    trackingNumber: ''
                    }}
                onSubmit={handleSubmit}
                validate={validateTrackingForm}
                    >
                <Form className="border">
                    <Row className='align-items-center row-content'>
                        <Col md={5}>
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
                        </Col>
                        <Col md={2} className='text-center'>
                        or
                        </Col>
                        <Col md={5}>
                        <FormGroup>
                            <Label htmlFor="trackingNumber">
                            Tracking Number
                            </Label>
                            <Field
                                className='form-control'
                                name='trackingNumber'
                                placeholder=''
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
                        </Col>
                    </Row>
                </Form>
            </Formik>
        </Container>
    );
};

export default TrackingPage;