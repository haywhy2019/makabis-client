import React from "react";
import CTA from "../../components/Custom-button/Custom-button";
import headerimg1 from "../../asset/images/header1.png";
import headerimg2 from "../../asset/images/header2.png";
import headerimg3 from "../../asset/images/header3.png";
import headerimg4 from "../../asset/images/header4.png";
import event1 from "../../asset/images/homeevent1.png";
import event2 from "../../asset/images/homeevent2a.png";
import event3 from "../../asset/images/homeevent3a.png";
import ideal from "../../asset/images/ideal.png";
import plan from "../../asset/images/plan.png";
import real from "../../asset/images/real.png";
import testimony1 from "../../asset/images/testimony1.png";




export default function Home() {
  return (
    <div>
      <Hero />
      <Herosection />
      <Testimoniasection />
      <Clientlogo />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="">
      <div className="hero">
        <div className="container ">
        <div className="row row-cols-2">
          <div className="col">
            <div className="herotext-margin align-left ml-5">
            <h1 className="herotext">
              We make any occasion<br/><span className="herotext_bold">Memorable</span>
            </h1>
            <p className="herotext_paragraph">
              Our Business is not just planning, but total event ,<br/>production,
              precise coordination and <br/> extraordinary result.
            </p>
            <div >
              <CTA className="button__hero">SPEAK WITH US</CTA>
            </div>
              </div> 
           
          </div>

            <div className="col">
            <div className="align-bottom">
            <img src={headerimg2} alt="makabis-header" className="herocard1 mr-5 slide-in-blurred-top" />
            <img src={headerimg1} alt="makabis-header" className="herocard2 slide-in-blurred-top" />
          </div>
          <div className="col">
            <img src={headerimg4} alt="makabis-header" className="herocard3 slide-in-blurred-top" />
            <img src={headerimg3} alt="makabis-header" className="herocard4 slide-in-blurred-top"/>
          </div>
            </div>
         
        </div>
        </div>
     
      
      </div>
    </div>
  );
};

const Herosection = () => {
  return (
    <div>
      <div classname="">
        <h1 className="text__heading text-center mt-5">We plan, you party</h1>
       <div className="container mt-3">
       <div className=" box">
        
          <div className="text__subheading">
            <h3 className="box__text">event planning</h3>
            <img src={event1} alt="makabis-event-types" className="box__three"/>
          </div>
          <div className=" text__subheading">
            <h3 className="box__text">event branding</h3>
            <img src={event2} alt="makabis-event-types" className="box__three"/>
          </div>
          <div className="text__subheading">
            <h3 className="box__text">event styling <br/> by impression</h3>
            <img src={event3} alt="makabis-event-types" className="box__three"/>
          </div>
       </div>
       
        </div>
      </div>

      <div className="mt-5 text-center">
        <h1 className="text__subheading2 ">Our Approach</h1>
        <div className="flexspace">
          <div classname="flexspace__item">

              <img src={ideal} alt="makabis-event-ideas" className="icon" />
            <h3 className="text__subheading3">Ideal</h3>
            <p className="text--main">Your vision <br/> when your ideas take off</p>
          </div>
          <div classname="flexspace__item">
       
            <img src={plan} alt="makabis-event-planning" className="icon" />
            <h3 className="text__subheading3">Planning</h3>
            <p className="text--main">We turn your ideas into action <br/> by designing your perfect day</p>
          </div>
          <div classname="flexspace__item">
    
            <img src={real} alt="makabis-event-realization" className="icon" />
            <h3 className="text__subheading3">Realization</h3>
            <p  className="text--main">Making your event come alive<br/>The event you imagine is brought to alive</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimoniasection = () => {
  return (
    <div>
      <div>
        <div className="testimony-section">
          <h1 className="testimony-section__text">Our customer love what we do</h1>
        </div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={testimony1} className="d-block w-100" alt="makabis-event-testimony" />
        <p style={{color: "blue"}}>
            MAkabis & Benet gave us a splendid amblence that we wont forget in a
            hurry. I was also thrilled by the presence reated on the singing
            stage. the pictues speaks for themselves and we're grateful.
          </p>
          <p>Obiwon</p>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="makabis-event-testimony" />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="makabis-event-testimony" />
    </div>
  </div>
  <CTA>Watch videos</CTA>
</div>









        <div className="">
          <img src="" alt="" />
          <p>
            MAkabis & Benet gave us a splendid amblence that we wont forget in a
            hurry. I was also thrilled by the presence reated on the singing
            stage. the pictues speaks for themselves and we're grateful.
          </p>
          <p>Obiwon</p>
        </div>
        <CTA>Watch videos</CTA>
      </div>
    </div>
  );
};

const Clientlogo = () => {
  return (
    <div>
      <h1>Our client</h1>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};
