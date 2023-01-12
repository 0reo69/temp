import React from 'react'

export default function Tcard(props) {
  return (
   <>
   <div class="col-6 col-md-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="bg-light text-center p-3">
                        <h1 class="mb-0">{props.num}</h1>
                        <span class="text-primary fs-5">{props.name}</span>
                    </div>
                </div> 
   </>
  )
}
