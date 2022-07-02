import React from 'react'
import { Link } from 'react-router-dom';
import Donate from '../pages/Donate'
import first from '../assets/four.jpg'
import second from '../assets/two.jpg'
import third from '../assets/three.jpg'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'


function Home() {
  return (
    <div>
      <br/>
      <br/>
      <br/>

      {/* <Donate/> */}
      <div className = "container align-self-center"> 
        <h3>"I think people forget that it doesn't take a big donation to help someone, just a lot of little donations."</h3>
      </div>

      <hr/>

      <div className = "container">
        <div className = "row">
          <div className = 'col col-md-4 '>
            <div className="card" style={{width: "18rem;"}}>
              <img className="card-img-top" src={img1} width = "200px" height = "150px" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Hinjewadi</h5>
                <p className="card-text">Thank you for helping me with these medicines.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className = 'col col-md-4 '>
            <div className="card" style={{width: "18rem;"}}>
              <img className="card-img-top" src={img2} width = "200px" height = "150px" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Kothrud</h5>
                <p className="card-text">These medicines saved my life.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
            </div>
          <div className = 'col col-md-4 '>
          <div className="card" style={{width: "18rem;"}}>
            <img className="card-img-top" src={img3} width = "200px" height = "150px" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Hadapsar</h5>
              <p className="card-text">Keep up the good work.</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          </div>
          </div>
      </div>
      <hr/>
      <div className="carousel slide m-4"  id="carouselControls" data-ride="carousel">
        {/* <ol class="carousel-indicators">
          <li data-target="#carouselControls" data-slide-to="0" className="active bg-danger"></li>
          <li data-target="#carouselControls" data-slide-to="1" className="bg-danger"></li>
          <li data-target="#carouselControls" data-slide-to="2" className="bg-danger"></li>
        </ol> */}
        <div className="carousel-inner">
          <div className="carousel-item active border">
            <img className="d-block w-100" src={first} height="400"  alt="first slide"/>
          </div>
          <div className="carousel-item border">
            <img className="d-block w-100" src={second} height="400" alt="second slide"/>
          </div>
          <div className="carousel-item border">
            <img className="d-block w-100" src={third} height="400" alt="third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
  
      <footer className="bg-dark text-center text-white">
        {/* <div className="container p-4 pb-0">
          | <Link to="/">Home</Link>  | <Link to="/about">About</Link> | <Link to="/about">Testimonials</Link> | 
        </div> */}
        <div className="text-center p-3">
          &copy;2021 Copyright:
          <a class="text-white" href="https://www.persistentfoundation.org/about/"> Persistent Systems foundation</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
