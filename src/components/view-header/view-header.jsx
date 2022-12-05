import { useSelector } from "react-redux";
import { Button } from "../button";
import { InvoicesStatus } from "../invoices-status";

import "./view-header.scss";

export const ViewHeader = ({ id, paid, hadnleDeleteInvoice, deleting, handleClickPaid, paiding }) => {
  const { user } = useSelector(item => item.user);
  return (
    <div className="view-header">
      <div className="view-header__left">
        <p className="view-header__text">Status</p>
        <InvoicesStatus className={paid ? "" : "invoices-status--false"}>
          {
            paid ? "Paid" : "Pending"
          }
        </InvoicesStatus>
      </div>

      <div className="view-header__left">
        <Button to={user ? "edite" : "/login"} className="button--edite" state={{
          redirect: !user && `/view/${id}/edite`
        }} >
          Edit
        </Button>
        <Button disabled={deleting} to={!user && "/login"} state={{
          redirect: !user && `/view/${id}`
        }}
          className="button--delete" onClick={hadnleDeleteInvoice}>
          Delete

          {
            deleting && <i className="view-header__spinner fa fa-spinner fa-spin "></i>
          }
        </Button>
        {
          !paid &&
          <Button
            to={!user && "/login"}
            state={{
              redirect: !user && `/view/${id}`,
            }}
            disabled={paiding}
            onClick={handleClickPaid}
          >
            Mark as Paid
            {
              paiding && <i className="view-header__spinner fa fa-spinner fa-spin "></i>
            }
          </Button>
        }
      </div>
    </div>
  )
}