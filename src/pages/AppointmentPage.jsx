import React, { useState } from 'react';
import { Form, Input, Select, Space, TimePicker, DatePicker, message, Upload, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: '',  // API for Uploading file
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const AppointmentPage = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const [value, setValue] = useState(null);
    const onTimeChange = (time) => {
        setValue(time);
    };
    const onDateChange = () => {
        console.log(date, dateString);
    };

    const onSubmit = () => {
        console.log("Captured On Submit Event From Appointment Page")
    }

    return (
        <>
            <div className='my-14 w-3/4 lg:w-1/2 mx-auto'>
                <h1 className='text-center text-3xl font-semibold my-8'>Appointment Form</h1>
                <Form
                    onSubmitCapture={onSubmit}
                >
                    <Form.Item
                        hasFeedback
                        name="Name"
                        validateTrigger="onBlur"
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>

                    <Form.Item
                        hasFeedback
                        name="Mobile Number"
                        validateDebounce={1000}
                        rules={[
                            {
                                min: 10,
                                max: 12,
                            },
                        ]}
                    >
                        <Input placeholder="Mobile Number" />
                    </Form.Item>

                    <Form.Item>
                        <Space
                            className='w-full'
                            wrap>
                            <Select
                                defaultValue="Reason for Visit"
                                style={{
                                    width: '100%'
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'Eye Test',
                                        label: 'Eye Test',
                                    },
                                    {
                                        value: 'Eye Surgery',
                                        label: 'Eye Surgery',
                                    },
                                    {
                                        value: 'Lens Check',
                                        label: 'Lens Check',
                                    },
                                ]}
                            />
                        </Space>
                    </Form.Item>

                    <Form.Item>
                        <Space
                            className='w-full'
                            wrap>
                            <Select
                                defaultValue="Department"
                                style={{
                                    width: '100%'
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'A',
                                        label: 'A',
                                    },
                                    {
                                        value: 'B',
                                        label: 'B',
                                    },
                                    {
                                        value: 'C',
                                        label: 'C',
                                    },
                                ]}
                            />
                        </Space>
                    </Form.Item>

                    <div className='flex gap-5'>
                        <Form.Item
                            className='w-1/2'
                        >
                            <TimePicker value={value} onChange={onTimeChange} />;
                        </Form.Item>

                        <Form.Item
                            className='w-1/2'
                        >
                            <DatePicker onChange={onDateChange} />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="text-white ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="text-white ant-upload-hint">
                                Upload Previous Medical Records
                            </p>
                        </Dragger>
                    </Form.Item>

                    <div className='text-center'>
                        <Button type="primary" className='w-1/3' onClick={onSubmit}>Submit</Button>
                    </div>
                </Form>
            </div>
        </>
    )
};

export default AppointmentPage;
