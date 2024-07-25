import React from 'react'

const Carousel = () => {
  return (
    <div className='flex-wrap hero-block mt-0'>
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">  
    <div className="carousel-item active">
      <img  src="/images/img-hero1.jpg"  className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>It's Corporate World</h5>
        <p>If You want to learn some and Want some Exprince then join the corporate job</p>
        <div className='btn btn-danger btn-lg'><a href="#Learn More"></a>Learn More</div>
      </div>
    </div>
    <div className="carousel-item">
      <img  src="/images/img-hero2.jpg"  className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>It's Corporate World</h5>
        <p>If You want to learn some and Want some Exprince then join the corporate job</p>
        <div className='btn btn-danger btn-lg'><a href="#Learn More"></a>Learn More</div>
      </div>
    </div>
    <div className="carousel-item">
      <img   src="/images/img-hero3.jpg"  className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>It's Corporate World</h5>
        <p>If You want to learn some and Want some Exprince then join the corporate job</p>
        <div className='btn btn-danger btn-lg'><a href="#Learn More"></a>Learn-More</div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel;