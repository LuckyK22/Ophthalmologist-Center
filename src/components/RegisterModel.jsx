import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Register from "../pages/Register";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LoginModel from '../components/LoginModel';

const RegisterModel = ({ stateChange }) => {

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    const [open, setOpen] = useState(false);

    const onOpenModal = () => {
        setOpen(true);
    };

    const onCloseModal = () => {
        setOpen(false);
    };



    return (
        <div className="text-center">
            <button className="text-gray-300 hover:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={onOpenModal}>Register</button>
            <Modal open={open} onClose={onCloseModal} styles={{ modal: { backdropFilter: open ? "blur(15px)" : "none" } }}>
                <div className=''>
                    <div className=' w-full p-4 pt-8 rounded-lg mt-14 mx-auto sm:border-0 lg:border-2'>
                        {/* <div className=' w-3/4 lg:w-1/3 p-4 pt-8 rounded-lg mt-36 mx-auto sm:border-0 lg:border-2'> */}
                        <div className='text-center text-3xl font-semibold'>Register</div>
                        <Form
                            name="normal_Register"
                            className="login-form"
                            layout='vertical'
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                hasFeedback
                                label="UserName"
                                name="Name"
                                validateTrigger="onBlur"
                            >
                                <Input placeholder="Full Name" />
                            </Form.Item>

                            <Form.Item
                                hasFeedback
                                label="Email"
                                name="Email"
                                validateTrigger="onBlur"
                            >
                                <Input placeholder="Email" />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                placeholder="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <div className='flex justify-between'>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox className='text-white'>Remember me</Checkbox>
                                    </Form.Item>

                                    <Link className="login-form-forgot text-indigo-500" to="">
                                        Forgot password
                                    </Link>
                                </div>
                            </Form.Item>

                            <Form.Item className='w-full'>
                                <div className='text-center'>
                                    <Button type="primary" htmlType="submit" className="login-form-button w-1/3">
                                        Log in
                                    </Button>
                                </div>
                                <br />
                                <div className='text-center flex items-center justify-center'>
                                    <p className='text-white text-md'>Already have an Account?
                                        <LoginModel />
                                    </p>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default RegisterModel;
