import { connect } from "react-redux";
import NavPanel from "./NavPanel";

const mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    }
}

const NavPanelContainer = connect(mapStateToProps)(NavPanel);

export default NavPanelContainer;