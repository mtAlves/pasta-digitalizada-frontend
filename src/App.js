import React, { Fragment } from 'react';
import AppBar from './components/AppBar'
import DocumentsPainel from './components/DocumentsPainel'
import './index.css'

function App() {
  return (
    <Fragment>
      <AppBar/>
      <DocumentsPainel/>
    </Fragment>
  )
}

export default App;
