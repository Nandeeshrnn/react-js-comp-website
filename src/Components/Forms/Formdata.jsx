import React from 'react'
import { useLocation } from 'react-router-dom';

const Formdata = () => {
    const location = useLocation();
    const { username, email, password, imgse } = location.state || {};
    return (
        <div>
          <h1>Display Data</h1>
          {username || email || password  ? (
            <div>
              <p>Name: {username}</p>
              <p>Email: {email}</p>
              <p>Password: {password}</p>
              <p>Images: {imgse}</p>
            </div>
          ) : (
            <p>No data available.</p>
          )}
        </div>
      );
}

export default Formdata