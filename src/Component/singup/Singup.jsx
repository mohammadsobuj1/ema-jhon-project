import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';

const Singup = () => {
    const { createUser, singInUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const submitHandaler = (event) => {
        setError('')
        event.preventDefault()
        const email = event.target.email.value;
        const confirm = event.target.confirm.value;
        const password = event.target.password.value;
        if(password !== confirm){
            setError('incorect password')
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
           

    }


    return (
        <div className='form-container'>
            <h4 className='title'>Sing In</h4>
            <form onSubmit={submitHandaler} >
                <div className="form-control">
                    <label className=''>Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label className=''>Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="form-control">
                    <label className=''> Retype Password</label>
                    <input type="password" name="confirm" id="confirm" />
                </div>
                <p>{error}</p>
                <input className='input-btn' type="submit" value="Sing In" />
            </form>
        </div>
    );
};

export default Singup;