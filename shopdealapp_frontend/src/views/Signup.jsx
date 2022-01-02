import React from 'react';
import '../css/views/Signup.css'
import { useAuth } from '../contexts/authContext'

const Signup = () => {
    const [showPassword, toggleShowPassword] = React.useState(false);
    const [email, changeEmail] = React.useState('');
    const [password, changePassword] = React.useState('');
    const [emailIsValid, toggleEmailIsValid] = React.useState(false)
    const [passwordIsValid, togglePasswordIsValid] = React.useState(false)
    const [emailLabel, setEmailLabel] = React.useState('Email')
    const [passwordLabel, setPasswordLabel] = React.useState('Password')
    const [emailLabelClass ,setEmailLabelClass] = React.useState('form-label')
    const [passwordLabelClass, setPasswordLabelClass] = React.useState('form-label')
    const [disabled, toggleDisabled] = React.useState(true)
    const { signup } = useAuth();

    const validateEmail = (emailVal) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regex.test(emailVal) == true) {
            toggleEmailIsValid(true);
            setEmailLabel('Email');
            setEmailLabelClass('form-label')
        } else {
            toggleEmailIsValid(false)
            setEmailLabel('Invalid Email');
            setEmailLabelClass('form-label invalid')
        }
    }

    const validatePassword = (passwordVal) => {
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (regex.test(passwordVal) == true) {
            togglePasswordIsValid(true)
            setPasswordLabel('Password');
            setPasswordLabelClass('form-label')
        } else {
            togglePasswordIsValid(false)
            setPasswordLabel('Password can have 6-16 characters, at least one number and special character');
            setPasswordLabelClass('form-label invalid')
        }
    }

    const isDisabled = () => {
        if (emailIsValid && passwordIsValid) {
            toggleDisabled(false)
        } else {
            toggleDisabled(false)
        }
    }

    const onChangeEmail = (evt) => {
        changeEmail(evt.target.value);
        console.log(evt.target.value);
        validateEmail(evt.target.value);
        isDisabled();
    }

    const onChangePassword = (evt) => {
        changePassword(evt.target.value);
        console.log(evt.target.value);
        validatePassword(evt.target.value);
        isDisabled();
    }

    return ( 
        <div className="form">
            <form>
                <fieldset className="box">
                    <h1 className="form-title">Sign Up</h1>
                    <p className="form-description">Get Access to all the Best Deals on the Internet</p>
                    <div className="form-group">
                        <label className={emailLabelClass} htmlFor="email">{emailLabel}</label>
                        <input type="email" onChange={(evt) => onChangeEmail(evt)} id="email" className="form-input" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className={passwordLabelClass}>{passwordLabel}</label>
                        <input onChange={(evt) => onChangePassword(evt)} type={showPassword ? 'text' : 'password'} id="password" className="form-input" />
                        <span
                            className="toggle-password"
                            onClick={() => toggleShowPassword(!showPassword)}>
                            { showPassword ? '🙈' : '👁️' }
                        </span>
                    </div>
                    <div className="wrapper"><button disabled={disabled} onClick={() => console.log(email)}>Sign Up</button></div>
                </fieldset>
            </form>
        </div>
     );
}
 
export default Signup;