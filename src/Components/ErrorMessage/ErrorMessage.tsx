
const ErrorMessage = ({ Errors  = null, Name = "", type = "alert"}) => {
    let className = type === "feedback" ? "invalid-feedback" : "alert alert-danger";

    if (Errors && typeof Errors === "string") {
        return (
            <div className={`${className}`} style={{ fontSize: "1em" }}>
                {Errors}
            </div>
        );
    }
    return (
        <>
            {Errors && Errors[Name] && (
                <div className={`${className}`} >
                    {Errors[Name]}
                </div>
            )}
        </>
    );
};

export default ErrorMessage;