import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Goback, InvoicesForm, Loader, SiteBar } from "../../components";
import { axiosInstans } from "../../services";
import { invoicesActions } from "../../store/invoices-slice";

export const AddInvoices = () => {
  const dispatch = useDispatch();
  const { invoicesList } = useSelector(item => item.invoices);
  const { user, token } = useSelector(item => item.user);
  const [invoices, setInvoices] = useState(null)

  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false)


  const navigate = useNavigate();

  useEffect(() => {
    if (!invoicesList) {
      setLoading(true)
      axiosInstans.get()
        .then(({ data }) => setInvoices(data))
        .finally(() => setLoading(false))
    }
  }, [])

  const onSubmit = (to, email, dueDate, term, description, price) => {
    let createdNewDate = new Date();

    const newInvoic = {
      userId: +user.id,
      id: Math.floor(Math.random() * 10000),
      paid: false,
      email,
      to,
      term: +term,
      createdDate: createdNewDate.toISOString(),
      dueDate: dueDate,
      description,
      price: +price
    }
    setAdding(true)
    axiosInstans.post("", newInvoic, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      dispatch(invoicesActions.setInvoicesList([...(invoicesList || invoices), newInvoic]))
      navigate("/")
    })

      .finally(() => setAdding(false))

  }

  return (
    <Container className="container--from container--view">
      <SiteBar />
      <Goback to="/" />

      {loading ?
        <Loader />
        :
        <InvoicesForm onSubmit={onSubmit} adding={adding} />
      }
    </Container>
  )
}