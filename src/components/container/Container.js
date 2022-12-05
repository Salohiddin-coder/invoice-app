import "./container.scss"

export const Container = ({ className = "", children }) => {
  return <div className={`container ${className}`}>{children}</div>
}