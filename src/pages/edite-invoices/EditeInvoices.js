import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Container, Goback, InvoicesForm, Loader, SiteBar } from "../../components"
import { axiosInstans } from "../../services";
import { invoicesActions } from "../../store/slice";

export const EditeInvoices = () => {

  const [invoices, setInvoices] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { invoicesList } = useSelector(item => item.invoices);
  const { token } = useSelector(item => item.user);

  const { id } = useParams();
  const invoicesItem = invoicesList?.find(item => item?.id === +id);


  useEffect(() => {
    if (!invoicesItem) {
      setLoading(true)
      axiosInstans.get(id)
        .then(({ data }) => setInvoices(data))
        .finally(() => setLoading(false))
    }
  }, [id])

  const hendleSubmitEdite = (to, email, dueDate, term, description, price) => {
    const editedInvoice = {
      ...(invoicesItem || invoices),
      email,
      to,
      term: +term,
      dueDate: dueDate,
      description,
      price: +price
    }
    setEditing(true)
    axiosInstans.put("/" + id, editedInvoice, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        dispatch(invoicesActions.setEdite(editedInvoice))
        navigate(`/view/${id}`)
      })
      .catch((err) => {
        if (err.response.status === 403) {
          alert("You can't edited, because it's a different user")
        }
      })
      .finally(() => setEditing(false))
  }

  return (
    <Container className="container--from container--view">
      <SiteBar />

      <Goback to={`/view/${id}`} />
      {
        loading ? <Loader className="loader--vh" />
          : <InvoicesForm defaultValue={invoicesItem || invoices} onSubmit={hendleSubmitEdite} editing={editing} />
      }
    </Container>
  )
} 