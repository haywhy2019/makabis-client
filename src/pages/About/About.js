import React from "react";
import aboutimg from "../../asset/images/aboutheader.png";
import card1 from "../../asset/images/sijibomi.png";
import card2 from "../../asset/images/person1.png";
import card3 from "../../asset/images/person2.png";
import card4 from "../../asset/images/person3.png";
import abouticon from "../../asset/images/about icon.png";
function About() {
  return (
    <div>
      <Aboutheader />
      <Aboutsection1 />
      <Aboutsection2 />
      <Aboutsection3 />
    </div>
  );
}

export default About;

const Aboutheader = () => {
  return (
    <div className="container-fluid">
      <div className="relative row">
        <div className="col-md-12">
          <img src={aboutimg} alt="" class="img-fluid m-0 p-0 " />
          <h1 className="page-header-text">About us</h1>
        </div>
      </div>
    </div>
  );
};

const Aboutsection1 = () => {
  return (
    <div className="container">
      <h1 className="text__heading2 text-center mt-5 mb-5">Who we are</h1>
      <div class="container">
        <div class="row justify-content-md-around">
          <div class="col-md-5 mt-2">
            <p className="text--main2">
              Established in 2008 as a PR and Event Management company, Makabis
              and Benet officially started operations in June 2009. With a
              mission to consistently create uniquely developed event concepts
              combined with impeccable delivery, we have nd continued to
              assemble a team of creative minds with relevant skills required
              for the craft.
            </p>
            <p className="text--main2 mt-5">
              Our team is our strength for creating unparalleled and outstanding
              services in all our business facets; event packaging, event
              management, event branding, venue design and styling. Ultimately,
              our goal is to continually build a relationship that starts and
              ends with you….. Your Event… Our Touch…Your Memory
            </p>
          </div>
          <div className="mr-5">
            <div className="col-md-5">
              <div>
                <img src={abouticon} alt="" className="about-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Aboutsection2 = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">

          <div className="col-md-3 mr-5">
            <h1 className="text__heading2 mt-5 mb-5"> Our Vision</h1>
            <p className="text--main2">
              To be the most accessible and preferred concept and event producer
              for millennials who desire style, class & event solutions in
              Nigeria.
            </p>
          </div>
          <div className="col-md-3 ml-5">
            <h1 className="text__heading2 mt-5 mb-5"> Our Mission</h1>
            <p className="text--main2">
              To consistently develop creative and beautiful event models and
              designs to meet our client’s ever evolving needs
            </p>
          </div>
          <div className="col-md-3 ml-5">
            <h1 className="text__heading2 mt-5 mb-5"> Core Value</h1>
            <p className="text--main2">• Professionalism 
            <br />• Integrity  <br />• Empathy  <br /> • Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Aboutsection3 = () => {
    return(
        <div>
            <div className="container mt-5">

                
            <div className="row justify-content-md-center">
<div className="col-md-10">





            <div className="card-deck">
  <div className="card primary-backg">
    <img src={card1} className="card-img-top" alt="" />
    <div className="card-body">
        <p>CEO Makabis & Benet</p>
      <h5 className="card-title">Sijibomi Adebiyi</h5>
      <p className="card-text">Sijibomi Adebiyi-Benet is the Executive 
      Director at Makabis & Benet Limited, a distinguished event development
       and management company in Nigeria with remarkable imprints in 
      both social and corporate circles. Sijibomi…</p>
      <p className="card-text">@sijibomibenet</p>
    </div>
  </div>
  <div className="card primary-backg">
    <img src={card4} className="card-img-top" alt="..." />
    <div className="card-body">
    <p>Lead Event Stylist</p>
      <h5 className="card-title">Diala Chinyere Linda</h5>
      <p className="card-text">Chinyere is the senior event stylist at 
      Impressions by Makabis, the design/decor arm of Makabis & Benet. 
      Dilligent & tenacious, she helps in the detailed execution
       & delivery of agreed concepts 
      & ideas to achieve the desired ambience. </p>
      <p className="card-text">@_chiphumsie></p>
    </div>
  </div>

  <div className="card primary-backg">
    <img src={card3} className="card-img-top" alt="..." />
    <div className="card-body">
    <p>Lead Event Stylist</p>
      <h5 className="card-title">Diala Chinyere Linda</h5>
      <p className="card-text">Chinyere is the senior event stylist at 
      Impressions by Makabis, the design/decor arm of Makabis & Benet. 
      Dilligent & tenacious, she helps in the detailed execution
       & delivery of agreed concepts 
      & ideas to achieve the desired ambience. </p>
      <p className="card-text">@_chiphumsie></p>
    </div>
  </div>

  <div className="card primary-backg">
    <img src={card2} className="card-img-top" alt="" />
    <div className="card-body">
        <p>Lead Event Producer</p>
      <h5 className="card-title">Olanrewaju Kafayat Temidayo </h5>
      <p className="card-text">Kafayat is the head of 
      event production & the administrative executive 
      for Makabis & Benet. A graduate of English with 
      certifications in corporate leadership,
       she is versed in conveying 
      thoughts & fantasies into reality.</p>
      <p className="card-text">@kharfy</p>
    </div>
  </div>





</div>
</div>
</div>




</div>
</div>
    )
}

