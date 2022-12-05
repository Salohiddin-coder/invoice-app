import "./loader.scss"

export const Loader = ({ className = "" }) => {
  return (
    <div className={`loader ${className}`}>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}