import React from 'react'
import Tcard from '../component/Tcard'

export default function Tokensale() {
  return (
    <>
    
    {/* <!-- Header Start --> */}
    <div class="container-fluid hero-header bg-light py-5 mb-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 mb-3 animated slideInDown">Token Sale</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Token Sale</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-lg-6 animated fadeIn">
                    <img class="img-fluid animated pulse infinite" src="/img/hero-2.png"
                        alt=""/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}


    {/* <!-- Token Sale Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
                <h1 class="display-6">Token Sale</h1>
                <p class="text-primary fs-5 mb-5">Token Sale Countdown</p>
            </div>
            <div class="row g-3">
                <Tcard name="Days" num="41"/>
                <Tcard name="Hour" num="41"/>
                <Tcard name="Minutes" num="41"/>
                <Tcard name="Seconds" num="41"/>
               
                {/* <div class="col-6 col-md-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="bg-light text-center p-3">
                        <h1 class="mb-0">0</h1>
                        <span class="text-primary fs-5">Days</span>
                    </div>
                </div> */}
                {/* <div class="col-6 col-md-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="bg-light text-center p-3">
                        <h1 class="mb-0">0</h1>
                        <span class="text-primary fs-5">Hours</span>
                    </div>
                </div> */}
                {/* <div class="col-6 col-md-3 wow fadeIn" data-wow-delay="0.5s">
                    <div class="bg-light text-center p-3">
                        <h1 class="mb-0">0</h1>
                        <span class="text-primary fs-5">Minutes</span>
                    </div>
                </div> */}
                {/* <div class="col-6 col-md-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="bg-light text-center p-3">
                        <h1 class="mb-0">0</h1>
                        <span class="text-primary fs-5">Seconds</span>
                    </div>
                </div> */}
                <div class="col-12 text-center py-4">
                    <a class="btn btn-primary py-3 px-4" href="">Buy Token</a>
                </div>
                <div class="col-12 text-center">
                    <img class="img-fluid m-1" src="/img/payment-1.png" alt=""/>
                    <img class="img-fluid m-1" src="/img/payment-2.png" alt="" />
                    <img class="img-fluid m-1" src="/img/payment-3.png" alt=""/>
                    <img class="img-fluid m-1" src="/img/payment-4.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Token Sale Start --></div> */}
    </>
  )
}
