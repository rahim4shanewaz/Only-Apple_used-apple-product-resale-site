import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/icons8-apple-logo.gif'

const Footer = () => {
    return (
        <div className='mt-20'>  <hr />
            <footer className="footer p-10  text-base-content">
            
  <div className='text-slate-600 font-bold'>
   <img className='h-20 w-20' src={logo} alt="" />
    <p>APPLE ONLY Ltd.<br/>Providing reliable service since 2022</p>
  </div> 
  <div className='text-slate-600 font-bold'>
    <span className="footer-title">Services</span> 
    <Link to={'/'} className="link link-hover">Resale</Link> 
    <Link to={'/'} className="link link-hover">Resale MacBook</Link> 
    <Link to={'/'} className="link link-hover">Resale Iphone</Link> 
    <Link to={'/'} className="link link-hover">Resale Apple Accessorie</Link>
  </div> 
  <div className='text-slate-600 font-bold'>
    <span className="footer-title">Company</span> 
    <Link to={'/'} className="link link-hover">About us</Link> 
    <Link to={'/'} className="link link-hover">Contact</Link> 
    <Link to={'/'} className="link link-hover">Jobs</Link> 
    <Link to={'/'} className="link link-hover">Press kit</Link>
  </div> 
  <div className='text-slate-600 font-bold'>
    <span className="footer-title">Legal</span> 
    <Link to={'/'} className="link link-hover">Terms of use</Link> 
    <Link to={'/'} className="link link-hover">Privacy policy</Link> 
    <Link to={'/'} className="link link-hover">Cookie policy</Link>
  </div>
</footer>
        </div>
    );
};

export default Footer;