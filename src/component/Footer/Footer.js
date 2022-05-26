import React from 'react';

const Footer = () => {
    return (
        <nav>
        <footer className="footer p-10 bg-neutral text-neutral-content mt-20" >
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency service</a>
          <a className="link link-hover">Monthly service</a>
          <a className="link link-hover">Weekly service</a>
          <a className="link link-hover">Deep service</a>
        </div>
        <div>
          <span className="footer-title">good product</span>
          <a className="link link-hover">All time serrvice</a>
          <a className="link link-hover">geranty in product</a>
          <a className="link link-hover">Available all Product</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">Bera,pabna</a>
        </div>
        
      </footer>
      <div className='bg-neutral'>
      <div className="py-6 text-white text-sm text-center dark:text-gray-400">Copyright © 2022 - All right reserved by Pranab.</div>
      </div>
      </nav>
    );
};

export default Footer;