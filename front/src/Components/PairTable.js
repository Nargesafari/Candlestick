import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit'
import { NavDropdown } from 'react-bootstrap'



const data = [
  { pair: 'ZRX/BUSD', price: 0.252, change: +1.02 },
  { pair: 'ZRX/BUSD', price: 19.90, change: -2.01 },
  { pair: 'ZRX/BUSD', price: 19.13, change: -0.001 },
  { pair:'ZRX/BUSD', price: 1.9, change: -0.12 },
  { pair: 'ZRX/BUSD', price: 2.5, change: +2.09},
  { pair: 'ZRX/BUSD', price: 2.05, change: +1.3},
  { pair: 'ZRX/BUSD', price: 1.229, change: -0.11 },
  { pair:'ZRX/BUSD', price: 1.229, change: +2.99 },
  { pair:'ZRX/BUSD', price: 2.925, change: -2.01},
  { pair: 'ZRX/BUSD', price: 1.29, change: +1.3 },
  { pair: 'ZRX/BUSD', price: 1.569, change: 1.2301 },
]

const datausdt = [
  { pair: 'BTC/USDT', price: 1.003, change: +.090 },
  { pair: 'BTC/USDT', price: 2.34, change: -3.3 },
  { pair: 'ACM/USDT', price: 3.44, change: -2.3333 },
  { pair:'BTC/USDT', price: 0.003, change: +2.122 },
  { pair: 'ACM/USDT', price: 0.14, change: +4.5},
  { pair: 'BTC/USDT', price: 25, change: -1.290},
  { pair: 'BTC/USDT', price: 7.99, change: +0.433 },
  { pair:'ACM/USDT', price: 4.90, change: -2.03233 },
  { pair:'BTC/USDT', price: 0.00209, change: -0.90},
  { pair: 'BTC/USDT', price: 1.23, change: +3.3 },
  { pair: 'BTC/USDT', price: 3.23, change: 1.09 },
]
const databnb = [
  { pair: 'ADA/BNB', price: 1.003, change: +.090 },
  { pair: 'ALGO/BNB', price: 2.34, change: -3.3 },
  { pair: 'ANT/BNB', price: 3.44, change: -2.3333 },
  { pair:'ALGO/BNB', price: 0.003, change: +2.122 },
  { pair: 'ALGO/BNB', price: 0.14, change: +4.5},
  { pair: 'ANT/BNB', price: 25, change: -1.290},
  { pair: 'ALGO/BNB', price: 7.99, change: +0.433 },
  { pair:'ANT/BNB', price: 4.90, change: -2.03233 },
  { pair:'ADA/BNB', price: 0.00209, change: -0.90},
  { pair: 'ANT/BNB', price: 1.23, change: +3.3 },
  { pair: 'ADA/BNB', price: 3.23, change: 1.09 },
]

const databtc = [
  { pair: 'BNB/BTC', price: 1.003, change: +.090 },
  { pair: 'BNB/BTC', price: 2.34, change: -3.3 },
  { pair: 'BNB/BTC', price: 3.44, change: -2.3333 },
  { pair:'BNB/BTC', price: 0.003, change: +2.122 },
  { pair: 'BNB/BTC', price: 0.14, change: +4.5},
  { pair: 'BNB/BTC', price: 25, change: -1.290},
  { pair: 'BNB/BTC', price: 7.99, change: +0.433 },
  { pair:'BNB/BTC', price: 4.90, change: -2.03233 },
  { pair:'BNB/BTC', price: 0.00209, change: -0.90},
  { pair: 'BNB/BTC', price: 1.23, change: +3.3 },
  { pair: 'BNB/BTC', price: 3.23, change: 1.09 },
]



  

    const PairTable = () => {
        const [basicActive, okmb] = useState('1');
    
        const click = (value) => {
            if (value === basicActive) {
                return;
            }
    
            okmb(value);
        };
 
  return (
    <div id="okmb">
    <MDBTabs pills className='mb-3' >
        <MDBTabsItem>
            <MDBTabsLink id="md" onClick={() => click('1')}
            active={basicActive === '1'}>
               <AiFillStar/> Busd
            </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
            <MDBTabsLink id="md2" onClick={() => click('2')}
            active={basicActive === '2'}>
                Usdt
            </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
            <MDBTabsLink id="md2" onClick={() => click('3')}
            active={basicActive === '3'}>
                BNB
            </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
            <MDBTabsLink id="md2" onClick={() => click('4')}
            active={basicActive === '4'}>
             BTC
            </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
            <MDBTabsLink id="" onClick={() => click('5')}
            active={basicActive === '5'}>
             <NavDropdown 
          id="nav-dropdown-dark-example1"
          title="Alts"
          menuVariant="dark"
        >
       <div class="divide">
           <ul>
              
               <a href="#home"><li>ETH</li></a>
               <a href="#home"><li>XRP</li></a>
               <a href="#home"><li>TRX</li></a>
               <a href="#home"><li>DOGE</li></a>
               <a href="#home"><li>DOT</li></a>
              
           </ul>
       </div>
        </NavDropdown>

            </MDBTabsLink>
        </MDBTabsItem>
    
    </MDBTabs>

    <MDBTabsContent >
        <MDBTabsPane  show={basicActive === '1'}>
           
            
        <table className="table11">
<tr>
  <th><AiFillStar/>pair</th>
  <th>price</th>
  <th>change</th>
</tr>
{data.map((val, key) => {
  return (
    <tr key={key}>
      <td><AiFillStar/>{val.pair}</td>
      <td>{val.price}</td>
      <td>{val.change}</td>
     
    </tr>
  )
})}
</table>


</MDBTabsPane>
</MDBTabsContent>

<MDBTabsContent >
        <MDBTabsPane  show={basicActive === '2'}>
           
        <table className="">
<tr>
  <th><AiFillStar/>pair</th>
  <th>price</th>
  <th>change</th>
</tr>
{datausdt.map((usdt, key) => {
  return (
    <tr key={key}>
      <td><AiFillStar/>{usdt.pair}</td>
      <td>{usdt.price}</td>
      <td>{usdt.change}</td>
     
    </tr>
  )
})}
</table>


</MDBTabsPane>
</MDBTabsContent>

<MDBTabsContent >
        <MDBTabsPane  show={basicActive === '3'}>
           
        <table className="">
<tr>
  <th><AiFillStar/>pair</th>
  <th>price</th>
  <th>change</th>
</tr>
{databnb.map((bnb, key) => {
  return (
    <tr key={key}>
      <td><AiFillStar/>{bnb.pair}</td>
      <td>{bnb.price}</td>
      <td>{bnb.change}</td>
     
    </tr>
  )
})}
</table>


</MDBTabsPane>
</MDBTabsContent>

<MDBTabsContent >
        <MDBTabsPane  show={basicActive === '4'}>
           
        <table className="">
<tr>
  <th><AiFillStar/>pair</th>
  <th>price</th>
  <th>change</th>
</tr>
{databtc.map((btc, key) => {
  return (
    <tr key={key}>
      <td><AiFillStar/>{btc.pair}</td>
      <td>{btc.price}</td>
      <td>{btc.change}</td>
     
    </tr>
  )
})}
</table>


</MDBTabsPane>
</MDBTabsContent>

</div>
   
    
  );
}
  
export default PairTable