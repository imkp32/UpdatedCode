import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard'
import  useMediaQuery  from 'react-responsive'

import HighchartsReact from 'highcharts-react-official';
import './components/high_chart.css';
import 'react-dropdown/style.css';
import ScrollingHorizontally from './components/scrollinghorizontally';
import { Desktop } from "./components/desktop/desktop.component";
import { Laptop } from "./components/laptop/laptop.component";
import { BigScreen } from "./components/big-screen/big-screen.component";
import { Mobile } from "./components/mobile/mobile.component";
import { TabletMobile } from "./components/tablet-mobile/tablet-mobile.component";



function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  
  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  
  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    
    <div className="App">
      {isMobileDevice && <Mobile />}
      {isTabletDevice && <>
          <TabletMobile />
          {isDesktop && <Desktop />}
          {isLaptop && <Laptop />}
          {isBigScreen && <BigScreen />}
        </>}
    <Dashboard />
    <ScrollingHorizontally />
    </div>
  );
}

export default App;
