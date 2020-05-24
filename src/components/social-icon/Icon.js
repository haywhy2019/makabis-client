import React from "react";
import icon from "../../asset/sprite.svg";

export default function Icon() {
  return (
    <div>
      <svg>
        <use href={icon + "#icon-mail"} />
      </svg>
      <svg>
        <use href={icon + "#icon-twitter"} />
      </svg>
      <svg>
        <use href={icon + "#icon-facebook"} />
      </svg>
      <svg>
        <use href={icon + "#icon-linkedin2"} />
      </svg>
      <svg>
        <use href={icon + "#icon-instagram"} />
      </svg>
      <svg>
        <use href={icon + "#icon-pinterest2"} />
      </svg>
    </div>
  );
}
