
import './App.css'
import Featured from './components/content/Featured'
import Banner from './components/header/Banner'
import Navbar from './components/header/Navbar'
import SearchBar from './components/header/SearchBar'

function App() {
  return (
    <div className='bg-[#F7F7F7]'>
      <Navbar/>
      <Banner/>
      <SearchBar/>
      <Featured/>
    </div>
  )
}

export default App
