import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import Carousel from "../../components/Home/Carousel/Carousel";
import Sentence from "../../components/Home/Sentence/Sentence";
import "./main_home.css"
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main_home">
        <Carousel />
        <Sentence />
      </div>
      <Footer />
    </>
  );
}
