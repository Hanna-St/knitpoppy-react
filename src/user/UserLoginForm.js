import { useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateUserLoginForm } from '../utils/validateUserLoginForm';

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const handleLogin = (values) => {
        console.log(values);
        setLoginModalOpen(false);
    }

    return (
        <>
        <span>
        <Button 
            outline
            onClick={() => setLoginModalOpen(true)}
            style={{ border: 'none', background: 'none' }}
        >
            <i class="fa-solid fa-user fa-2xl icon-color"></i>
        </Button>
        </span>
        <Modal isOpen={loginModalOpen}>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={handleLogin}
                validate={validateUserLoginForm}
            >
                <Form>
                    <ModalHeader tag='h3' toggle={() => setLoginModalOpen(false)}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label htmlFor='username'>Username</Label>
                            <Field 
                                id='username'
                                name='username'
                                placeholder='Username'
                                className='form-control'
                            />
                            <ErrorMessage name='username'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>Password</Label>
                            <Field 
                                id='password'
                                name='password'
                                placeholder='Password'
                                className='form-control'
                            />
                            <ErrorMessage name='password'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type='submit' color="info">
                            Login
                        </Button>{' '}
                        <Button color="danger" onClick={() => setLoginModalOpen(false)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            </Formik>
        </Modal>
        </>
    )
}

export default UserLoginForm;