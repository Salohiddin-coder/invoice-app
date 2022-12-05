import { Link } from "react-router-dom";

import "./go-back.scss";

export const Goback = ({ to }) => {
  return (
    <Link to={to} className="go-back">
      <span className="go-back__span">‹</span>
      <span className="go-back__text">Go back</span>
    </Link>
  )
}