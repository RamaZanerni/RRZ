import React from 'react';
import Nav from './nav';
import Delivery from './delivery';

const layout = () => {
  return (
    <>
      <div className='container'>
        <Nav/>
        <div className='link_box'>
          <Delivery/>
        </div>
      </div>
    </>
  )
}

export default layout