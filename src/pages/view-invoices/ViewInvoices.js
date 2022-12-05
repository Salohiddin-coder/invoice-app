import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Goback, Loader, SiteBar, BodyView, HeaderView } from "../../components";
import { axiosInstans } from "../../services";
import { invoicesActions } from "../../store/slice";

export const ViewInvoices = () => {
  const { invoicesList } = useSelector(item => item.invoices);
  const { user, token } = useSelector(item => item.user)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [invoices, setInvoices] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [paiding, setPainding] = useState(false)

  const { id } = useParams();
  const invoicesItem = invoicesList?.find(item => item.id === +id);
  const invoicesId = invoices?.id === +id

  useEffect(() => {
    if (!invoicesItem) {
      setLoading(true)
      axiosInstans.get(id)
        .then(({ data }) => setInvoices(data))
        .finally(() => setLoading(false))
    }
  }, [id])


  const hadnleDeleteInvoice = () => {
    setDeleting(true)
    axiosInstans.delete(`/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      dispatch(invoicesActions.setDelete(id))
      navigate("/")
    })
      .catch((err) => {
        if (err.response.status === 403) {
          alert("You can't delete because it's a different user")
        }
      })
      .finally(() => setDeleting(false))
  }

  const handleClickPaid = () => {

    const editedPiad = {
      userId: user.id,
      paid: true,
    }
    setPainding(true);
    axiosInstans.patch(`/${id}`, editedPiad, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(({ data }) => {
      dispatch(invoicesActions.setPaid(data))
    }).catch((err) => {
      if (err.response.status === 403) {
        alert("You can't edited pending because it's a different user")
      }
    })
      .finally(() => setPainding(false))
  }

  return (
    <Container className="container--view">
      <SiteBar />
      <Goback to={`/`} />
      {
        !loading ?
          <>
            {(invoicesItem || invoicesId) ?
              <>
                <HeaderView
                  {...(invoicesItem || invoices)}
                  deleting={deleting}
                  hadnleDeleteInvoice={hadnleDeleteInvoice}
                  handleClickPaid={handleClickPaid}
                  paiding={paiding}
                />
                <BodyView {...(invoicesItem || invoices)} />
              </>
              : <h3>no such invoice</h3>
            }
          </>
          :
          <Loader className="loader--vh" />
      }

    </Container>
  )
}