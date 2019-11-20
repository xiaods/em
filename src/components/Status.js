import React from 'react'
import { connect } from 'react-redux'

export const Status = connect(({ authenticated, connected, status, settings }) => ({
  authenticated,
  connected,
  status,
  autologin: settings.autologin
}))(({ authenticated, connected, status, autologin }) =>
  autologin ? <div className='status'>
    {status === 'disconnected' || status === 'connecting' ? <span>Connecting...</span> : null}
    {authenticated && !connected ? <span className='offline'>Working Offline</span> : null}
  </div> : null
)

