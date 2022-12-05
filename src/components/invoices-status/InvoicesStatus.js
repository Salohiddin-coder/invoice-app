import "./invoices-status.scss"

export const InvoicesStatus = ({ children, className = "" }) => {
  return (
    <button className={`invoices-status ${className}`}>
      <span className="invoices-status__span">•</span>
      <span className="invoices-status__text">{children}</span>
    </button>
  )
}