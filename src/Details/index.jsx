import { useEffect, useState } from 'react'
import { getMeters } from '../services'
import { Container, SubmitItem } from '../stylesComponents';
import {
  Spin,
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Switch,
} from 'antd';
import { putMeter } from '../services';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../App.css'
import { colors } from '../theme';

function Details() {
  const [meter, setMeter] = useState()
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [searchParams] = useSearchParams();
  const [error,setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const id = searchParams.get('id')
    getMeters()
    .then(res => {
      if(res.status === 200) {
        const meterFiltered = res.data.filter(meter => meter.id === id)[0]
        if(meterFiltered) {
          setMeter(meterFiltered)
        }
      } else {
         setError(true)
      }
    })

  }, [])

  const enabledUpdate = (e) => {
      setComponentDisabled(!e.target.checked)
  }

  const onSubmit = (values) => {
    putMeter(values, meter.id)
    .then(() => navigate('/'))
  };

  return (
    <Container>
        {
          error ? <p style={{ color: colors.red }}>Server error, please refresh the page</p>
          : <>
              {
                meter ? 
                <>  
                {
                  new Date(meter.created_time) < new Date('06/07/2023') && <p>You cannot edit this meter</p>
                }
                      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                          <Checkbox
                            checked={!componentDisabled}
                            onChange={enabledUpdate}
                            disabled={new Date(meter.created_time) < new Date('06/07/2023')}
                          >
                            Enable editing
                          </Checkbox>
                      </div>
                  <Form
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
                    disabled={componentDisabled}
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
                      initialValue={meter.display_name}
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
                      initialValue={meter.api_name}
                    >
                      <Input name="api_name" />
                    </Form.Item>
                    <Form.Item 
                      label="Active" 
                      name="active" 
                      initialValue={meter.active}
                    >
                      <Switch name='active' defaultChecked={meter.active}/>
                    </Form.Item>
                    <Form.Item 
                      label="Used for Billing" 
                      name="used_for_billing" 
                      initialValue={meter.used_for_billing}
                    >
                      <Switch name='used_for_billing' defaultChecked={meter.used_for_billing} />
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
                      initialValue={meter.type}
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
                </> : <div style={{ width: '100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Spin size='large'/>
                </div>
              }
          </>
        }
    </Container>
  )
}

export default Details
