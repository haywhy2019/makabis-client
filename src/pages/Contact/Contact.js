import React from "react";
import Contactimg from "../../asset/images/contact.png";
import Icon from "../../asset/sprite.svg";

function Contact() {
  return (
    <div>
      <Contactheader />
      <Contactbody />
    </div>
  );
}
export default Contact;

const Contactheader = () => {
  return (
    <div className="container-fluid">
      <div className="relative row">
        <div className="col-md-12">
          <img src={Contactimg} alt="" class="img-fluid m-0 p-0 header-image" />
          <h1 className="page-header-text">Contact us</h1>
        </div>
      </div>
    </div>
  );
};

const Contactbody = () => {
  return (
    <div className="container mb-5 mt-5">
      <div className="row mt-3">
        <div className="col-md-5 mt-5 ml-5">
          <div>
            <h1 className="text__heading2 mb-5">WEDDINGS, SOCIALS <br /> & CORPORATE</h1>
            <p className="text--main">6, Gbajobi Street, off Oristhe Street, Ikeja, Lagos State</p>
            <p className="text--main">Call: +234 01-4542856 +234- 8084778525</p>
            <div>
            <div>
            <svg className="social-icon">
                    <use href={Icon + "#icon-mail"} />
                  </svg>
                  <p className="text--main d-inline-block ml-2">Info@makabisandbenet.com</p>
            </div>
            <div>
            <svg className="social-icon">
                    <use href={Icon + "#icon-mail"} />
                  </svg>
                  <p className="text--main d-inline-block ml-2">makabisandbenet@gmail.com</p>
            </div>
            </div>
          </div>

          <div className="mt-3">
            <h1 className="text__heading2">Follow us on</h1>
            <div>
            <svg className="social-icon-t">
                    <use href={Icon + "#icon-twitter"} />
                  </svg>
                  <p className="text--main d-inline-block ml-2">@makabisandbenet</p>
            </div>
            <div>
            <svg className="social-icon-f">
                    <use href={Icon + "#icon-facebook"} />
                  </svg>
                  <p className="text--main d-inline-block ml-2">makabisandbenet</p>
            </div>
            <div>
            <svg className="social-icon-p">
                    <use href={Icon + "#icon-pinterest2"} />
                  </svg>
                  <p className="text--main d-inline-block ml-2">makabisandbenet</p>
            </div>
            <div>
            <svg className="social-icon-i">
                    <use href={Icon + "#icon-instagram"} />
                  </svg>
                  <p className="text--main d-inline-block ml-2">@makabisandbenet</p>
            </div>
            <div>
            <svg className="social-icon-l">
                    <use href={Icon + "#icon-linkedin2"} />
                  </svg>
                  <p className="text--main d-inline-block ml-2">@makabisandbenet</p>
            </div>
     
          </div>
        </div>

        <div className="col-md-5 mt-5 center">
          <div>
            <p className="text--main">
              Send us a message and we’ll follow up with you as soon as
              possible.
            </p>
            <div>
              <form>
                <div className="form-group">
                  <label for="" className="text--main">Name</label>
                  <input
                    type="text"
                    value=""
                    className="form-control round-edge"
                    id=""
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="" className="text--main">Phone no</label>
                  <input
                    type="tel"
                    className="form-control  round-edge"
                    value=""
                    id=""
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="" className="text--main">Email</label>
                  <input
                    type="email"
                    className="form-control  round-edge"
                    value=""
                    id=""
                    required
                  />
                </div>
                <div className="form-group mt-5">
                  <textarea type="text" rows="10" className="form-control text--main  round-edge2" id=""
                  placeholder="Type your message here....." />
                </div>
                <button type="submit" className="btn button__reg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
