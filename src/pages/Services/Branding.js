import React from 'react';
import Headerimg from "../../asset/images/serviceheader.png"
import Service1 from "../../asset/images/service1.png"
import Service2 from "../../asset/images/service2.png"
import Service3 from "../../asset/images/service3.png"
import Service4 from "../../asset/images/service4.png"


const Branding = () => {
    return (
        <div>
             <Brandingheader />
                <Brandingsection1 />
                <Brandingsection2 />
        </div>
    );
}

export default Branding;


const Brandingheader = () => {
    return (
        <div className="container-fluid">
            <div className="relative row">
            <div className="col-md-12">
            <img src={Headerimg} alt="" class="img-fluid m-0 p-0 header-image"/>
            <h1 className="page-header-text">Our services</h1>
            </div>
        </div>
        </div>
    )
}

const Brandingsection1 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <h1 className="text-center text__subheading2 mt-5">Memorable events don’t just happen.</h1>
                  <h1 className="text__subheading2 mb-4"> They happen to be our business.</h1>
         <div className="text-center container">
             <div className="row justify-content-md-around"> 
             <div className="col-md-10">  
            <span class="badge badge-pill text__pills mr-5  mt-5 pl-5 pr-5 pb-2 pt-2">Event planning</span>
            <span class="badge badge-pill text__pills mr-5  mt-5 pl-5 pr-5 pb-2 pt-2">Event branding</span>
            <span class="badge badge-pill text__pills mr-5  mt-5 pl-5 pr-5 pb-2 pt-2">Event styling by impressions</span>
            <span class="badge badge-pill text__pills mr-5  mt-5 pl-5 pr-5 pb-2 pt-2">Rentals by impression</span>
            </div>
            </div>
            </div>
            </div>
            </div>
      
         </div>
    )
}

const Brandingsection2 = () => {
    return(
        <div>
            <div className="container mt-5">
             <div class="row justify-content-md-center">
    <div class="col-md-5 ">
      <img src={Service1} alt="" class="img-fluid relative"/>  
      <h2 className="page-text">Corporate</h2>
    </div>
    <div class="col-md-5">
    <img src={Service2} alt="" class="img-fluid relative"/>  
      <h2 className="page-text">Specialized</h2>
    </div>
  </div>
        </div>
        <div className="container mt-2">
             <div class="row justify-content-md-center">
    <div class="col-md-5">
    <img src={Service3} alt="" class="img-fluid relative"/>  
      <h2 className="page-text">Social</h2>
    </div>
    <div class="col-md-5">
    <img src={Service4} alt="" class="img-fluid relative"/>  
      <h2 className="page-text">Weddings</h2>
    </div>
  </div>
        </div>
        </div>
    )
}