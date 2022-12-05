import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { axiosInstans } from "../../services";
import { invoicesActions } from "../../store/slice";

import { Empty } from "../empty-filter";
import { InvoicesItem } from "../invoices-item";
import { Loader } from "../loader";

import "./invoices-list.scss";

export const InvoicesList = () => {
  const { invoicesList, loading } = useSelector(item => item.invoices)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!invoicesList || (invoicesList.length === 0) || (invoicesList.length === 1)) {
      dispatch(invoicesActions.setLoading(true))
      axiosInstans.get()
        .then(({ data }) => dispatch(invoicesActions.setInvoicesList(data)))
        .finally(() => dispatch(invoicesActions.setLoading(false)))
    }
  }, [])

  if (loading) {
    return <Loader className="loader--vh" />
  }

  return (
    <ul className="invoices-list">

      {invoicesList?.length !== 0 ?
        (invoicesList?.map(item => <InvoicesItem key={item.id} {...item} />))
        :
        <Empty />
      }
    </ul>
  )
}