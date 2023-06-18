import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Side from './side'
import Home from './home';

function App() {

  return (
    <div className='container-fluid bg-info min-vh-100'>
      <div className='row'>
      <div className='col-2 bg-white vh-100'>
      <Side />
      </div>
      <div className='col'>
        <Home />
        </div>
      </div>
    </div>
  )
}

export default App






