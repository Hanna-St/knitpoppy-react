export const validateTrackingNumber = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 14) {
        error = 'Must be 14 characters.';
    } else if (value.length > 14) {
        error = 'Must be 14 characters.'
    }
    return error;
}