import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

export default function Header() {
  return (
   <>
   
   {/* <!-- Navbar Start --> */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
        <a href="index.html" class="navbar-brand d-flex align-items-center">
            <h2 class="m-0 text-primary" ><img class="img-fluid me-2" src="/img/icon-1.png" alt=""
                    />CryptoCoin</h2>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-4 py-lg-0">
                <Link to="/" class="nav-item nav-link active">Home</Link>
                <Link to="/about/" class="nav-item nav-link">About</Link>
                <Link to="/service/" class="nav-item nav-link">Service</Link>
                <Link to="/roadmap/" class="nav-item nav-link">Roadmap</Link>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu shadow-sm m-0">
                        <Link to="/feature/" class="dropdown-item">Feature</Link>
                        <Link  to="/tokensale/" class="dropdown-item">Token Sale</Link>
                        <Link to="/FAQs/" class="dropdown-item">FAQs</Link>
                        <Link to="/Api/" class="dropdown-item">Api</Link>
                        <Link to="/Api2/" class="dropdown-item">Apii</Link>
                        <Link to="/Apract/" class="dropdown-item">Apract</Link>
                        <Link to="/Display/" class="dropdown-item">Displaytable</Link>
                        <Link to="/Detail/" class="dropdown-item">Detail</Link>
                       
                    </div>
                </div>
                <Link to="/contact/" class="nav-item nav-link">Contact</Link>
            </div>
            <div class="h-100 d-lg-inline-flex align-items-center d-none">
                <a class="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i
                        class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i
                        class="fab fa-twitter"></i></a>
                <a class="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i
                        class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </nav>
    {/* <!-- Navbar End --> */}
   </>
  )
}
