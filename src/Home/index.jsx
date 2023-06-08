import { useEffect, useState } from 'react'
import { getMeters } from '../services'
import { Spin } from 'antd';
import { Space, Table, Tag } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom'
import '../App.css'

function Home() {
  const [meters, setMeters] = useState([])
  const [dataState, setDataState] = useState([])
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'display_name',
      key: 'display_name',
      sorter: (a, b) => a.display_name.localeCompare(b.display_name),
      render: (text) => <p>{text}</p>
    },
    {
      title: 'Api name',
      dataIndex: 'api_name',
      key: 'api_name',
      sorter: (a, b) => a.api_name.localeCompare(b.api_name),
      render: (text) => <p>{text}</p>
    },
    {
      title: 'Is Active',
      dataIndex: 'active',
      key: 'active',
      sorter: (a, b) => a.active - b.active,
      render: (text) => <p>{text ? 'true' : 'false'}</p>
    },
    {
      title: 'Used for billing',
      dataIndex: 'used_for_billing',
      key: 'used_for_billing',
      sorter: (a, b) => a.used_for_billing - b.used_for_billing,
      render: (text) => <p>{text ? 'true' : 'false'}</p>
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type.localeCompare(b.type),
      render: (text) => <p>{text}</p>
    },
  ]
  
  useEffect(() => {

    getMeters('https://take-home-exercise-api.herokuapp.com/meters')
    .then(res => setMeters(res))
    .catch(err => console.log(err))

  }, [])

  useEffect(() => {
    console.log(meters)
    if(meters) {
      const data = meters.map( meter => {
        return {
          key: meter.id,
          id: meter.id,
          display_name: meter.display_name,
          api_name: meter.api_name,
          active: meter.active,
          used_for_billing: meter.used_for_billing,
          type: meter.type
        }
      })
      setDataState(data)
    }
  }, [meters])

  return (
    <div>
      {
        dataState.length > 0 
          ? <Table 
              columns={columns} 
              dataSource={dataState} 
              onRow={ record => {
                return {
                  onClick: () => navigate(`/details?id=${record.id}`),
                  style: { cursor: 'pointer' }
                };
              }}
            /> 
          : <Spin size="large" />
      }
    </div>
  )
}

export default Home
