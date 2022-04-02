import React, { useState } from 'react'
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit'
import { ProgressBar, Badge, Button } from 'react-bootstrap'
import Select from 'react-select'
const total = [
  { label: 'total', value: 'total' },
  { label: 'amount', value: 'amount' }
]
export default function Limit () {
  const [basicActive, gfg1] = useState('1')

  const click = (value) => {
    if (value === basicActive) {
      return
    }
    gfg1(value)
  }

  return (
    <div id='gfg'>
      <MDBTabs pills className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => click('1')} active={basicActive === '1'}>limit</MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => click('2')} active={basicActive === '2'}>market</MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem><MDBTabsLink onClick={() => click('3')} active={basicActive === '3'}> Stop-Limit</MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent id='pane'>
        <MDBTabsPane show={basicActive === '1'}>
          <div className='limit'>
            <div className='limit1'>
              <label for='fname'>avbl</label>
              <label for='fname' id='lab'>-USDT</label>
            </div>
            <div className='limit1'>
              <label for='fname'>avbl</label>
              <label for='fname' id='lab'>-BTC</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>price</label>
              <label for='fname' id='lab1'>45667.9 USDT</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>price</label>
              <label for='fname' id='lab1'>45667.9 USDT</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>amount</label>
              <label for='fname' id='lab2'>BTC</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>amount</label>
              <label for='fname' id='lab2'>BTC</label>
            </div>
            <div className='limit1'>
              <ProgressBar id='pg' now={50} />
            </div>
            <div className='limit1'><ProgressBar id='pg' now={60} /></div>
            <div className='limit1'>
              <Button id='but'>Log In<Badge bg='light' text='dark'>Or</Badge> Register Now</Button>
            </div>
            <div className='limit1'>
              <Button id='but'>Log In<Badge bg='light' text='dark'>Or</Badge> Register Now</Button>
            </div>

          </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === '2'}>
          <div className='limit'>
            <div className='limit1'>
              <label for='fname'>avbl</label>
              <label for='fname' id='lab'>-USDT</label>

            </div>
            <div className='limit1'>
              <label for='fname'>avbl</label>
              <label for='fname' id='lab'>-BTC</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>price</label>
              <label for='fname' id='lab1'>market USDT</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>price</label>
              <label for='fname' id='lab1'>market USDT</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname' id='lab22'>BTC</label>
              <Select
                id='select'
                placeholder='total'
                options={total}
                className='select'
                maxMenuHeight={220}
                menuPlacement='auto'
                text='djj'
              />
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname' id='lab22'>BTC</label>
              <Select
                id='select'
                placeholder='total'
                options={total}
                className='select'
                maxMenuHeight={220}
                menuPlacement='auto'
                text='djj'
              />

            </div>
            <div className='limit1'>
              <ProgressBar id='pg' now={50} />
            </div>
            <div className='limit1'>
              <ProgressBar id='pg' now={60} />
            </div>
            <div className='limit1'>
              <Button id='but'>Log In<Badge bg='light' text='dark'>Or</Badge> Register Now</Button>
            </div>
            <div className='limit1'>
              <Button id='but'>Log In<Badge bg='light' text='dark'>Or</Badge> Register Now</Button>
            </div>
          </div>
        </MDBTabsPane>

        <MDBTabsPane show={basicActive === '3'}>
          <div className='limit'>
            <div className='limit1'>
              <label for='fname'>avbl</label>
              <label for='fname' id='lab'>-USDT</label>

            </div>
            <div className='limit1'>
              <label for='fname'>avbl</label>
              <label for='fname' id='lab'>-BTC</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>stop</label>
              <label for='fname' id='lab1'>USDT</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>stop</label>
              <label for='fname' id='lab1'>USDT</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>limit</label>
              <label for='fname' id='lab1'>45667.9 USDT</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>limit</label>
              <label for='fname' id='lab1'>45667.9 USDT</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>amount</label>
              <label for='fname' id='lab2'>BTC</label>
            </div>
            <div className='limit1' id='limit1'>
              <label for='fname'>amount</label>
              <label for='fname' id='lab2'>BTC</label>
            </div>
            <div className='limit1'>
              <ProgressBar id='pg' now={50} />
            </div>
            <div className='limit1'><ProgressBar id='pg' now={60} /></div>
            <div className='limit1'>
              <Button id='but'>Log In<Badge bg='light' text='dark'>Or</Badge> Register Now</Button>
            </div>
            <div className='limit1'>
              <Button id='but'>Log In<Badge bg='light' text='dark'>Or</Badge> Register Now</Button>
            </div>
          </div>
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  )
}
