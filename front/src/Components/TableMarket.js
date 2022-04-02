import React, { useState } from 'react'

import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit'

const TableMarket = () => {
  const [basicActive, ok] = useState('1')

  const click = (value) => {
    if (value === basicActive) {
      return
    }

    ok(value)
  }
  const data = [

    { price: 234.2, amount: 19},
    { price: 897.9, amount: 25 },
    { price: 2319.09, amount: 25},
    { price: 440.8, amount: 19 },
    { price: 78.90, amount: 19 },
    { price: 234.2, amount: 19},
    { price: 897.9, amount: 25 },
    { price: 2319.09, amount: 25},
    { price: 440.8, amount: 19 },
    { price: 78.90, amount: 19},
    { price: 2319.09, amount: 25 },
    { price: 440.8, amount: 19 },
    { price: 78.90, amount: 19},
    { price: 897.9, amount: 25 },
    { price: 2319.09, amount: 25 },
    { price: 440.8, amount: 19},
    { price: 78.90, amount: 19 },
    { price: 78.90, amount: 19 },
    { price: 234.2, amount: 19},
    { price: 897.9, amount: 25},
    { price: 2319.09, amount: 25},
    { price: 440.8, amount: 19},
    { price: 78.90, amount: 19 },
    { price: 234.2, amount: 19 }
  ]
  var today = new Date()
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  
  return (
   
    <div id='ok'>
      <MDBTabs pills className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => click('1')} active={basicActive === '1'}>Market Trades</MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => click('2')} active={basicActive === '2'}>My Trades</MDBTabsLink>
        </MDBTabsItem>

      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === '1'}>
          <table className='table1'>
            <tr>
              <th>Price(usdt)</th>
              <th>amount(btc)</th>
              <th>time</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.price}</td>
                  <td>{val.amount}</td>
                  <td>{time}</td>
                </tr>
              )
            }
            )}
          </table>

        </MDBTabsPane>
      </MDBTabsContent>

      <MDBTabsContent id='pane'>
        <MDBTabsPane show={basicActive === '2'}>
          ok
        </MDBTabsPane>
      </MDBTabsContent>

    </div>
  )
}

export default TableMarket
