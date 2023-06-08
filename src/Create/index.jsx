import { postMeter } from '../services'
import { useState } from 'react';
import {   
  Button,
  Form,
  Input,
  Select,
  Switch,
} from 'antd';
import { Container, SubmitItem } from '../stylesComponents';
import { useNavigate } from 'react-router-dom';
import { colors } from '../theme';


const CreateForm = () => {
  const [error,setError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    postMeter(values)
    .then(res => {
      if(res.status === 201) {
        navigate('/')
      } else {
        setError(true)
      }
    })
  };

  return (
    <Container width='100%'>
      {
        error 
          ? <p style={{ color: colors.red }}>Error creating meter</p>
          : <Form
              labelCol={{
                span: 10,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                size: 'large',
              }}
              size={'large'}
              style={{
                width: '100%',
                textAlign: 'center',
              }}
              onFinish={onSubmit}
            >
              <Form.Item  
                rules={[
                  {
                    required: true,
                    message: 'The name is required.',
                  },
                ]}
                label="Name" 
                name="display_name"
              >
                <Input name="display_name" />
              </Form.Item>
              <Form.Item 
                label="Api name" 
                name="api_name"
                rules={[
                  {
                    required: true,
                    message: 'The Api name is required.',
                  },
                ]}
              >
                <Input name="api_name" />
              </Form.Item>
              <Form.Item label="Active" name="active" initialValue={false}>
                <Switch name='active'  />
              </Form.Item>
              <Form.Item label="Used for Billing" name="used_for_billing" initialValue={false}>
                <Switch name='used_for_billing'  />
              </Form.Item>
              <Form.Item 
                rules={[
                  {
                    required: true,
                    message: 'The type field is required.',
                  },
                ]}
                label="Select" 
                name="type"
              >
                <Select name='type'>
                  <Select.Option value="sum">Sum</Select.Option>
                  <Select.Option value="max">Max</Select.Option>
                  <Select.Option value="unique_count">Unique Count</Select.Option>
                </Select>
              </Form.Item>
              <SubmitItem>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </SubmitItem>
            </Form>
      }
  </Container>
  );
};

export default CreateForm
