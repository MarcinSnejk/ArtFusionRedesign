import About from "./components/About";
import ForArtist from "./components/ForArtist";
import Herosection from "./components/Herosection";
import HowWorks from "./components/HowWorks";
import Offer from "./components/offer";
import Social from "./components/Social";
import Team from "./components/Team";
import Contact from "./components/Contact";


export default function App() 
{
  return (
    <>

      <Herosection />
      <About />
      <Team />
      <Offer />
      <HowWorks />
      <ForArtist />
      <Social />
      <Contact />

    </>
  )
}