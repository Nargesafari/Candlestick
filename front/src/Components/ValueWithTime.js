import React from 'react'
import { AiOutlineDown, AiOutlineMinus } from 'react-icons/ai'
import { BsChevronCompactUp } from 'react-icons/bs'
import { Button } from 'react-bootstrap'
function ValueWithTime () {
  return (
    <div>
      <h5 className='active'>MArket Activate</h5>
      <div className='class'>
        <div className='class1'>Ren/usdt</div>
        <div className='class1'>+10.2%</div>
        <div className='class1'>14:30:45</div>
        <div className='class1'>new 24 high</div>
        <div className='class1' id='class1'>mana/usd</div>
        <div className='class1'>+5.2%</div>
        <div className='class1'>new 24 high</div>
        <div className='class1'>new 24 high</div>
      </div>
      <div className='clas'>
        <Button id='click'><AiOutlineMinus /><AiOutlineDown /><AiOutlineMinus /></Button>
      </div>
      <div className='clas1'>
        <Button><AiOutlineMinus /> <BsChevronCompactUp /><AiOutlineMinus /></Button>
      </div>
    </div>
  )
}
export default ValueWithTime
