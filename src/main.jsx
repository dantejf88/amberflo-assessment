import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Create from './Create'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { theme } from './theme'
import Details from './Details'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <main style={{ width: '100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  </React.StrictMode>,
)
