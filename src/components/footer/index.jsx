import React from 'react'
import './style.css'

const Footer = (props) => {
    return (
        <div className="footer">
            <p className="text-center">Copyright@2023 | All Rights Reserved | by {props.creatorname}</p>
        </div>
    )
}

export default Footer;