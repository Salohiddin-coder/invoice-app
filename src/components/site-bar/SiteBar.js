import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import nonUser from "../../assets/images/non-user.png";
import userAvatar from "../../assets/images/user.svg"
import { userActions } from "../../store/user-action/UserAction";

import "./site-bar.scss";

export const SiteBar = () => {
  const { user } = useSelector(item => item.user);
  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    dispatch(userActions.setUser(null))
  }

  return (
    <div className="site-bar">
      <div className="site-bar__top">
        <Link className="site-bar__logo-link" to={"/"}>
          <img src={logo} alt="site logo" width={40} height={40} />
        </Link>
      </div>

      <div className="site-bar__bottom">
        <div>
          <Link to={user ? "" : "/login"}>
            <img src={user ? userAvatar : nonUser} alt="not user" width={40} height={40} />
          </Link>
          {
            user && <button className="site-bar__button" onClick={handleClickLogOut}>Log out</button>
          }
        </div>
      </div>
    </div>
  )
}