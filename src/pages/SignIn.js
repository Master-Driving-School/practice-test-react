import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGNIN_EMPLOYEE } from '../utils/mutations';
import Auth from '../utils/auth';


export default function SignIn() {
  const [employeeFormData, setEmployeeFormData] = useState({ username: '', password: ''});

  const [signInEmployee] = useMutation(SIGNIN_EMPLOYEE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeFormData({ ...employeeFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await signInEmployee({
        variables: { ...employeeFormData },
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    setEmployeeFormData({
      username: '',
      password: '',
    })
  }

  return (
    <section className='signin-section'>
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={handleFormSubmit}>
        <input type='text' placeholder='Username' name='username' onChange={handleInputChange} value={employeeFormData.username} />
        <input type='password' placeholder='Enter your password' name='password' onChange={handleInputChange} value={employeeFormData.password}/>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};