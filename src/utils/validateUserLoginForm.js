export const validateUserLoginForm = (values) => {
    const errors = {};

    if (values.username.length > 15 || values.username.length < 6) {
        errors.username = 'Must be at least 6 characters, and at most 15 characters.';
    }
    if (values.password.length < 8) {
        errors.password = 'Must be at least 8 characters.'
    }

    return errors;
}