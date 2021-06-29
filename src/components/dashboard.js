import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './high_chart.css';
import Dropdown from 'react-dropdown'
import {Col,Row,Container} from 'react-bootstrap';
import WidgetText from './widgetText'
import Sample from './ag_grid'
import SearchBox from './SearchBox';
import TestingChart from './drilldown';
import Box from '@material-ui/core/Box';
class dashboard extends Component {
      render() {
        const options = {
            
            title: {
              text: 'Historical cummulative returns'
            },
            /*legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
            },*/
            series: [{
              name: 'ICICI Prudential Focused Bluechip Equity Fund.',
              data: [-50 , 0, 550, 300, 100, 650, 350, 100, 1000],
              type: 'line'
            },
            {
              name: 'Aditya Birla Sun Life Small & Midcap Fund.',
              data: [-108 , 0, 507, 415, 1000, 560, 300, 800, 250],
              type: 'line'
            },
            {
              name: 'Tata Equity PE Fund',
              data: [-60 , 0, 100, 200, 300, 600, 700, 850, 900],
              type: 'line'
            },
            {
              name: 'HDFC Monthly Income Plan – MTP.    ',
              data: [-50 , 100, 200, 300, 400, 300, 350, 500, 700],
              type: 'line'
            },
          ],
            yAxis: {
              title: {
                text: 'Cummulative return (In percentages)', 
              },
              labels: {
                formatter: function() {
                    return this.value + ' %';
                }
            },
            },
          
            xAxis: {
              accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
              }
            },
            plotOptions: {
              series: {
                      pointStart: 2010
              }
            },
            /*responsive: {  
              rules: [{  
                condition: {  
                  maxWidth: 1000  
                }  
                chartOptions: {  
                  legend: {  
                    enabled: true  
                  }  
                }  
              }]  
            }*/   
          }
          const options1 = [
            'Search for MutualFund', 'Blogs', 'Contact',
            
          ];
        return (
          <div>
 <Container fluid>
<Row className='TopHeader'>
 <Col>
 <img src="./MarketviewLogo.ico" alt="MarketViewLogo" width="50" height="50" ></img>
 </Col>
 <Col className="skewtext">
 Market  View
 </Col>
 <Col>
 <Dropdown options={options1}  placeholder="Select an option" />
 </Col>
</Row>
</Container>


<Container fluid>
<Row >
  <Col>
  <SearchBox />
  </Col>
</Row>
<br></br>
</Container>

<Container fluid>
<Row >
<Col>
    <WidgetText title='NAV' value='58.88' description='Net Asset Value' />
</Col>
<Col>
    <WidgetText title='One Day Returns' value='100' description='Returns' />
</Col>
<Col>
    <WidgetText title='Weekly Returns' value='300' description='Returns' />
</Col>
</Row>

<Row>
<Col>
   <WidgetText title='Yearly Returns' value='1000' description ='Returns'/>
</Col>
<Col>
   <WidgetText title='Week to Date' value='800' description ='Returns'/>
</Col>
<Col>
   <WidgetText title='Month to Date' value='400' description ='Returns'/>
</Col>
</Row>
</Container>

<Container fluid>
<br></br>
<Row>
    <Col width= '100%' height='100%'><Sample/></Col> 
    <Col>
              <Box className="box">
              <ul><h3 className='AssetTitle'>Similar Assets</h3>
              <li>ICICI Prudential Focused Bluechip Equity Fund</li>
              <li>Aditya Birla Sun Life Small & Midcap Fund</li>
              <li>Tata Equity PE Fund</li>
              <li>L&T Tax Advantage Fund</li>
              <li>SBI Nifty Index Fund.</li>
              <li>Kotak Corporate Bond Fund.</li>
              </ul>
              </Box>
     </Col>

<Col>
              <TestingChart />
</Col>
</Row>
</Container>
<br></br> 
<Box className='BoxChart' >
<HighchartsReact  highcharts={Highcharts} options={options}/>

</Box>


              
          </div>
          
        );
    }
    
}

export default dashboard;