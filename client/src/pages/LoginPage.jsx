import React from 'react';
import { Form, Input } from 'antd';
import '../style/RegisterStyle.css';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const onFinishHandler = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
          <h1 className='text-center'>Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/register" className='m-2'>
            No account? Create one!
          </Link>
          <Form.Item>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default LoginPage
