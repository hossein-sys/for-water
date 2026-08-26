const VisiblePassword = ({setVisible , field , visible}) => {
    const toggleVisibility = (field) => {
        setVisible(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };
    return(
        <>
            <button
                type="button"
                className="password-toggle"
                onClick={() => toggleVisibility(field)}
            >
                <i
                    className={`fa-solid ${
                        visible[field]
                            ? "fa-eye-slash"
                            : "fa-eye"
                    }`}
                ></i>
            </button>
        </>
    )
}
export default VisiblePassword