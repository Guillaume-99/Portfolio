import "./Toast.scss";

function Toast({ message, isVisible }) {
    if (!isVisible || !message) return null;

    return (
        <div className="toast toast--visible" role="status" aria-live="polite" aria-atomic="true">
            <p>{message}</p>
        </div>
    );
}

export default Toast;
