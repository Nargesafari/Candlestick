import React from 'react'

import { gql, useQuery } from '@apollo/client'

import ReactApexChart from 'react-apexcharts'

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
const GenerateChart = () => {
  const { data, loading, error } = useQuery(POSTS_QUERY)
  if (loading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!data) {
    return null
  }

  const chartData = {

    series: [
      {
      name: 'line1',
      type: 'line',
      data: data.getCandles
        .map(d => {
          return {
            x: [d.startTime],
            y: [d.low]
          }
        })
    },

    {
      name: 'line2',
      type: 'line',
      data: data.getCandles
        .map(d => {
          return {
            x: [d.startTime],
            y: [d.high]
          }
        })
    },
    
    {
      name: 'candlestick',
      type: 'candlestick',
      data: data.getCandles
        .map(d => {
          return {
            x: [d.startTime],
            y: [d.open, d.close, d.high, d.low]
          }
        })
    }],
    options: {
      chart: {
        type: 'candlestick',
        // height: '350px',
        
      },
      title: {
        text: 'CandleStick Chart',
        align: 'center'
      },
      xaxis: {
 

        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }

    }
  }
  const chartBarData = {
    series: [{
      name: '',
      data: data.getCandles
        .map(d => {
          return  {
             x:[d.startTime] ,
             y:[d.open ]
          }
        })
    },
    {
      name: '',
      data: data.getCandles
        .map(d => {
          return  {
            x:[d.startTime],
            y:[d.close] 
         }
        })
    }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 200
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50px',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: -1/100,
        colors: ['transparent']
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        title: {
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$' + val + 'price'
          }
        }
      }
    }
  }

  return (
    <div>
      <ReactApexChart id='chart' options={chartData.options} series={chartData.series} type='candlestick' height={420}
       />
      <ReactApexChart id='chart' options={chartBarData.options} series={chartBarData.series} type='bar' height={250}  style={{marginTop:'-30px'}} />

    </div>
  )
}

const Candlestick = () => {
  return (
    <div style={{ margin: '10px', paddingTop: '0px' }}>

      <div style={{ margin: '0px', padding: '0px', width:' 200px' }}>
        <GenerateChart />
      </div>
    </div>
  )
}

export default Candlestick
