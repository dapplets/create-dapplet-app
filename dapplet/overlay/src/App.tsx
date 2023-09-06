import React, { useEffect } from 'react'
import { bridge } from './dappletBridge'
import dappletData from './dappletData'
const App = () => {
  useEffect(() => {
    bridge.onData((data) => {
      // setTheme(data.ctx.theme)
      // if (data.index) {
      //   refs[data.index].current.scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'center',
      //   })
      // }
      console.log(data.adapterDescription)
    })
  }, [])
  return (
    <div className="wrapper">
      <div className="title">
        <h1>Dapplet Overlay</h1>
      </div>
    </div>
  )
}

export default App
