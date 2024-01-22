import React from 'react'
import {Form, Input} from 'antd'
import "../style/RegisterStyle.css"
import {useNavigate} from 'react-router-dom'

function RegisterPage() {
  const navigate = useNavigate();
    const onfinishHandler =(values)=>{
        console.log(values);
    }
  return (
    <div>
      <div className="form-container">

        <Form layout="vertical" onFinish="onfinishHandler" className='register-form'>
            <h1>Register Form</h1>
            <Form.Item label= "Name" name="name">
                <Input type="text" required />
            </Form.Item>
            <Form.Item label= "Email" name="email">
                <Input type="email" required />
            </Form.Item>
            <Form.Item label= "Password" name="password">
                <Input type="password" required />
            </Form.Item>
            <button className='btn btn-primary'>Register</button>
        </Form>
      </div>
    </div>
  )
}

export default RegisterPage
