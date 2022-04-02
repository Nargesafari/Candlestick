import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Candlestick from './Components/Candlestick'
import ShowValue from './Components/ShowValue'
import PriceTableLeft from './Components/PriceTableLeft'
import ValueWithTime from './Components/ValueWithTime'
import FooterTop from './Components/FooterTop'
import TableMarket from './Components/TableMarket'
import Footer from './Components/Footer'
import Limit from './Components/Limit'
import PairTable from './Components/PairTable'
import { gql, useQuery } from '@apollo/client'


const POSTS_QUERY = gql`
query{
   
  getCandles{
        candleId
        pair
        startTime
        endTime
        open
        high
        low
        close
        interval
        volume
        isUpCandle
    }
  }
`

function App () {
  const { data, loading } = useQuery(POSTS_QUERY)
  if (loading) {
    return <div>loading</div>
  }
  console.log(data)
  return (
    <div className='App'>
      <div className='App1'>
        <Header />
      </div>

     

      <div className='App3'>
        <PairTable/>
      </div>

      <div className='App4'>
        <ShowValue />
      </div>

      <div className='App5'>
        <PriceTableLeft />
      </div>

      <div className='App7'>
        <Candlestick />
      </div>

      <div className='App8'>
        <TableMarket />
      </div>

      

      <div className='App10'>
        <Limit />
      </div>

      <div className='App11'>
        <ValueWithTime />
      </div>

      <div className='App12'>
        <FooterTop />
      </div>

      <div className='App13'>
        <Footer />
      </div>

    </div>
  )
}
export default App
