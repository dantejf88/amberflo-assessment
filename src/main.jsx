import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Create from './Create'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { colors, theme } from './theme'
import Details from './Details'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './components/Menu'
import { ConfigProvider } from 'antd';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Menu />
      <Home />
    </>,
  },
  {
    path: "/create",
    element: <>
      <Menu />
      <Create />
    </>,
  },
  {
    path: "/details",
    element: <>
      <Menu />
      <Details />
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <main style={{ width: '100%', minHeight:'100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: colors.primary,
              colorPrimaryHover: colors.primaryLight,
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </main>
    </ThemeProvider>
  </React.StrictMode>,
)
