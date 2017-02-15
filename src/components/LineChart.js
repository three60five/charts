import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';


const LineChart = ({ data, style }) => {
  return (
      <VictoryChart
        style={{
          parent: {border: "1px solid #ccc"},

        }}
         >
        <VictoryAxis 
          style={{
            axis: {stroke: "#756f6a"},
            axisLabel: {fontSize: 16, padding: 20},
            grid: {stroke: (t) => t === 10 ? "red" : "grey"},
            ticks: {stroke: "grey"},
            tickLabels: { padding: 5}
          }} />
        <VictoryAxis dependentAxis/>


        <VictoryLine
          style={{
            data: { stroke: "orange" },
            labels: {fontSize: 8},
            axisLabel: {fontSize: 8, padding: 20},
            parent: {border: "1px solid blue"}
          }}

          data={data}

          x="month"
          y={(datum) => datum.profit - datum.loss}

        />
      </VictoryChart>
  )
};

export default LineChart
