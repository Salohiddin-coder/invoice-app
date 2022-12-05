import { Link } from "react-router-dom"
import "./button.scss"

export const Button = ({ className = "", children, to, ...props }) => {
  return (
    <>
      {
        !to ?
          <button className={`button ${className}`} {...props}>{children}</button>
          : <Link to={to} className={`button button--link ${className}`} {...props}>{children}</Link>
      }
    </>
  )
}