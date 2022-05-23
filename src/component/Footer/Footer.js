import React from 'react';

const Footer = () => {
    return (
        <nav>
        <footer className="footer p-10 bg-neutral text-neutral-content mt-20" >
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">Bera,pabna</a>
        </div>
        
      </footer>
      <div className='bg-neutral'>
      <div className="py-6 text-white text-sm text-center dark:text-gray-400">© 1968 Company Co. All rights reserved.</div>
      </div>
      </nav>
    );
};

export default Footer;