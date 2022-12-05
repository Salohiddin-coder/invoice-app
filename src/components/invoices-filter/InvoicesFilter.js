import { useDispatch } from "react-redux";

import { axiosInstans } from "../../services/axios";
import { invoicesActions } from "../../store/invoices-slice";

import "./invoices.scss";

export const InvoicesFilter = () => {
  const dispatch = useDispatch();

  const hadleFilterPaid = (evt) => {
    if (evt.target.value !== "") {
      dispatch(invoicesActions.setLoading(true))
      axiosInstans.get(evt.target.value === "all" ? "" : (evt.target.value === "paid" ? "?paid=true" : "?paid=false"))
        .then(data => dispatch(invoicesActions.setInvoicesList(data.data)))
        .finally(() => dispatch(invoicesActions.setLoading(false)))
    }
  }

  return (
    <>
      <select className="invoices-filter" onChange={hadleFilterPaid}>
        <option hidden value="">Filter by status</option>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="paid">Paid</option>
      </select>
    </>
  )
}