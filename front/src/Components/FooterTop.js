import React from 'react'

function FooterTop () {
  return (
    <div className='footertop'>
      <div className='footertop1'>
        <ul>
          <a href='#home'>   <li>Open Orders(0)</li></a>
          <a href='#home'><li>Order History</li></a>
          <a href='#home'><li>Trade History</li></a>
          <a href='#home'><li>Funds</li></a>
        </ul>
      </div>
      <div className='limit1'>
        <a href='#home'>
          <ul id='butt'>log in <li> or </li> register now <li> to trade </li> </ul>
        </a>
      </div>
    </div>
  )
}

export default FooterTop
