import React from 'react'

export default function Data(props) {
  return (
   <>
    <div class="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
                    <img class="img-fluid mb-4" src={props.image} alt=""/>
                    <h1 class="display-4" data-toggle="counter-up">{props.num}</h1>
                    <p class="fs-5 text-primary mb-0">{props.name}</p>
                </div>
   </>
  )
}
