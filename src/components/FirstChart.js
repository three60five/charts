import React from 'react';
import LineChart from './LineChart';


const FirstChart = ({ ChartTitle, data, style }) => {
  return (
    <div>
      <h3>{ChartTitle}</h3>
      <LineChart ChartTitle="First Spike"

          data={[
            {month: "Sept", profit: 35000, loss: 2000},
            {month: "October", profit: 42000, loss: 8000},
            {month: "November", profit: 55000, loss: 5000}
          ]}
      />
    </div>
  )
};

export default FirstChart
