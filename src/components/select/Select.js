import "./select.scss"

export const Select = ({ className = "", field, ...props }) => {
  return (
    <select className={`select ${className}`} {...field}{...props}>
      <option value="1">Net 1 Day</option>
      <option value="7">Net 7 Day</option>
      <option value="14">Net 14 Day</option>
      <option value="30">Net 30 Day</option>
    </select>
  )
}