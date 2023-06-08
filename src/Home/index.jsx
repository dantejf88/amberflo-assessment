import { useEffect, useState } from 'react'
import { getMeters, deleteMeter } from '../services'
import { Spin, Table } from 'antd';
// import { columns } from '../utils';
import { Container } from '../stylesComponents';
import { useNavigate } from 'react-router-dom'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import '../App.css'
import { colors } from '../theme';

function Home() {
  const [meters, setMeters] = useState([])
  const [dataState, setDataState] = useState([])
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {

    getMeters()
    .then(res => {
      if(res.status === 200) {
        setMeters(res.data)
      } else {
         setError(true)
      }
    })

  }, [])

  useEffect(() => {
    if(meters) {
      const data = meters.map( meter => {
        return {
          created_time: meter.created_time,
          key: meter.id,
          id: meter.id,
          display_name: meter.display_name,
          api_name: meter.api_name,
          active: meter.active,
          used_for_billing: meter.used_for_billing,
          type: meter.type,
          delete: meter
        }
      })
      setDataState(data)
    }
  }, [meters])

  const deleteClicked = (id) => {
    deleteMeter(id)
    .then(res => {
      if(res.id) {
        const newData = dataState.filter(meter => meter.id !== res.id)
        setDataState(newData)
      }
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'display_name',
      key: 'display_name',
      sorter: (a, b) => a.display_name.localeCompare(b.display_name),
      render: (text) => (<p>{text}</p>)
    },
    {
      title: 'Api name',
      dataIndex: 'api_name',
      key: 'api_name',
      sorter: (a, b) => a.api_name.localeCompare(b.api_name),
      render: (text) => (<p>{text}</p>)
    },
    {
      title: 'Is Active',
      dataIndex: 'active',
      key: 'active',
      sorter: (a, b) => a.active - b.active,
      // render: (text) => (<p>{text ? 'true' : 'false'}</p>)
      render: (value) => (value ? <CheckOutlined /> : <CloseOutlined />)
    },
    {
      title: 'Used for billing',
      dataIndex: 'used_for_billing',
      key: 'used_for_billing',
      sorter: (a, b) => a.used_for_billing - b.used_for_billing,
      render: (value) => (value ? <CheckOutlined /> : <CloseOutlined />)
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type.localeCompare(b.type),
      render: (text) => (<p>{text}</p>)
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      key: 'delete',
      render: (meter) => {
        return (
          <button
            onClick={(event) => {
              event.stopPropagation()
              deleteClicked(meter.id)
            }}
            disabled={new Date(meter.created_time) < new Date('06/07/2023')}
          >
            Delete
          </button>
        );
      },
    }
  ]

  return (
    <Container maxWidth='unset'>
        {
          error ? <p style={{ color: colors.red }}>Server error, please refresh the page</p>
          :
          <>
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
                : <div style={{ width: '100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Spin size="large" />
                </div>
                
            }
          </>
        }
    </Container>
  )
}

export default Home
