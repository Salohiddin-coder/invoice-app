import { useField } from "formik";
import { Input } from "../input/Input";

import "./formik-input.scss"

export const FormikInput = ({ className = "", description, ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <label className="formik-input">
      <span className={`formik-input__label-span ${error && "formik-input__label-span--error "}`} >
        <span>{description}</span>
        {
          error && <span>{error}</span>
        }
      </span>

      <Input className={`${className} ${error && "input--error"}`} field={field} {...props} />
    </label>
  )
}