import React, { useContext } from 'react';
import './login.css'
import { AuthContext } from '../../Authprovider/Authprovider';

const Login = () => {
    const {singInUser} = useContext(AuthContext)

    const logInHandelar = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        singInUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })

    }
    return (
        <div className='form-container'>
            <h4 className='title'>Log In</h4>
            <form onSubmit={logInHandelar}>
                <div className="form-control">
                    <label className=''>Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label className=''>Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input className='input-btn' type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;