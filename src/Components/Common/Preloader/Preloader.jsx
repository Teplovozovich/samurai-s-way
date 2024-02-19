import preloader from "./../../../assets/img/svg/infinite-spinner.svg"
import style from "./Preloader.module.scss"

const Preloader = (props) => {
    return (
        <div className={style.preloader}>
            <img className={style.preloader_element} style={{ width: "50px" }} src={preloader} alt="" />
        </div>
    )
}

export default Preloader;