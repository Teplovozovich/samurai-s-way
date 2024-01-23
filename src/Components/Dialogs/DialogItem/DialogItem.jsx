import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.scss"

const DialogItem = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${props.id}`}
                className={navData => navData.isActive ?
                    styles.active :
                    null}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;