const Alert = ({ type, message }) => {
    return (
        <div className="mt-2">
            <div className={type} role="alert">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Alert;