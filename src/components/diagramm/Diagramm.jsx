import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './Diagramm.scss';
import diagrammImg from '../../assets/diagramImg.png'

const DONATIONS_DATA = [
  { label: 'Planting Trees', value: 40, color: '#B4E0A7' },
  { label: 'Cleanliness Program', value: 35, color: '#9B8EE8' },
  { label: 'Helping People', value: 10, color: '#F9E5C9' },
  { label: 'Animal Safety', value: 10, color: '#F6C85D' },
  { label: 'Feeding the Poor', value: 5, color: '#E8A5D0' },
];

export default function DonationChart() {
  const chartData = {
    labels: DONATIONS_DATA.map((item) => item.label),
    datasets: [
      {
        data: DONATIONS_DATA.map((item) => item.value),
        backgroundColor: DONATIONS_DATA.map((item) => item.color),
        borderWidth: 0, 
      },
    ],
  };

  const chartOptions = {
    cutout: '70%', 
    plugins: {
      legend: {
        display: false, 
      },
    },
  };

  return (
    <div className="donation-chart">
     <div className="container">
     <div className="donation-chart__content">
        <h1 className="donation-chart__title">
          How we spend your donations and where it goes
        </h1>
        <p className="donation-chart__description">
          We understand that when you make a donation, you want to know exactly where your
          money is going, and we pledge to be transparent.
        </p>
        <div className="donation-chart__legend">
          {DONATIONS_DATA.map(({ label, value, color }) => (
            <div key={label} className="donation-chart__legend-item">
              <span
                className="donation-chart__legend-indicator"
                style={{ backgroundColor: color }}
              />
              <span>{`${value}% ${label}`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="donation-chart__chart">
        <Doughnut data={chartData} options={chartOptions} />
        <div className="donation-chart__center-text"><img src={diagrammImg} alt="" /></div>
      </div>
     </div>
    </div>
  );
}
