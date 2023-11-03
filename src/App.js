import "./App.css";
import Footer from "./components/Footer";
import From from "./components/From";
import Navbar from "./components/Navbar";
import OtherPart from "./components/OtherPart";

function App() {
  return (
    <div className=" w-screen min-h-screen bg-[#F5F5F5]">
    <div>
    <Navbar></Navbar>
    <OtherPart></OtherPart>
    <div className=" w-full bg-[#7B7B7B] flex items-center justify-center py-2 font-Unbounded tracking-widest mt-8 uppercase">
            <h2>Program starts at Rs 55000/ GST see Plans</h2>
          </div>
    </div>
    <Footer></Footer>
    {/* <From></From> */}
    </div>
  );
}

export default App;
