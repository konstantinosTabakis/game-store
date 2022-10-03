import Hero from "../components/home/Hero"
import SearchGameInput from "../components/home/SearchGameInput"
import RecomendedGames from "../components/home/RecommendedGames"
import Contact from "../components/home/Contact"
function Home() {
  return (
    <div className="container">
      <div className="container-wrapper">
        <Hero/>
      </div>
      <SearchGameInput/>
      <div className="container-wrapper">
        <RecomendedGames/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home