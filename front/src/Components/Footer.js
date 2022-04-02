import React from 'react'
import { ImDownload2 } from 'react-icons/im'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { AiFillSignal, AiFillPropertySafety } from 'react-icons/ai'
function Footer () {
  return (
    <div className='footer'>
      <div className='footer1'>
        <ul>
          <a href='#home'> <li id='ai'><AiFillSignal /> stable connection</li></a>
          <a href='#home'> <li id='ai1'><AiFillPropertySafety />cookie perefrences</li></a>
          <a href='#home'> <li id='ai1'><ImDownload2 />Download</li></a>
          <a href='#home'> <li id='ai1'><BsFillChatLeftTextFill />online</li></a>
        </ul>
      </div>
    </div>
  )
}
export default Footer
