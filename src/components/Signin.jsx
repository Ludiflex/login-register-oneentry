import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  
import { defineOneEntry } from 'oneentry'

const { Forms, FormData } = defineOneEntry('https://onlinestore.oneentry.cloud', {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWW91dHViZSIsInNlcmlhbE51bWJlciI6MywiaWF0IjoxNzE2ODc5MzIwLCJleHAiOjE3NDg0MTUzMDF9.BqQb8BuU04O5tJ2cT9u8TzwvN8c50MuF0FXZIvgfL6w'});

const Signin = () => {
    const [data, setData] = useState([])
    const [authData, setAuthData] = useState([]);

    useEffect(()=>{
        const oneEntry = async ()=>{
            const value = await Forms.getFormByMarker('sign_in', 'en_US')
            setData(value.attributes);

            const authValue = await FormData.getFormsDataByMarker('sign_up', 'en_US', 0, 30)
            setAuthData(authValue);
        }

        oneEntry();
    }, [])

    console.log(data);
    console.log(authData);

    const [formData, setFormData] = useState({
      Email: "",
      Password: "",
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData, [name]: value
    })

  }
  console.log(formData);

  const checkData = ()=>{
      let emailExists = false;
      let passwordCorrect = false;

      for(const user of authData){
        if(formData.Email === user.formData[1].value){
          emailExists = true;  
          if(formData.Password === user.formData[2].value){
            alert("Login Successfully");
            break;
          }
        }
      }
      if(!emailExists){
        alert("Email does not exists");
      }else if(!passwordCorrect){
        alert("Wrong Password")
      }
  }

  return (
    <>
      <div className="container">
        <h2>Sign In</h2>

        {data.map((e, index) => {
                    return(
                       
                          <input className='inputs'
                            key={index}
                            name={e.localizeInfos.title}
                            id={e.localizeInfos.title}
                            type={e.type}
                            placeholder={e.localizeInfos.title}
                            onChange={handleChange}
                          ></input>
                        
                    )
                })}

        <button className="btn" onClick={checkData}>Submit</button>

        <p className="text">Don't have an account?
          <Link to="/signup" className="links">Go to Register</Link>
        </p>
      </div>
    </>
  );
};

export default Signin;
