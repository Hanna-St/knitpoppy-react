export const validateContactForm = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 2) {
        errors.name = 'Must be at least 2 characters.';
    } else if (values.name.length > 25) {
        errors.name = 'Must be 25 characters or less.'
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    if (!values.message) {
        errors.message = 'Required';
    } else if (values.message.length < 2) {
        errors.message = 'Must be at least 2 characters.';
    } else if (values.message.length > 1000) {
        errors.message = 'Must be 1000 characters or less.'
    }

    return errors;
};