import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={"Login"} name={"login"} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} placeholder={"Password"} name={"password"} component={Input}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)
const onSubmit = (formData) => {
    console.log(formData)
}

const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
