import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PortfolioValuesProvider } from './context/portfolioValuesContext.jsx'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioValuesProvider>
      <Tooltip style={{ fontSize:"12px", padding: "4px 10px", color: "black", background: "white", borderRadius:"10px" }} className='text-[#b8b7b7]' border={"1px solid #b8b7b7"} id="my-tooltip" />
      <App />
    </PortfolioValuesProvider>
  </React.StrictMode>,
)
