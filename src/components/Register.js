import axios from 'axios'
import React, { useState } from 'react';


function Register() {

    const initialValues ={
        role:'',
        username:'',
        email:'',
        password:'',
        checkbox:false
      }
    
      
      const [formValues, setValues] = useState(initialValues)

    
    const updateForm = (inputName, inputValue) => {
        const updatedValues = { ...formValues, [inputName]: inputValue }
        setValues(updatedValues)
      }

      const onChange = evt => {

        var name = evt.target.name
        var value;
if(evt.target.type==="checkbox")
{
    
    value=evt.target.checked
}
else{
    value = evt.target.value
}

        updateForm(name, value)
        }

        const onSubmit = evt => {
          evt.preventDefault()
          submitForm()
          }
          const submitForm = () => {

            const newMember = {
              username: formValues.username.trim(),
              email:formValues.email,
              password:formValues.password,
              role:formValues.role,
            }
if (formValues.role === 'customer') 



          axios.post('/api/auth/register-diner',newMember)
          .then(function (response) {
            console.log(response);
         
          })
          .catch(function (error) {
            console.log(error);
          });
else
          axios.post('/api/auth/register-operator',newMember)
          .then(function (response) {
            console.log(response);
         
          })
          .catch(function (error) {
            console.log(error);
          });

        }



    return (

        <form className="App" onSubmit={onSubmit}>
        <h1>Register</h1>
        <p>Create your account. It's free and only takes a minute.</p>
      
        <div onChange={onChange} id="radio">
              <input type="radio" value="diner" name="role" /> Customer
              <input type="radio" value="owner" name="role" /> Owner
              
              

          </div>
  
  <div>
        <input
              name='username'
              type='text'
              placeholder='Enter Name'
              maxLength='18'
              minLength='2'
             
              value={formValues.username}
              onChange={onChange}
            /></div>
  
        <div>
          <input
              name='email'
              type='email'
              placeholder='Enter Email'
                         
              value={formValues.email}
              onChange={onChange}
            /></div>
  
        <div>
          <input
              name='password'
              type='password'
              placeholder='Enter password'
              maxLength='18'
              minLength='4'
                         
              value={formValues.password}
              onChange={onChange}
            /></div>
  
        <div>
          <input
              name='confPassword'
              type='password'
              placeholder='Confirm password'
                         
              value={formValues.confPassword}
              onChange={onChange}
            /></div>
  
        <div className='checkbox'>
          <input
          type='checkbox'
          name='checkbox'
              onChange={onChange}
          />

         
          <p>I accept the Terms of Use & Privacy Policy.</p>
        </div>
  
        <button disabled= {!formValues.role || !formValues.username || !formValues.email || !(formValues.password === formValues.confPassword) || !formValues.checkbox}  
        class= 'register'> Register Now</button>

  
      </form>

        );
    };
    
    export default Register;