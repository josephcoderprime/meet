
import React from 'react'

import {
  ScatterChart, Scatter, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function EventsNumber(props) {
  const { locations, events } = props

  const getData = () => {
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return { city, number };
    })
    return data;
  };

  return (
    <ResponsiveContainer height={400}>
      <ScatterChart
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="city" name="city" stroke="#bbe1fa" />
        <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} stroke="#bbe1fa" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={getData()} fill="#bbe1fa" />
      </ScatterChart>
    </ResponsiveContainer>
  )
}