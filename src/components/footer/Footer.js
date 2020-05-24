import React from 'react'
import SubscribeForm from '../forms/Subscribeform'
import Socialicon from '../social-icon/Icon'
import Contact from '../contact/ContactUs'
import Location from '../location/Location'

export default function Footer() {
    return (
        <div>
            <Location />
            <Contact />
            <SubscribeForm />
            <Socialicon />
            
        </div>
    )
}
