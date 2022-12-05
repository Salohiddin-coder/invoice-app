import { useSelector } from "react-redux";
import { AddInvoices } from "../add-invoices"
import { InvoicesFilter } from "../invoices-filter";

import "./invoices-header.scss";

export const InvoicesHeader = () => {
  const { invoicesList } = useSelector(item => item.invoices)

  return (
    <div className="invoices-header">
      <div>
        <h1 className="invoices-header__title">Invoices</h1>
        <p className="invoices-header__total">There are {invoicesList?.length} total invoices</p>
      </div>

      <div>
        <InvoicesFilter />
        <AddInvoices />
      </div>
    </div>
  )
}