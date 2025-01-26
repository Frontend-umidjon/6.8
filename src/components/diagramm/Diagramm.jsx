import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import 'chart.js/auto';
import './Diagramm.scss';
import logo from '../../assets/Logo.png'

const data = {
  labels: ['Planting Trees', 'Cleanliness Program', 'Helping People', 'Animal Safety', 'Feeding the Poor'],
  datasets: [
    {
      data: [40, 35, 10, 10, 5],
      backgroundColor: ['#8BC34A', '#9575CD', '#FFEB3B', '#FFCC80', '#F48FB1'],
      hoverBackgroundColor: ['#8BC34A', '#9575CD', '#FFEB3B', '#FFCC80', '#F48FB1'],
    },
  ],
};

const DonationChart = () => {
  return (
    
    <Box className="donation-chart-container">
      
      <Typography variant="h4" className="title">
        How we spend your donations and where it goes
      </Typography>
      <Typography variant="body1" className="subtitle">
        We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.
      </Typography>
      <Box className="chart-wrapper">
        <Doughnut data={data} />
        <div className="center-text">
          <img src={logo} alt="" />
        </div>

      </Box>
      <Box className="legend">
        <Typography variant="body2" className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#8BC34A' }}></span> 40% planting trees
        </Typography>
        <Typography variant="body2" className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#9575CD' }}></span> 35% cleanliness program
        </Typography>
        <Typography variant="body2" className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#FFEB3B' }}></span> 10% helping people
        </Typography>
        <Typography variant="body2" className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#FFCC80' }}></span> 10% animal safety
        </Typography>
        <Typography variant="body2" className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#F48FB1' }}></span> 5% feeding the poor
        </Typography>
      </Box>
    </Box>
  );
};

export default DonationChart;
