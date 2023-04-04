export const validateTrackingOrderNumber = (values) => {
    let errors;

    if (!values.orderNumber) {
        errors.orderNumber = 'Required';
    } else if (values.orderNumber.length < 9) {
        errors.orderNumber = 'Must be 9 characters.';
    } else if (values.orderNumber.length > 9) {
        errors.orderNumber = 'Must be 9 characters.'
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
};