import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
const DoughnutChart = () => {
  // Data for the chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [65,35],
        backgroundColor: [ '#734f96','#dcd0ff'],
      },
    ],
  };

  return (
    <>
    <div style={{width:'auto', backgroundColor:'white',marginLeft:'0',display:'flex', flexWrap:'wrap',borderRadius:'10px 10px 10px 10px'}}>
    <div style={{ marginLeft:'15px', display:'flex', flexWrap:'wrap', backgroundColor:'white'}}>
      <div style={{width:'auto', backgroundColor:'white'}}><Doughnut data={data} style={{backgroundColor:'white', width:'auto'}}/> </div>
      <div style={{backgroundColor:'white'}}>Customers</div>
    </div>
    </div>
    </>
  );
};

export default DoughnutChart;
