import React, { useState } from 'react';
import './Login.css';
import Logo from './images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();  //allows us to programmatically change the url
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();  //this will stop the page                from refreshing as they type
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message));

    };

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                history.push('/')
            } 
        })
        .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img src={Logo} alt="logo" className="login_logo" />
            </Link>
            <div className="login_container">
                <h1 className="login_signIn">Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email..." />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password..." />  
                    <button type="submit" onClick={signIn}className="login_signInButton">
                        Sign In
                    </button>
                </form>
                <p>
                    By signing in, you agree to Amazon's FAKE CLONE conditions of use & sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register}className="login_registerButton">
                    Create Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
