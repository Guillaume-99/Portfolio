import "./Toast.scss";

function Toast({ message, isVisible }) {
    return (
        <div className={`toast ${isVisible ? "toast--visible" : ""}`} role="status" aria-live="polite" aria-atomic="true">
            <p>{message}</p>
        </div>
    );
}

export default Toast;
