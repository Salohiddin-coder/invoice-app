import "./empty.scss"

export const Empty = () => {
  return (
    <li className="empty">
      <h2 className="empty__title">There is nothing here</h2>
      <p className="empty__text">  Create an invoice by clicking the
        New Invoice button and get started</p>
    </li>
  )
}