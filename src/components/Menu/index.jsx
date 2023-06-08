import { useState, useEffect } from 'react'
import { HomeOutlined, FileAddOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { Container } from './menuStyles';

const menuItem = [
  {
    label: <a href="/">
        Home
    </a>,
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: <a href="/create">
            Create meter
        </a>,
    key: '/create',
    icon: <FileAddOutlined />,
  },
]

const MenuNav = () => {
    const [current, setCurrent] = useState('/');
    const location = useLocation()

    useEffect(() => {
        setCurrent(location.pathname)
    }, [location.pathname])
    
    const onClick= (e) => {
        setCurrent(e.key);
      };

  return <Container><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItem} /></Container>;
};

export default MenuNav
