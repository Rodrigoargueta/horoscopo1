import React from 'react'

const Footer = (props) => {
    return (
        <>
            <footer className="footer fixed-bottom bg-secondary pt-2 pb-2 col-12 text-white text-center">
            Copyright © {new Date().getFullYear()} Roter'S
            </footer>
        </>
    )
}

export default Footer