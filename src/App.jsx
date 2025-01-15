
import './App.css'
import LineChart from './components/lineChart/LineChart'
import NavBar from './components/navBar/NavBar'
import PriceOptions from './components/priceOptions/PriceOptions'
// import DaisyNav from './components/daisyNav/DaisyNav'

function App() {
 

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
