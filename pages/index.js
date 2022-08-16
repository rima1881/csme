import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Events from '../components/Events'
import OurMission from "../components/OurMission"
import Projects from '../components/Projects'

export default function Home(){
  return(
    <>
      <Navbar />
      <Header />
      <Events />
      <OurMission />
      <Projects />
    </>
    )
}