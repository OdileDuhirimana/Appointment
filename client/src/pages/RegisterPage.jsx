import React from 'react';
import { Form, Input } from 'antd';
import '../style/RegisterStyle.css';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try{

    } catch(error){
      console.log(error); 
    }
  };

  return (
    <div>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
          <h1 className='text-center'>Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className='m-2'>
            Already user? Login here
          </Link>
          <button className='btn btn-primary' type='submit'>
            Register
          </button>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
