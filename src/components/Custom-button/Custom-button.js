import React from 'react'


export default function Button({ children, ...otherprops}) {
    return (
        <div>
            <button className='' {...otherprops}>
            {children}
            </button>
        </div>
    )
}
  