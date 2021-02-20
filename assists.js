import React from "react";
import { Line } from "react-chartjs-2";

function LineChart1(props) {
  const data = {
    labels: ["November", "December", "Janruary", "February", "March"],
    datasets: [
      {
        label: props.name1,
        fill: false,
        data: props.data1,
        borderColor: ["rgb(255,206,86"],
        backgroundColor: ["rgba(255,206,86"],
        pointBackgroundColor: "rgba(255,206,86",
        pointBorderColor: "rgba(255,206,86",
      },
      {
        label: props.name2,
        fill: false,
        borderColor: ["rgb(25,25,112)"],
        backgroundColor: ["rgba(25,25,112)"],
        pointBackgroundColor: "rgba(25,25,112)",
        pointBorderColor: "rgba(25,25,112)",
        data: props.data2,
      },
      {
        label: props.name3,
        fill: false,
        borderColor: ["rgb(255, 99, 71)"],
        backgroundColor: ["rgb(255, 99, 71)"],
        pointBackgroundColor: "rgb(255, 99, 71)",
        pointBorderColor: "rgb(255, 99, 71)",
        data: props.data3,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "'19-20 Assists Averages",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 15,
            stepSize: 2.5,
          },
        },
      ],
    },
  };

  return (
    <div
      style={{
        height: "700px",
        width: "600px",
        position: "absolute",
        top: "50%",
        right: "36.7%",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart1;
