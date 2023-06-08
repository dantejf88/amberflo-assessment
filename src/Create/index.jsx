import { useEffect, useState } from 'react'
import { getMeters } from '../services'
import { Spin } from 'antd';
import { Space, Table, Tag } from 'antd';
import '../App.css'

function Create() {
  const [meters, setMeters] = useState([])

  return (
    <div>
      <h1>Create</h1>
    </div>
  )
}

export default Create
