export const validateTrackingForm = (values) => {
    const errors = {};

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

    if (!values.orderNumber & !values.email) {
        if (!values.trackingNumber) {
            errors.trackingNumber = 'Required';
        } else if (values.trackingNumber.length < 14) {
            errors.trackingNumber = 'Must be 14 characters.';
        } else if (values.trackingNumber.length > 14) {
            errors.trackingNumber = 'Must be 14 characters.'
        }
    }

    return errors;
};