import { date } from "../../services";
import "./body-view.scss";

export const BodyView = ({ description, to, id, price, createdDate, email, dueDate }) => {
  return (
    <div className="body-view">
      <div className="body-view__inner">
        <div className="body-view__id">
          <p><span>#</span> UZ{id}</p>
          <h3>{description}</h3>
        </div>

        <div className="body-view__info">
          <div>
            <h3>Invoice Date</h3>
            <p>{createdDate?.slice(8, 10)} {date(createdDate?.slice(5, 7))} {createdDate?.slice(0, 4)}</p>
          </div>

          <div>
            <h3>Bill To</h3>
            <p>{to}</p>
          </div>

          <div>
            <h3>Sent to</h3>
            <p>{email}</p>
          </div>

          <div>
            <h3>Payment Due</h3>
            <p>{dueDate?.slice(8, 10)} {date(dueDate?.slice(5, 7))} {dueDate?.slice(0, 4)}</p>
          </div>
        </div>

        <div className="body-view__money">
          <h3>Amount Due</h3>
          <p>£ {price}</p>
        </div>
      </div>
    </div>
  )
}