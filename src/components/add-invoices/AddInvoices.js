import { useSelector } from "react-redux"
import { Button } from "../button"

export const AddInvoices = () => {
  const { user } = useSelector(item => item.user);

  return (
    <>
      <Button className="add-invoices" to={user ? "/add" : "/login"} state={{
        redirect: !user && "/add"
      }} >
        New Invoice
      </Button>
    </>
  )
}