import { dappletState } from '@dapplets/dapplet-overlay-bridge'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
const DappletState = dappletState(App)

ReactDOM.render(<DappletState />, document.getElementById('root'))
