import React, { useRef, useState } from 'react'
import '../Forms/Form.css'

const Dataform = () => {

  const initialValues = { name: "", email: "", phone: "", message:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };   

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    try {
        let res = await fetch('http://localhost:5001/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        });
        res = await res.json();
        localStorage.setItem("user", JSON.stringify(res));
    } catch (error) {
        console.error("Error submitting the form:", error);
    }
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
    return errors;
  };
  return (
    <div className='conatct-form'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <></>
      )}
      <h1>Registration Form</h1>
      <div className='devider'></div>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label>
            Username
          </label><br />
          <input type="text" name='name' placeholder='Username' value={formValues.name}
            onChange={handleChange} />
        </div><br/>
        <p>{formErrors.username}</p>
        <div className='field'>
          <label>
            Email Address
          </label><br />
          <input type="email" name='email' placeholder='Email' value={formValues.email}
            onChange={handleChange} />
        </div><br/>
        <p>{formErrors.email}</p>
        <div className='field'>
          <label>
            Phone Number
          </label><br />
          <input type="text" name='phone' placeholder='Phone No' value={formValues.phone}
            onChange={handleChange} />
        </div><br/>
        <div className='field'>
          <label>
          Type Your Message Here
          </label><br />
          <input type="textarea" name='message' placeholder='Type .....' value={formValues.message}
            onChange={handleChange} />
        </div>
        <div>
          <input type="submit" value='Submit' className='sb-btn' />
        </div>
      </form>
    </div>
  )
}

export default Dataform;