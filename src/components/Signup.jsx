import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { defineOneEntry } from 'oneentry'

const { Forms, AuthProvider  } = defineOneEntry('https://onlinestore.oneentry.cloud', {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWW91dHViZSIsInNlcmlhbE51bWJlciI6MywiaWF0IjoxNzE2ODc5MzIwLCJleHAiOjE3NDg0MTUzMDF9.BqQb8BuU04O5tJ2cT9u8TzwvN8c50MuF0FXZIvgfL6w'});

const Signup = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([])
    useEffect(() => {
        const oneEntry = async () => {
            const value = await Forms.getFormByMarker('sign_up', 'en_US');
            setData(value.attributes);
            console.log(value);
        }
        
        oneEntry();
    }, [])

    console.log(data);

    const [userData, setUserData] = useState({
        Name: '',
        Email: '',
        Password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData, [name]: value
        })
    }
    console.log(userData);

    const sendData = async (e) => {
        e.preventDefault();
        try {
            const data = {
                formIdentifier: 'sign_up',
                authData: [
                    
                    {marker: 'user_name', value: userData.Email},
                    {marker: 'user_password', value: userData.Password}
                ],
                formData: [
                    {marker: 'user_name',
                     type: 'string',
                     value: userData.Name}
                    
                ],
                notificationData: {
                    email: userData.Email,
                    phonePush: "+999999999999",
                    phoneSMS: "+999999999999"
    }
               
            }
            console.log("Request Payload:", data);
            
            const value = await AuthProvider.signUp('email', data)
            

        } catch (error) {
            console.error(error);
        };
        // navigate("/signin");
    }

    return (
        <>
            <form className="container">
                <h2>Sign Up</h2>
                {data.map((e, index) => {
                    return(
                        <input className='inputs'
                            key={index}
                            name={e.localizeInfos.title}
                            placeholder={e.localizeInfos.title}
                            type={e.type}
                            onChange={handleChange}
                        ></input>
                    )
                })}
                
                <button onClick={sendData} className="btn" >Submit</button>

                <p className="text">
                    Already have an account?
                    <Link to="/signin" className="links">Go to login</Link> 
                </p>
            </form>
        </>
    );
};

export default Signup;
    
