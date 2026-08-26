import "../css/style.css"
const showError = (errors, field) => {
    const error = errors.find(err => err.path === field);
    return error && (

            <p className="text-danger">
                {error.message}*
            </p>


    );
};
export default showError;