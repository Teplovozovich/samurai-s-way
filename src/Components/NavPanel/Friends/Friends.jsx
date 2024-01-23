import { NavLink } from "react-router-dom";
import styles from "./Friends.module.scss"

const Friends = (props) => {
    return (
        <div className={styles.friend}>
            <img src={props.avatar} alt="" />
            {props.friend}
        </div >
    )
}

export default Friends;