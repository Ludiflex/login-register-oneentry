import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import { defineOneEntry } from 'oneentry'

const { Forms } = defineOneEntry('https://onlinestore.oneentry.cloud/', {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWW91dHViZSIsInNlcmlhbE51bWJlciI6MywiaWF0IjoxNzE2ODc5MzIwLCJleHAiOjE3NDg0MTUzMDF9.BqQb8BuU04O5tJ2cT9u8TzwvN8c50MuF0FXZIvgfL6w'});

const Home = () => {

    useEffect(()=>{
        const oneEntry = async ()=>{
            const value = await Forms.getFormByMarker('sign_up', 'en_US')
            console.log(value);
        }

        oneEntry();
    }, [])

  return (
    <>
      <div className="container">
        <h2>Welcome</h2>

        
      </div>
    </>
  );
};

export default Home;
