import "./empty.scss"
import noContent from "../../assets/images/no-content.png"

export const Empty = () => {
  return (
    <li className="empty">
      <h2 className="empty__title">Sorry, invoices not found for your request</h2>
      <p className="empty__text">  Please, try another invoices)))</p>
      <img src={noContent} alt="" />
    </li>
  )
}