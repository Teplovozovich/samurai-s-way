import { NavLink } from "react-router-dom";
import styles from "./NavPanel.module.scss"
import Friends from "./Friends/Friends";

const NavPanel = (props) => {

    // let FriendElement = props.navbar.friends.map(data =>
    //     <Friends
    //      friend={data.name}
    //      avatar={data.avatar}
    //      />)

    return (
        <nav className={styles.nav__wrapper}>
            <div>
                <div>
                    <NavLink to="/news" className={navData => navData.isActive ? styles.active : styles.item} >новости</NavLink>
                </div>
                <div>
                    <NavLink to="/profile" className={navData => navData.isActive ? styles.active : styles.item}>профиль</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className={navData => navData.isActive ? styles.active : styles.item}>сообщения</NavLink>
                </div>
                <div>
                    <NavLink to="/music" className={navData => navData.isActive ? styles.active : styles.item}>music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" className={navData => navData.isActive ? styles.active : styles.item}>настройки</NavLink>
                </div>
            </div>
            <div className={styles.friends}>
                {/* {FriendElement} */}
            </div>
        </nav >
    )
}

export default NavPanel;