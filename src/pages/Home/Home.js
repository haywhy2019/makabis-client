import React from "react";
import CTA from "../../components/Custom-button/Custom-button";
import headerimg1 from "../../asset/images/header1.png";
import headerimg2 from "../../asset/images/header2.png";
import headerimg3 from "../../asset/images/header3.png";
import headerimg4 from "../../asset/images/header4.png";
import event1 from "../../asset/images/homeevent1.png";
import event2 from "../../asset/images/homeevent2a.png";
import event3 from "../../asset/images/homeevent3a.png";
import { ReactComponent as Ideal } from "../../asset/SVG/plan.svg"
import { ReactComponent as Real } from "../../asset/SVG/ideal.svg"
import { ReactComponent as Plan } from "../../asset/SVG/real.svg"



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
            <p>
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
        <div>
          <div>
     <Ideal />
            <h3>Ideal</h3>
            <p>Your vision when your ideas take off</p>
          </div>
          <div>
            <Real />
            <img src="" alt="" />
            <h3>Planning</h3>
            <p>We turn your ideas into action by designing your perfect day</p>
          </div>
          <div>
            <Plan />
            <img src="" alt="" />
            <h3>Realization</h3>
            <p>Making your event come alive</p>
            <p>The event you imagine is brought to alive</p>
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
        <div>
          <h1>Our customer love what we do</h1>
        </div>
        <div>
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
