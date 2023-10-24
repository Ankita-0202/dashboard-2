import dashboard from './images/dashboard.png';
import product from './images/dashorder.png';
import customer from './images/customer.png';
import income from './images/income.png';
import promote from './images/promote.png';
import help from './images/help.png';
export default function Navcol() {
  return (
    <>
      <div style={{ backgroundColor: '#034f84', height: '100vh', width: '210px' }}>
        <div style={{ backgroundColor: 'inherit', display: 'flex', flexFlow: 'column', marginTop: '10px', gap: '10px' }}>
          <div style={{ backgroundColor: 'inherit', color: 'white', fontFamily: 'sans-serif', marginRight: '3px', marginBottom: '20px', fontWeight:'bolder', fontSize:'25px' }}>⚙️Dashboard</div>
          <div className='nav-list'><img style={{ alignItems: 'stretch', marginLeft: '7px' }} className='nav-list-icon' src={dashboard} />  <span style={{backgroundColor:'inherit', Bottom:'10px'}}>Dashboard</span> </div>
          <div className='nav-list'><img style={{ alignItems: 'stretch', marginLeft: '7px' }} className='nav-list-icon' src={product} />    <span style={{backgroundColor:'inherit', Bottom:'10px'}}>Product</span></div>
          <div className='nav-list'><img style={{ alignItems: 'stretch', marginLeft: '7px' }} className='nav-list-icon' src={customer} />   <span style={{backgroundColor:'inherit', Bottom:'10px'}}>Customers</span></div>
          <div className='nav-list'><img style={{ alignItems: 'stretch', marginLeft: '7px' }} className='nav-list-icon' src={income} />     <span style={{backgroundColor:'inherit', Bottom:'10px'}}>Income</span></div>
          <div className='nav-list'><img style={{ alignItems: 'stretch', marginLeft: '7px' }} className='nav-list-icon' src={promote} />    <span style={{backgroundColor:'inherit', Bottom:'10px'}}>Promote</span></div>
          <div className='nav-list'><img style={{ alignItems: 'stretch', marginLeft: '7px' }} className='nav-list-icon' src={help} />       <span style={{backgroundColor:'inherit', Bottom:'10px'}}>Help</span></div>
        </div>
      </div >
    </>
  )
}

