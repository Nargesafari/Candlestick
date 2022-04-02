import React from 'react'

const data = [

  { price: 23.2, amount: 2 },
  { price: 897.9, amount: 2.5 },
  { price: 2319.09, amount: 2.5},
  { price: 440.8, amount: 1.9 },
  { price: 78.90, amount: 1.9 },
  { price: 23.2, amount: 2 },
  { price: 897.9, amount: 0.001 },
  { price: 2319.09, amount: 1.5},
  { price: 44.8, amount: 2 },
  { price: 78.90, amount: 1.9},
  { price: 234.2, amount: 2},
  { price: 27.9, amount: 2.5 },
  { price: 2319.09, amount: 3 },
  { price: 440, amount: 1 },
  { price: 78.90, amount: 2 },
  { price: 234.2, amount: 1 },
  { price: 89.9, amount: 5},
  { price: 23.09, amount: 2 },
  { price: 440.8, amount: 4},
  { price: 78.90, amount: 5},
  { price: 70.01, amount: 9 },
  { price: 234.2, amount: 1 },
  { price: 897.9, amount: 2},
  { price: 22, amount: 3},
  { price: 448, amount: 3 },
  { price: 78.90, amount: 1 },
  { price: 234.2, amount: 1},
  { price: 897.9, amount: 2 },
  { price: 2319.09, amount: 4 },
  { price: 44.8, amount: 8 },
  { price: 78.90, amount: 5},
  { price: 2319.09, amount: 4},
  { price: 440.8, amount: 3 },
  { price: 78.90, amount: 2 },
  { price: 440.8, amount: 3 },
  { price: 78.90, amount: 2 },

]

function PriceTableLeft () {
  return (
    <div className='Price'>
      <table>
        <tr>
          <th>Price(usdt)</th>
          <th>amount(btc)</th>
          <th>total</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.price}</td>
              <td>{val.amount}</td>
              <td>{(val.price)*(val.amount)}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
export default PriceTableLeft
