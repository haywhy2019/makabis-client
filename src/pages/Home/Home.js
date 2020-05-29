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
import icon from "../../asset/sprite.svg";
import logo1 from "../../asset/images/fate.png";
import logo2 from "../../asset/images/schne.png";
import logo3 from "../../asset/images/kgc.png";
import logo4 from "../../asset/images/gific.png";
import logo5 from "../../asset/images/visa.png";
import logo6 from "../../asset/images/mfm.png";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Herosection />
      <Testimoniasection />
      <Clientlogo />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="container-fluid hero">
      <div class="row">
        <div class="col-md-6">
          <div className="herotext-margin align-left ml-5">
            <h1 className="herotext">
              We make any occasion
              <br />
              <span className="herotext_bold">Memorable</span>
            </h1>
            <p className="herotext_paragraph">
              Our Business is not just planning, but total event ,<br />
              production, precise coordination and <br /> extraordinary result.
            </p>
            <div>
              <CTA className="button__hero">SPEAK WITH US</CTA>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div className="row">
            <div className="col-md-3 align-bottom">
              <img
                src={headerimg2}
                alt="makabis-header"
                className="herocard1 mr-5 slide-in-blurred-top"
              />
              <img
                src={headerimg1}
                alt="makabis-header"
                className="herocard2 slide-in-blurred-top"
              />
            </div>
            <div className="col-md-3">
              <img
                src={headerimg4}
                alt="makabis-header"
                className="herocard3 slide-in-blurred-top"
              />
              <img
                src={headerimg3}
                alt="makabis-header"
                className="herocard4 slide-in-blurred-top"
              />
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
      <div classname="container mt-3 box ">
        <h1 className="text__heading text-center mt-5">We plan, you party</h1>
        <div class="row justify-content-md-center mt-5">
          <div class="col-md-3">
            <div className="">
              <h3 className="box__text">event planning</h3>
              <img
                src={event1}
                alt="makabis-event-types"
                className="box__three"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div className=" ">
              <h3 className="box__text">event branding</h3>
              <img
                src={event2}
                alt="makabis-event-types"
                className="box__three"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div className="">
              <h3 className="box__text text-center">
                event styling by impression
              </h3>
              <img
                src={event3}
                alt="makabis-event-types"
                className="box__three"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <h1 className="text__subheading2 mt-5 text-center mb-5">
          Our Approach
        </h1>
        <div class="row justify-content-md-center ">
          <div class="col-md-3">
            <div classname="">
              <div className="margin-left-big">
                <img src={ideal} alt="makabis-event-ideas" className="icon" />
              </div>
              <h3 className="text__subheading3 text-center">Ideal</h3>
              <p className="text--main text-center">
                Your vision <br /> when your ideas take off
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div classname="text-center">
              <div className="margin-left-big">
                <img src={plan} alt="makabis-event-planning" className="icon" />
              </div>
              <h3 className="text__subheading3 text-center">Planning</h3>
              <p className="text--main text-center">
                We turn your ideas into action <br /> by designing your perfect
                day
              </p>
            </div>
          </div>
          <div class="col-md-3 mt-4">
            <div classname="">
              <div className="margin-left-big">
                <img
                  src={real}
                  alt="makabis-event-realization"
                  className="icon"
                />
              </div>
              <div classsName="mt-5">
                <h3 className="text__subheading3 text-center ">Realization</h3>
                <p className="text--main text-center">
                  Making your event come alive
                  <br />
                  The event you imagine is brought to alive
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimoniasection = () => {
  return (
    <div className="container-fluid">
      <div>
        <div className="testimony-section">
          <h1 className="testimony-section__text">
            Our customer love what we do
          </h1>
        </div>
        <div className="carosel-width">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testimony-slide">
                  <div>
                    <img
                      src={testimony1}
                      className="icon2"
                      alt="makabis-event-testimony"
                    />
                  </div>
                  <div>
                    <p className="testimony-text">
                      Makabis & Benet gave us a splendid amblence that we wont
                      forget in a
                      <br /> hurry. I was also thrilled by the presence reated
                      on the singing stage.
                      <br /> the pictues speaks for themselves and we're
                      grateful.
                      <br />
                      <strong>Obiwon</strong>
                    </p>
                  </div>
                </div>
                <CTA className="button__testimony">
                  <svg className="button-icon">
                    <use href={icon + "#play"} />
                  </svg>
                  watch video
                </CTA>
              </div>
              <div className="carousel-item">
                <div className="testimony-slide">
                  <div>
                    <img
                      src={testimony1}
                      className="icon2"
                      alt="makabis-event-testimony"
                    />
                  </div>
                  <div>
                    <p className="testimony-text">
                      Makabis & Benet gave us a splendid amblence that we wont
                      forget in a
                      <br /> hurry. I was also thrilled by the presence reated
                      on the singing stage.
                      <br /> the pictues speaks for themselves and we're
                      grateful.
                      <br />
                      <strong>Obiwon</strong>
                    </p>
                  </div>
                </div>
                <CTA className="button__testimony">
                  <svg className="button-icon">
                    <use href={icon + "#play"} />
                  </svg>
                  watch video
                </CTA>
              </div>
              <div className="carousel-item">
                <div className="testimony-slide">
                  <div>
                    <img
                      src={testimony1}
                      className="icon2"
                      alt="makabis-event-testimony"
                    />
                  </div>
                  <div>
                    <p className="testimony-text">
                      Makabis & Benet gave us a splendid amblence that we wont
                      forget in a
                      <br /> hurry. I was also thrilled by the presence reated
                      on the singing stage.
                      <br /> the pictues speaks for themselves and we're
                      grateful.
                      <br />
                      <strong>Obiwon</strong>
                    </p>
                  </div>
                </div>
                <CTA className="button__testimony">
                  <svg className="button-icon">
                    <use href={icon + "#play"} />
                  </svg>
                  watch video
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Clientlogo = () => {
  return (
    <div className="client-section">
      <div className=" center">
        <h1 className="text__subheading2">Our client</h1>
        <div className="logo-center">
          <img src={logo1} alt="makabis-partners" className="client_logo" />
          <img src={logo2} alt="makabis-partners" className="client_logo" />
          <img src={logo3} alt="makabis-partners" className="client_logo" />
          <img src={logo4} alt="makabis-partners" className="client_logo" />
          <img src={logo5} alt="makabis-partners" className="client_logo" />
          <img src={logo6} alt="makabis-partners" className="client_logo" />
        </div>
      </div>
    </div>
  );
};
