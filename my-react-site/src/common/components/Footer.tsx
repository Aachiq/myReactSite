import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid bg-black'>
      <div 
        style={{ 
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h6 className='text text-white'> Digital Development 2024</h6>
        </div>
        <div className='text text-white '>
          <h6>Facebook Page {' '} LinkedIn </h6>
        </div>
      </div>
    </div>
  )
}
