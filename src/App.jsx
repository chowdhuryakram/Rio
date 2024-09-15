import "./App.css";
import BlockContent from "./components/BlockContent";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LogoSlider />
      <Services />
      <BlockContent />
      <Testimonial />
    </>
  );
}

export default App;
