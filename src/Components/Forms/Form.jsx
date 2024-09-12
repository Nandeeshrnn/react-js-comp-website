import React, { useRef, useState } from 'react'
import './Form.css';
import { FaTrash } from "react-icons/fa";
import Modal from '../ModalImage/Moddal';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
  
  //const navigate = useNavigate();
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [imgse, setimages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };   
  const showModal = (img) => {
    setSelectedImage(img); 
    setIsModalOpen(true);
  };
  const handleImgChange = (e) => {
    const files = e.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!imgse.some((e) => e.name === files[i].name)) {
        setimages((prev) => [
          ...prev,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          }
        ]); 
      }
    }
  };
  const deleteImg = (index) => {
    setimages((prev) => prev.filter((_, i) => i !== index));
  };
  /* const handleSubmit = async (e) => {
      
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
         // navigate('/formdata', { state: formValues });
         let res=await fetch('http://localhost:5001/',{
          method:'post',
          headers:{
            'Content-Type':'application/json'
          },
         });
         res= await res.json;
         localStorage.setItem("user", JSON.stringify(res));
  }; */

  const handleSubmit =(e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    /* try {
        let res = await fetch('http://localhost:5001/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues), // Send formValues in the request body
        });
        res = await res.json(); // Corrected: res.json() is a function
        localStorage.setItem("user", JSON.stringify(res));
        
        // Uncomment and adjust this line if you want to navigate after successful submission
        // navigate('/formdata', { state: formValues });
    } catch (error) {
        console.error("Error submitting the form:", error);
    } */
};

  const validate = (values) => {
    const errors = {};  
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className='conatct-form'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <></>
      )}
      <h1>Contact Form</h1>
      <div className='devider'></div>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label>
            Username
          </label><br />
          <input type="text" name='name' placeholder='Username' value={formValues.name}
            onChange={handleChange} />
        </div>
        <p>{formErrors.username}</p>
        <div className='field'>
          <label>
            Email Address
          </label><br />
          <input type="email" name='email' placeholder='Email' value={formValues.email}
            onChange={handleChange} />
        </div>
        <p>{formErrors.email}</p>
        <div className='field'>
          <label>
            Password
          </label><br />
          <input type="password" name='password' placeholder='Password' value={formValues.password}
            onChange={handleChange} />
        </div>
        <p>{formErrors.password}</p>
        <div className='field'>
          <label>
            Upload Images
          </label><br />
          <input type="file" multiple onChange={handleImgChange}/>
          <div className='form-grid'>
            {imgse.map((img, index) => (
              <div className='listImages' key={index}>
                <img src={img.url} alt={img.name} onClick={() => showModal(img)} />
                <span onClick={() => deleteImg(index)} ><FaTrash /></span>
              </div>
            ))}
          </div>
        </div>
        {isModalOpen && selectedImage && (
          <Modal
            src={selectedImage.url}
            alt={selectedImage.name}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        <div>
          <input type="submit" value='Submit' className='sb-btn' />
        </div>
      </form>
     {isSubmit && <div>
        <p>Name : {formValues.name}</p>
        <p>Email : {formValues.email}</p>
        <p>Passwordd : {formValues.password}</p>
        <div className='form-grid'>
          {imgse.map((img, index) => (
            <div className='listImages' key={index}>
              <img src={img.url} alt={img.name} onClick={() => showModal(img)} />
            </div>
          ))}
        </div>
      </div>
      }
    </div>
  )
}

export default Form