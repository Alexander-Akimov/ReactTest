import { useState } from 'react';

const Alert = ({ type = "Information", heading, children, closable, onClose }) => {
    const [visible, setVisible] = useState(true);
    if (!visible) {
        return null;
    }
    const handleClick = () => {
        setVisible(false);
        if (onClose) {
            onClose();
        }
    };
    return (
        <div>
            <div>
                <span role="img" aria-label={type === "warning" ? "Warning" : "Information"}>{type === "warning" ? "⚠" : "ℹ"}</span>
                <span>{heading}</span>
            </div>
            {closable && (
                <button aria-label="Close" onClick={handleClick}>
                    <span role="img" aria-label="Close">❌</span>
                </button>
            )}
            <div>{children}</div>
        </div>
    );
};

export default Alert