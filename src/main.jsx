import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PortfolioValuesProvider } from './context/portfolioValuesContext.jsx'
import { ApplicationContextProvider } from './context/applicationContext.jsx'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApplicationContextProvider>
      <PortfolioValuesProvider>
        <Tooltip style={{ fontSize: "12px", color: "black", padding: "4px 10px", background: "white", borderRadius: "10px" }} className='z-30' border={"1px solid #b8b7b7"} id="my-tooltip" />
        <App />
      </PortfolioValuesProvider>
    </ApplicationContextProvider>
  </React.StrictMode>,
)
