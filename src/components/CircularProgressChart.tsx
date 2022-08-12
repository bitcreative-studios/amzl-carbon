import React, { useState } from 'react'
import { GaugeChart } from '@carbon/charts-react'
import { GaugeTypes, Statuses } from '@carbon/charts/interfaces'

export type CircularProgressChartProps = {}

const CircularProgressChart = ({}: CircularProgressChartProps) => {
  const [data, setData] = useState([
    {
      group: 'value',
      value: 42,
    },
    {
      group: 'delta',
      value: -13.37,
    },
  ])
  const [options, setOptions] = useState({
    title: 'PNOV Target -- warning status',
    resizable: false,
    theme: 'g10',
    height: '225px',
    gauge: {
      status: 'warning' as Statuses,
      type: 'semi' as GaugeTypes,
    },
  })
  return <GaugeChart data={data} options={options}></GaugeChart>
}

export default CircularProgressChart
