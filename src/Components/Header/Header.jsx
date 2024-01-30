import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss"

const Header = (props) => {
  return (
    <header className={styles.header}>
      <a>это heадер</a>
      <div className={styles.login_block}>
        {props.isAuth ? props.login
          : <NavLink to={`/login`}>login</NavLink>}
      </div>
    </header>
  )
}

export default Header;