import React from "react";
import icon from "../../asset/sprite.svg";


export default function ContactUs() {
  return (
    <div>
      <h3>Contact Us</h3>

      <div>

          <div>
          <svg>
          <use href={icon + "#icon-phone"} />
        </svg>
        <p>telephone</p>
      </div>

      <div>
        <svg>
          <use href={icon + "#icon-mail"} />
        </svg>
        <p>mail</p>
      </div>
      
      <div>
        <svg>
          <use href={icon + "#icon-mail"} />
        </svg>
        <p>mail</p>
      </div>

          </div>
     
    </div>
  );
}
