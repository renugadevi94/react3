import React from 'react';
import Navbar from './navbar';
import Parent from './Parent';

function home() {


  
  return (

<div className='px-3'>
        <Navbar />
    
    <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='col-md-3'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-center-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>EARNINGS (MONTHLY)</h3>
                            <p className='fs-5'>$40,000</p>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3'>
                    <div className='p-3 bg-white d-flex justify-content-center-around align-items-center rounded'>
                        <div>
                            <h5 className='fs-2'>EARNINGS (ANNUAL)</h5>
                            <p className='fs-5'>$215,000</p>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3'>
                    <div className='p-3 bg-white d-flex justify-content-center-around align-items-center rounded'>
                        <div>
                            <h5 className='fs-2 p-3'>TASKS </h5>
                            <p className='fs-5'>50%</p>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3'>
                    <div className='p-3 bg-white d-flex justify-content-center-around align-items-center rounded'>
                        <div>
                            <h5 className='fs-2'>PENDING REQUESTS</h5>
                            <p className='fs-5'>18</p>
                            </div>
                        </div>
                        </div>
                </div>
                <div className='row-2'>
        <div className='col color-red'>
        <Parent/>
      </div>
     </div>
    </div>
</div>
                
  )
}

export default home