import * as yup from "yup"
import { Form, Formik } from "formik";
import { Button } from "../button";
import { FormikSelect } from "../formik-select";
import { FormikInput } from "../formk-input";

import "./invoices-form.scss"

export const InvoicesForm = ({ onSubmit = () => { }, defaultValue = {}, adding, editing }) => {

  const handleSubmit = ({ to, email, dueDate, term, description, price }) => {
    onSubmit(to, email, dueDate, term, description, price)
  }

  return (
    <div className="invoices-form">
      <h2 className="invoices-form__title">
        {
          defaultValue?.id ?
            <span>Edite <span>#</span>UZ{defaultValue?.id}</span>
            :
            <span>New Invoice</span>
        }
      </h2>

      <Formik
        initialValues={
          {
            to: defaultValue?.to || "",
            email: defaultValue?.email || "",
            dueDate: defaultValue?.dueDate || "",
            term: defaultValue?.term || "1",
            description: defaultValue?.description || "",
            price: defaultValue?.price || "",
          }
        }
        validationSchema={yup.object().shape({
          to: yup.string("pleace create string").required("can't be empty").min(3, "minimum 3 characters").max(50, "maximum 50 characters"),
          email: yup.string("pleace create string").email("enter your email pleace").required("can't be empty"),
          dueDate: yup.date().required("can't be empty"),
          term: yup.number().required("can't be empty"),
          description: yup.string("pleace create string"),
          price: yup.number().required("can't be empty").min(100, "minimal 100").max(1000, "maximum 1000")
        })}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {
          () => (
            <Form className="invoices-form__form">
              <FormikInput name="to" type="text" description="Client's Name" />
              <FormikInput name="email" type="email" description="Client's Email" />

              <div className="invoices-form__date">
                <FormikInput name="dueDate" type="date" description="Invoice Datel" />
                <FormikSelect name="term" description="Payment Terms" />
              </div>

              <FormikInput name="description" type="text" description="Project Description" />
              <FormikInput name="price" type="number" description="Price" />

              <div className={`invoices-form__buttons ${!defaultValue?.to && "invoices-form__buttons--betwen"}`}>
                {
                  !defaultValue?.to ?
                    <Button to="/" className="button--edite">Discard</Button>
                    :
                    <Button to={`/view/${defaultValue?.id}`} className="button--edite">Cancel</Button>
                }
                <Button disabled={adding} type="submit">
                  {
                    defaultValue?.to ? "Save Changes" : "  Save & Send"
                  }

                  {
                    (adding || editing) && <i className="invoices-form__spinner fa fa-spinner fa-spin "></i>
                  }
                </Button>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}