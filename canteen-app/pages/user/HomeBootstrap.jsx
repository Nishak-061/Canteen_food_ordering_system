import React from 'react';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';
import Front from "../../images/front.png"
import Thali from "../../images/Thali.png"
import Front1 from "../../images/Front1.png"
import Front3 from "../../images/Front3.png"
import Nutrition from "../../images/Nutrition.png"
import "../../styles/HomeBootstrap.css"
import WOW from 'wowjs'


class HomeBootstrap extends React.Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className='container-xxl bg-white p-0'>
              <div className='container-xxl py-1 bg-dark hero-header mb-1'>
                <div className='container '>
                  <div className='row align-items-center g-5'>
                    <div className='col-lg-5 text-center text-lg-start'>
                      <h1 className='display-3 text-white animate__animated animate__slideInLeft'>Enjoy Your <br />Delicious Meal </h1>
                      <p className='text-white animate__animated animate__slideInLeft mb-4 pb-2'>"Food is for eating, and good food is to be enjoyed...I think food is, actually, very beautiful in itself".</p>
                      <Link to="" className='btn btn-warning py-sm-3 px-sm-5 me-3 animate__animated animate__slideInLeft'>Scroll down</Link>
                    </div>
                    <div className='col-lg-6 text-center text-lg-end overflow-hidden'>
                        <img src={Front} className='img-fluid' alt='front'/>
                    </div>
                  </div>
                </div>
              </div>
        
             {/*--------service section-----------*/}
             <div className='container-xxl py-5 '>
                <div className='container'> 
                <div className='row g-4'>
                 <h5 className='text-center'></h5>
                 <div className='col-lg-3 col-sm-6 wow animate__animated animate__fadeInUp' data-wow-delay="0.4s">
                        <div className='service-item rounded pt-3'>
                            <div className='p-4'>
                                <i className='fa fa-3x fa-user-tie text-primary mb-4'></i>
                                <h5 className=''>Chefs</h5>
                                <p>Chef ensure kitchens' cleanliness and safety, they purchase and prepare ingredients, cook meals for internal staff.</p>
                            </div>
                        </div>
                    </div>
        
                    <div className='col-lg-3 col-sm-6 wow animate__animated animate__fadeInUp' data-wow-delay="0.4s">
                        <div className='service-item rounded pt-3 h-100'>
                            <div className='p-4'>
                                <i className='fa fa-3x fa-utensils text-primary mb-4'></i>
                                <h5 className=''>Quality foods</h5>
                                <p>A measure of how well the service level delivered matches customers' expectations.</p>
                            </div>
                        </div>
                    </div>
        
                    <div className='col-lg-3 col-sm-6 wow animate__animated animate__fadeInUp' data-wow-delay="0.6s">
                        <div className='service-item rounded pt-3 h-100'>
                            <div className='p-4'>
                                <i className='fa fa-3x fa-shopping-cart text-primary mb-4'></i>
                                <h5 className=''>Online Order</h5>
                                <p>Customer can check the food items details with prices efficiently saves a lot of time of customers because of online transactions</p>
                            </div>
                        </div>
                    </div>
        
                    <div className='col-lg-3 col-sm-6 wow animate__animated animate__fadeInUp' data-wow-delay="0.8s">
                        <div className='service-item rounded pt-3 h-100'>
                            <div className='p-4'>
                                <i className='fa fa-3x fa-credit-card text-primary mb-4'></i>
                                <h5 className=''>Online Payment</h5>
                                <p>Customers can purchase items from the comfort of their own homes or workplace.</p>
                            </div>
                        </div>
                    </div>
                 
                </div>
                </div>
             </div>
        
        {/* About Section */}
         <div className='container-xxl py-5'>
            <div className='container'>
                <div className='row g-5 align-items-center'>
                    <div className='col-lg-6'>
                        <div className='row g-3'>
                        <div className='col-6 text-start'>
                                <img src={Nutrition} alt='nutrition'  className='img-fluid rounded w-100 wow  animate__animated animate__zoomIn' data-wow-delay="0.1s"/>
                            </div>
        
                            <div className='col-6 text-start'>
                                <img src={Thali} alt='thali' className='img-fluid rounded w-75 wow animate__animated animate__zoomIn' data-wow-delay="0.3s" style={{marginTop:'100px'}}/>
                            </div>
        
                            <div className='col-6 text-end'>
                                <img src={Front1} alt='front1' className='img-fluid rounded w-75 wow animate__animated animate__zoomIn' data-wow-delay="0.5s" style={{marginTop:'-90px'}}/>
                            </div>
        
                            <div className='col-6 text-end'>
                                <img src={Front3} alt='front3' className='img-fluid rounded w-100 wow animate__animated animate__zoomIn' data-wow-delay="0.7s" style={{marginTop:'-180px'}}/>
                            </div>
        
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h5 className="section-title ff-secondary text-start text-danger fw-normal">About Us</h5>
                        <h1 className='mb-4'>Welcome to <i className='fa fa-utensils text-warning me-2'></i>Canteen</h1>
                        <p className='mb-4'>Our user-friendly interface allows you to effortlessly select your favorite dishes, customize your order, and place it with just a few clicks. Say goodbye to long queues and waiting times!</p>
                        <p className='mb-4'>We take pride in offering a diverse and mouth-watering menu that caters to a wide range of tastes and preferences. From wholesome meals to quick snacks, we have something for everyone.</p>

                        <div className='row g-4 mb-4'>


                            <div className="col-sm-6">
                                <div className='d-flex align-items-center border-start border-5 border-warning px-3'>
                                 <h1 className='flex-shrink-0 display-5 text-warning mb-0' data-toggle="counter-up">15</h1>
                                 <div className='ps-4'>
                                   <p className='mb-0'>Yours of</p>
                                   <h6 className='text-uppercase mb-0'>Experience</h6>    
                                </div>    
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className='d-flex align-items-center border-start border-5 border-warning px-3'>
                                 <h1 className='flex-shrink-0 display-5 text-warning mb-0' data-toggle="counter-up">15</h1>
                                 <div className='ps-4'>
                                   <p className='mb-0'>Popular</p>
                                   <h6 className='text-uppercase mb-0'>Chefs</h6>    
                                </div>    
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>

            {/*-----------Menu section---------*/}

             <div className='container-xxl py-5'>
                <div className='container'>
                    <div className='text-center wow animate__animated animate__fadeInUp' data-wow-delay="0.1s">
                        <h5 className='section-title ff-secondary text-center text-warning fw-normal'>Food Menu</h5>
                        <h1 className='mb-5'>Most Popular Items</h1>
                    </div>
                      
                      <div className='tab-class text-center wow animate__animated animate__fadeInUp' data-wow-delay="0.1s">
                        <ul className='nav nav-pills d-inline-flex justify-content-center border-bottom mb-5'>
                            <li className='nav-item'>
                                <p className='d-flex align-items-center text-start mx-3 ms-0 pb-3' data-bs-toggle="pill">
                                    <i className='fa fa-bread-slice fa-2x text-warning'></i>
                                    <div className='ps-3'>
                                        <small className='text-body'>Popular</small>
                                        <h5 className='mt-n1 mb-0 font-weight-bold'>Breakfast</h5>
                                    </div>
                                </p>
                            </li>

                            <li className='nav-item'>
                                <p className='d-flex align-items-center text-start mx-3 ms-0 pb-3' data-bs-toggle="pill">
                                    <i className='fa fa-hamburger fa-2x text-warning'></i>
                                    <div className='ps-3'>
                                        <small className='text-body'>Special</small>
                                        <h5 className='mt-n1 mb-0 font-weight-bold'>Lunch</h5>
                                    </div>
                                </p>
                            </li>
                            <li className='nav-item'>
                                <p className='d-flex align-items-center text-start mx-3 ms-0 pb-3' data-bs-toggle="pill">
                                    <i className='fa fa-pizza-slice fa-2x text-warning'></i>
                                    <div className='ps-3'>
                                        <small className='text-body'>Lovely</small>
                                        <h5 className='mt-n1 mb-0 font-weight-bold'>Snacks</h5>
                                    </div>
                                </p>
                            </li>

                        </ul>
                      </div>
                </div>
             </div>

         </div>
            </div>
          );
    }
  
}

export default HomeBootstrap;
