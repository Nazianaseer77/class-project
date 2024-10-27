import Image from "next/image";
import Navbar from "./component/Header/Header";
import Link from "next/link";
import Hero from "./component/Hero/Hero";
import Footer from "./component/Footer/Footer";
export default function Home() {
  return (
   <div>
    <Navbar/>
     <Hero/>
     <Footer/>
    
    
   </div>
  );
}
