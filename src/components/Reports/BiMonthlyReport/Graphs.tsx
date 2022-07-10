import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { generateGraphData } from '../../../utils/graphs';

export const BiMonthlyGraph = ({ reportData }) => {
  const graphData = generateGraphData('bimonthly', reportData);
  const BarsConfig = [
    {
      property: 'NS',
      color: '#F35533',
    },
    {
      property: 'S',
      color: '#F39333',
    },
    {
      property: 'B',
      color: '#F0F333 ',
    },
    {
      property: 'MB',
      color: '#93F333',
    },
    {
      property: 'EXC',
      color: '#33F359',
    },
  ];

  if (!graphData || graphData.length === 0) {
    return <></>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={1200}
        height={350}
        data={graphData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" interval="preserveStartEnd" />
        <Tooltip />
        <YAxis allowDecimals={false} domain={['dataMin', 'dataMax']} />
        <Legend />
        {React.Children.toArray(
          BarsConfig.map(({ property, color }) => <Bar dataKey={property} stackId="a" fill={color} />)
        )}
      </BarChart>
    </ResponsiveContainer>
  );
};
