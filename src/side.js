import React from 'react'


function side() {

  return (
    <div className='bg-white'>
        <div className='m-2'>
            <i className='bi bi-bootstrap-fill'></i>
            <span className='brand-name fs-4'>SB Admin 2</span>
        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
          <a className='list-group-item list-group-item-action'>
            <i className='bi bi-speedometer2'></i>
            <span>Dashboard</span>
          </a>
          <a className='list-group-item list-group-item-action'>
            <i className='bi bi-house'></i>
            <span>Components</span>
          </a>
          <a className='list-group-item list-group-item-action'>
            <i className='bi bi-house'></i>
            <span>Utilities</span>
          </a>
          <a className='list-group-item list-group-item-action'>
            <i className='bi bi-house'></i>
            <span>Pages</span>
          </a>
          <a className='list-group-item list-group-item-action'>
            <i className='bi bi-house'></i>
            <span>Charts</span>
          </a>
          <a className='list-group-item list-group-item-action'>
            <i className='bi bi-house'></i>
            <span>Tables</span>
          </a>

         
    </div>
    </div>
  )
}

export default side