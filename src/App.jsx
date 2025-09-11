
import './App.css'
import ApartmentTypes from './components/content/ApartmentTypes'
import BestDeals from './components/content/BestDeals'
import Blog from './components/content/Blog'
import BuySection from './components/content/BuySection'
import ExploreApartment from './components/content/ExploreApartment'
import Featured from './components/content/Featured'
import Realtor from './components/content/Realtor'
import RealtorFeedback from './components/content/RealtorFeedback'
import Footer from './components/footer/Footer'
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
      <ExploreApartment/>
      <Realtor/>
      <ApartmentTypes/>
      <BuySection/>
      <RealtorFeedback/>
      <BestDeals/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
