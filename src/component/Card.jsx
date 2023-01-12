import React from 'react'

export default function Card(props) {
  return (
    <>
     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="d-flex align-items-start">
                        <img class="img-fluid flex-shrink-0" src={props.image} alt=""/>
                        <div class="ps-4">
                            <h5 class="mb-3">{props.name}</h5>
                            <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo</span>
                        </div>
                    </div>
                </div> 
    </>
  )
}
