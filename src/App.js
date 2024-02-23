import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import HeroHeader from "./components/heroHeader/HeroHeader";
import Info from "./components/info/Info";
import Information from "./components/information/Information";
import Menu from "./components/menu/Menu";
import AppNavbar from "./components/navbar/AppNavbar";
import Offer from "./components/offer/Offer";
import PopularFood from "./components/popularFood/PopularFood";
import Story from "./components/story/Story";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div>
      <AppNavbar />
      <HeroHeader />
      <Info />
      <Story />
      <Menu />
      <Testimonial />
      <Offer />
      <PopularFood />
      <Information />
      <Blog />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
