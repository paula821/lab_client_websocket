import React from 'react'
import { ResponsiveContainer } from 'recharts';
import { LineChart } from 'recharts';
import { CartesianGrid } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { Legend } from 'recharts';
import { Line } from 'recharts';


export default function Grafico({currency}) {
    return (
        <div className='container fluid'>
            <div className='row flex-row flex-nowrap'>
        <LineChart
          width={800}
          height={800}
          data={currency}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 10 }} 
          name="USD (BTC)"/>
          {/*<Line type="monotone" dataKey="price" stroke="#82ca9d" />*/}
        </LineChart>
          </div>
      </div>
    )
}
