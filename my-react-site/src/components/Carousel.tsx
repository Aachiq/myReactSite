import React from 'react'

export default function Carousel() {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">

    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="8"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="9"></button>
    </div>
    
    {/* The slideshow/carousel */}
    {/* <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./assets/img/carousel/6.png" style={{height: "200px"}} alt="Los Angeles" className="d-block" style={{width:"100%"}} />
      </div>
      <div className="carousel-item">
        <img src="./assets/img/carousel/c2.png" style={{height: "200px"}} alt="Chicago" className="d-block" style={{width:"100%"}} />
      </div>
      <div className="carousel-item">
        <img src="./assets/img/carousel/3.png" style={{height: "200px"}} alt="New York" className="d-block" style={{width:"100%"}} /> 
      </div>
       <div className="carousel-item">
        <img src="./assets/img/carousel/8.png" style={{height: "200px"}} alt="Los Angeles" className="d-block" style={{width:"100%"}} />
      </div>
      <div className="carousel-item">
        <img src="./assets/img/carousel/4.png" style={{height: "200px"}} alt="Los Angeles" className="d-block" style={{width:"100%"}} />
      </div>
      <div className="carousel-item">
        <img src="./assets/img/carousel/9.png" style={{height: "200px"}} alt="Chicago" className="d-block" style={{width:"100%"}} />
      </div>
      <div className="carousel-item">
        <img src="./assets/img/carousel/10.png" style={{height: "200px"}} alt="New York" className="d-block" style={{width:"100%"}} /> 
      </div>
       <div className="carousel-item">
        <img src="./assets/img/carousel/12.png" style={{height: "200px"}} alt="Los Angeles" className="d-block" style={{width:"100%"}} />
      </div>
      <div className="carousel-item">
        <img src="./assets/img/carousel/13.png" style={{height: "200px"}} alt="New York" className="d-block" style={{width:"100%"}} /> 
      </div>
       <div className="carousel-item">
        <img src="./assets/img/carousel/14.png" style={{height: "200px"}} alt="Los Angeles" className="d-block" style={{width:"100%"}} />
      </div>    
    </div>
     */}
{/* Left and right controls/icons */}
    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>   
</div>
  )
}
