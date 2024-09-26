import './App.css'
import Circles from './Components/Circles/Circles'
import Profile from './Pages/Profile/Profile'

function App() {
  return (
    <div className='lg:h-screen md relative flex p-3 lg:justify-center lg:flex-row flex-col marker:'>
      <Circles />
      <div className='lg:w-[30%] border-2 rounded-lg border-purple-500 lg:mr-3 mb-3 lg:mb-0 w-full'>
        <Profile></Profile>
      </div>
      <div className='lg:w-[70%] border-2 rounded-lg border-purple-500 w-full'>
        <p>left</p>
      </div>
    </div>
  )
}

export default App
