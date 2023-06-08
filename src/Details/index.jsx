import { useEffect, useState } from 'react'
import { getMeters } from '../services'
import { Spin } from 'antd';
import { Space, Table, Tag } from 'antd';
import '../App.css'

function Details() {
  const [meters, setMeters] = useState([])

  return (
    <div>
      <h1>Details</h1>
    </div>
  )
}

export default Details
