import "./input.scss";

export const Input = ({ className = "", field, ...props }) => {

  return <input type="text" className={`input ${className}`}  {...field} {...props} />
}
