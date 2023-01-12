import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./common/Footer";
import Header from "./common/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Tokensale from "./pages/Tokensale";
import Roadmap from "./pages/Roadmap";
import Service from "./pages/Service";
import Feature from "./pages/Feature";
import Contact from "./pages/Contact";
import Fourpage from "./pages/Fourpage";
import Api from "./pages/Api";
import Apii from "./pages/Apii";
import Apract from "./pages/Apract";
import Displaytable from "./component/Displaytable";
import Detail from "./pages/Detail";

function App() {
  return (
   
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about/" element={<About/>}/>
        <Route path="service/" element={<Service/>}/>
        <Route path="roadmap/" element={<Roadmap/>}/>
        <Route path="tokensale/" element={<Tokensale/>}/>
        <Route path="feature/" element={<Feature/>}/>
        <Route path="contact/" element={<Contact/>}/>
        <Route path="Fourpage/" element={<Fourpage/>}/>
        <Route path="Api/" element={<Api/>}/>
        <Route path="Api2/" element={<Apii/>}/>
        <Route path="Apract/" element={<Apract/>}/>
        <Route path="Display/" element={<Displaytable/>}/>
        <Route path="Detail/" element={<Detail/>}/>

      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
