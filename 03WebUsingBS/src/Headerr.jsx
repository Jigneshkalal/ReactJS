import React from 'react';


const Headerr = () => {
  return (
    <>
     
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand 'btn-warning'" href="#">Corporate</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Works">Works</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#price">price</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      </>
  );
}

export default Headerr;
