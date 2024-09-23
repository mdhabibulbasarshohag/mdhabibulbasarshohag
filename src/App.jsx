import './App.css'
import Circles from './Components/Circles/Circles'
import Profile from './Pages/Profile/Profile'

function App() {
  return (
    <div className='h-screen relative flex lg:justify-center lg:flex-row flex-col marker:'>
      <Circles />
      <div className='lg:w-[30%] w-full'>
        <Profile></Profile>
      </div>
      <div className='lg:w-[70%] w-full'>
        <p>left</p>
      </div>
    </div>
  )
}

export default App
