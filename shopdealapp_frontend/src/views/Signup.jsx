import React from 'react';
import '../css/views/Signup.css'

const Signup = () => {
    const [showPassword, toggleShowPassword] = React.useState(false);
    const [email, changeEmail] = React.useState('');
    const [password, changePassword] = React.useState('');

    const onChangeEmail = (evt) => {
        changeEmail(evt.target.value);
        console.log(evt.target.value);
    }

    const onChangePassword = (evt) => {
        changePassword(evt.target.value);
        console.log(evt.target.value);
    }

    return ( 
        <div className="form">
            <form>
                <fieldset className="box">
                    <h1 className="form-title">Sign Up</h1>
                    <p className="form-description">Get Access to all the Best Deals on the Internet</p>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input type="email" onChange={(evt) => onChangeEmail(evt)} id="email" className="form-input" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={(evt) => onChangePassword(evt)} type={showPassword ? 'text' : 'password'} id="password" className="form-input" />
                        <span
                            className="toggle-password"
                            onClick={() => toggleShowPassword(!showPassword)}>
                            { showPassword ? '🙈' : '👁️' }
                        </span>
                    </div>
                    <div className="wrapper"><button onClick={() => console.log(email)}>Sign Up</button></div>
                </fieldset>
            </form>
        </div>
     );
}
 
export default Signup;