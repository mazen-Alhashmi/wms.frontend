import {Button, Divider, Form, Input, Typography} from "antd";
import "./App.css";
import React from "react";
import { PhoneOutlined } from '@ant-design/icons';
import {InstagramOutlined } from '@ant-design/icons';



function App(){
    return <div className="AppBG">
    <Form className="LoginForm">
        <div className="WelcomeText">
            <p>Welcome To AMGTC</p>
        </div>
        <Form.Item label='Email' name = {'MyEmail'}>
            <Input placeholder = "Enter ur Email "/>
        </Form.Item>
        <Form.Item label='Password' name = {'MyPassWord'}>
            <Input type = "password" placeholder = "Enter ur Password "/>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>Login</Button>
        <Divider style={{borderColor:"Black"}}>Connecting To Us </Divider>
        <div>
            <PhoneOutlined /> 41006001
            <InstagramOutlined /> AMGTC
        </div>
    </Form>
    </div>
}
export default App