import { Field, reduxForm } from 'redux-form';
import { LoginInput, createField } from '../Common/FormsControls/FormsControls.tsx';
import { required } from '../../utils/validators/validators.js';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer.ts';
import { Navigate } from 'react-router-dom';
import style from './../Common/FormsControls/FormsControls.module.scss';
import { AppStateType } from '../../redux/redux-store.ts';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], LoginInput)}
            {createField("Password", "password", [required], LoginInput, { type: "password" })}
            {createField(null, "rememberMe", [], LoginInput, { type: "checkbox" }, "remember me")}
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField("Symbols from image", "captcha", [required], LoginInput, {})}
            {error && <div className={style.form_summary_error}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

type MapStatePropsType = {
    captchaUrl: string
    isAuth: boolean
}

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);