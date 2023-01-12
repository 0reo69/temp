import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Detail() {
    const location=useLocation();
  return (
    <div>
      <h1>{location.state.userid}</h1>
      <h1>{location.state.usertitle}</h1>
      <p>{location.state.userurl}</p>
      <h1>hlonworld</h1>
    </div>
  )
}
