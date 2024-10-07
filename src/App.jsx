import Benefits from "./components/About/Benefits";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Home/Hero";
import Merchandise from "./components/Team/Merchandise";
import Events from "./components/Events/Events";
import Videos from "./components/Videos/Videos";
import FAQ from "./components/FAQ/FAQ";
import ContactUs from "./components/Contact/ContactUs";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Events />
        <Merchandise />
        <Videos />
        <FAQ />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default App;
