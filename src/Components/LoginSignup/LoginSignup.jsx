import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = () => {
        if (action === "Login") {
            const { email, password } = formData;
            if ((email && email.trim()) !== '' && (password && password.trim()) !== '') {
                console.log(JSON.stringify({ email, password }));
                // Clearing email and password fields for login action
                setFormData({ email: '', password: '' });
            }
        } else {
            const { name, email, password } = formData;
            if ((name && name.trim()) !== '' && (email && email.trim()) !== '' && (password && password.trim()) !== '') {
                console.log(JSON.stringify(formData));
                setFormData({ name: '', email: '', password: '' });
            }
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login" ? null :
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input 
                            type="text" 
                            name="name" 
                            placeholder='Name' 
                            value={formData.name} 
                            onChange={handleInputChange} 
                        />
                    </div>
                }
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Email Id' 
                        value={formData.email} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Password' 
                        value={formData.password} 
                        onChange={handleInputChange} 
                    />
                </div>
            </div>
            {action==="Sign Up" ? null :
                <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            }
            <div className="submit-container-buttons">
                <div 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => {setAction("Sign Up"); handleFormSubmit()}}
                >
                    Sign Up
                </div>
                <div 
                    className={action === "Sign Up" ? "submit gray" : "submit"} 
                    onClick={() => {setAction("Login"); handleFormSubmit()}}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
