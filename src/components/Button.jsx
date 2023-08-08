import '../styles/button.css'

function Button({ type, buttonClass, onClick, children, ariaLabel }) {
    return (
        <button type={type} className={buttonClass} onClick={onClick} aria-label={ariaLabel} >
            {children}
        </button>
    )
}

export function LightButton({ children }) {
    return (
        <Button buttonClass="btn btn-light">{children}</Button>
    )
}