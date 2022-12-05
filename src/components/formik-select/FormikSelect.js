
import { useField } from "formik";
import { Select } from "../select";
import "./formik-select.scss"

export const FormikSelect = ({ className = "", description, ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <label className="formik-select">
      <span className={`formik-select__label-span ${error && "formik-select__label-span--error "}`} >
        <span>{description}</span>
        {
          error && <span>{error}</span>
        }
      </span>

      <Select className={`${className} ${error && "select--error"}`} field={field} {...props} />
    </label>
  )
}