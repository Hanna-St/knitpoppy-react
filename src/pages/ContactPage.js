import { Col, Container, FormGroup, Label, Row, Button } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SubHeader from "../components/SubHeader";
import { validateContactForm } from "../utils/validateContactForm";

const ContactPage = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Container>
            <SubHeader current='Contact' />
            <Row className='text-center'>
                <h2>Contact</h2>
            </Row>
            <Row className='row-content align-items-center'>
                <Col md='9'>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: ''
                            }}
                        onSubmit={handleSubmit}
                        validate={validateContactForm}
                    >
                        <Form>
                            <FormGroup row>
                                <Label htmlFor='name' md='2'>
                                    Name<span class="text-danger">*</span>
                                </Label>
                                <Col md='4'>
                                    <Field
                                        className='form-control' 
                                        name='name'
                                        placeholder='Name'
                                    />
                                    <ErrorMessage name='name'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                                <Label htmlFor='email' md='1'>
                                    Email<span class="text-danger">*</span>
                                </Label>
                                <Col md='5'>
                                    <Field 
                                        className='form-control'
                                        name='email'
                                        placeholder='Email'
                                    />
                                    <ErrorMessage name='email'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md='2'>
                                    Message<span class="text-danger">*</span>
                                </Label>
                                <Col md='10'>
                                    <Field 
                                        className='form-control'
                                        name='message'
                                        as='textarea'
                                        rows='18'
                                    />
                                    <ErrorMessage name='message'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='info'>
                                        Send Message
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Formik>
                </Col>
                <Col md='3' className="text-center">
                    <h5>Follow Me</h5>
                    <div>
                        <a href="http://instagram.com/" class="text-info p-2"><i class="fa-brands fa-instagram fa-xl"></i></a>
                        <a href="http://facebook.com/" class="text-info p-2"><i class="fa-brands fa-facebook fa-xl"></i></a>
                        <a href="http://youtube.com/" class="text-info p-2"><i class="fa-brands fa-youtube fa-xl"></i></a>
                    </div>
                    <hr/>
                    <h5>Contact Info</h5>
                    <a role="button" class="text-info" href="tel:+12098457234"><i class="fa fa-phone"></i> 1-209-845-7234</a><br />
                    <a role="button" class="text-info" href="mailto:knit.poppy@gmail.com"><i class="fa-solid fa-envelope"></i> knit.poppy@gmail.com</a>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;