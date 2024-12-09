import Image from "next/image";
import Header from "./component/header";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import About from "./component/about";
export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  );
}
