import React from 'react'


const Parent=() =>{
    const data='Project'
  return (
    <div>
      <h1>DASHBOARD DETAILS</h1>
        <p>Earnings overview</p>
        <p>Revenue Sources</p>
        
      <Child data={data}/>
    </div>
  )
}

const Child=(props) =>{
  return (
    <div>
       <p>{props.data}</p> 
    </div>
  )
}

export default Parent;