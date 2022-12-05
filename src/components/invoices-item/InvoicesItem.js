import { Link } from "react-router-dom"
import { InvoicesStatus } from "../invoices-status/InvoicesStatus"
import "./invoices-item.scss"

export const InvoicesItem = ({ to, dueDate, id, price, paid }) => {
  return (
    <li className="invoices-item">
      <Link to={`/view/${id}`} className="invoices-item__link"></Link>
      <div className="invoices-item__left">
        <p className="invoices-item__id"><span>#</span>UZ{id}</p>
        <p className="invoices-item__date">Due  {dueDate}</p>
        <p className="invoices-item__name">{to}</p>
      </div>
      <div className="invoices-item__right">
        <p className="invoices-item__money">£ {price}</p>
        <InvoicesStatus className={paid ? "" : "invoices-status--false"}>
          {
            paid ? "Paid" : "Pending"
          }
        </InvoicesStatus>

        <span>›</span>
      </div>
    </li>
  )
}