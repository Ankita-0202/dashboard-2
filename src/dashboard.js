import './dashboard.css';
import dollar from './images/dollar-sign.png';
import order from './images/orders.png';
import balance from './images/balance.png';
import sales from './images/sales.png';
import DoughnutChart from './doughChart';
import Abstract3d from './images/Abstract3d.jpg'
import illustration from './images/illustration.jpg'
function Dashboard() {
    return (
        <>
            <div>
                <div><h3>Hello User 👋,</h3></div>
                <div style={{ display: 'grid', gridTemplateRows: '1fr', gridTemplateColumns: '3fr 1.1fr', gridGap: '17px' }}>
                    <div>
                        <div className="tray-container" style={{ display: "flex", flexWrap: 'wrap' }}>
                            <div className="tray-tabs">
                                <div style={{ backgroundColor: 'white' }}><img src={dollar} height={60} style={{ backgroundColor: 'white' }} /></div>
                                <div style={{ backgroundColor: 'white' }}>
                                    <div className='tile-title'> Earning</div>
                                    <div className='tile-amt'>$198k</div>
                                    <div className='tile-stat'>↑48.8% this month</div>
                                </div>
                            </div>
                            <div className="tray-tabs">
                                <div style={{ backgroundColor: 'white' }}><img src={order} height={60} style={{ backgroundColor: 'white' }} /></div>
                                <div style={{ backgroundColor: 'white' }}>
                                    <div className='tile-title'> Orders</div>
                                    <div className='tile-amt'>$2.4k</div>
                                    <div className='tile-loss'>↓2% this month</div>
                                </div>
                            </div>
                            <div className="tray-tabs">
                                <div style={{ backgroundColor: 'white' }}><img src={balance} height={60} style={{ backgroundColor: 'white' }} /></div>
                                <div style={{ backgroundColor: 'white' }}>
                                    <div className='tile-title'> Balance</div>
                                    <div className='tile-amt'>$3.6k</div>
                                    <div className='tile-loss'>↓3% this month</div>
                                </div>
                            </div>
                            <div className="tray-tabs">
                                <div style={{ backgroundColor: 'white' }}><img src={sales} height={60} style={{ backgroundColor: 'white' }} /></div>
                                <div style={{ backgroundColor: 'white' }}>
                                    <div className='tile-title'> Total Sales</div>
                                    <div className='tile-amt'>$89k</div>
                                    <div className='tile-stat'>↑11% this week</div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className='bar-chart' style={{ display: 'flex', gap: '10px', height: '250px', marginRight: '0px', alignItems: 'end', borderRadius: '5px', backgroundColor: 'white', paddingLeft: '95px', paddingTop: '10px', paddingBottom: '10px', marginLeft: '10px' }}>
                                <div className='bars' style={{ height: '50%', width: '7%', backgroundColor: '#dcd0ff', borderRadius: '3px' }}></div>
                                <div className='bars' style={{ height: '85%', width: '7%', backgroundColor: '#dcd0ff', borderRadius: '3px' }}></div>
                                <div className='bars' style={{ height: '76%', width: '7%', backgroundColor: '#dcd0ff', borderRadius: '3px' }}></div>
                                <div className='bars' style={{ height: '100%', width: '7%', backgroundColor: '#dcd0ff', borderRadius: '3px' }}></div>
                                <div className='bars' style={{ height: '46%', width: '7%', backgroundColor: '#dcd0ff', borderRadius: '3px' }}></div>
                                <div className='bars' style={{ height: '38%', width: '7%', backgroundColor: '#dcd0ff', borderRadius: '3px' }}></div>
                                <div className='bars' style={{ height: '20%', width: '7%', backgroundColor: '#dcd0ff', borderRadius: '3px' }}></div>
                                <div className='bars' style={{ height: '52%', width: '7%', backgroundColor: '#dcd0ff', borderRadius: '3px' }}></div>
                                <div className='bars' style={{ height: '69%', width: '7%', backgroundColor: '#dcd0ff', borderRadius: '3px' }}></div>
                                <div className='bars' style={{ height: '10%', width: '7%', backgroundColor: '#dcd0ff', borderRadius: '3px' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className='dough' style={{ backgroundColor: 'white', borderRadius: '10px 10px 10px 10px' }}><DoughnutChart /></div>
                </div>
                <div style={{ backgroundColor: 'white', height: '100px', width: 'screen-fit', marginTop: '10px' }}>
                    <h3 style={{ backgroundColor: 'inherit', display: 'inline' }}>Product Sell</h3>
                    <span style={{ float: 'right', backgroundColor: 'white' }}><input type='search' placeholder='search' style={{ border: 'none', borderRadius: '7px', backgroundColor: '#FAFAFA' }}></input></span>
                    <span style={{ float: 'right', backgroundColor: 'white' }}>
                        <select style={{ border: 'none', borderRadius: '7px', backgroundColor: '#FAFAFA' }}>
                            <option >Transactions</option>
                            <option >last month</option>
                            <option >This month</option>
                            <option >last 15 days</option>
                            <option >last week</option>
                            <option >This week</option>
                        </select>
                    </span><br></br>
                    <br></br>
                    <br></br>
                    <div className='container' style={{ backgroundColor: 'white', display: 'grid', gridTemplateColumns: '1fr 6fr 1fr 1fr 1fr', marginLeft: '10px', color: 'grey'}}>
                        <div >Product Name</div>
                        <div> </div>
                        <div>Stocks</div>
                        <div>Price</div>
                        <div>Total Sales</div>
                    </div><br></br>
                    <div className='container' style={{ backgroundColor: 'white', display: 'grid', gridTemplateColumns: '1fr 6fr 1fr 1fr 1fr', marginLeft: '10px', color: 'black'}}>
                        <div ><img src={Abstract3d} height={60} style={{borderRadius:'10px'}}></img></div>
                        <div style={{fontWeight:'bold'}}>Abstract3d <div style={{color:'grey', fontWeight:'normal', backgroundColor:'White', fontSize:'x-small'}}>Lorem ipsum quala vela</div></div>
                        <div>32 in stock</div>
                        <div style={{fontWeight:'bold'}}>$ 44.55</div>
                        <div>20</div>
                    </div>
                    <div className='container' style={{ backgroundColor: 'white', display: 'grid', gridTemplateColumns: '1fr 6fr 1fr 1fr 1fr', marginLeft: '10px', color: 'black'}}>
                        <div ><img src={illustration} height={58} style={{borderRadius:'10px'}}></img></div>
                        <div style={{fontWeight:'bold'}}>Illustration <div style={{color:'grey', fontWeight:'normal', backgroundColor:'White', fontSize:'x-small'}}>Lorem ipsum quala vela</div></div>
                        <div>45 in Stocks</div>
                        <div style={{fontWeight:'bold'}}>$ 36.49</div>
                        <div>20</div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Dashboard;