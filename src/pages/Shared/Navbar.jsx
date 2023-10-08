// import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
const {user,logOut} = useContext(AuthContext)    
const NavLinks= <>
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/about">About US</NavLink></li>
         <li><a href="#services">Services</a></li>
         {/* <li><NavLink to="/blog">Blog</NavLink></li> */}
         {/* <li><NavLink to="/contact">Contact Us</NavLink></li> */}
         {/* team,detail page,user name,profile */}
        </>
    const handleLogOut =()=>{
        logOut()
        .then (()=> {
            console.log('success logging out')
            toast.success("logged out successfully.")
        })
        .catch(error => {
            console.log('failed logging out')

            toast.error("error occured while doing logout", error.message)})
    }


    return (
        <section>
            <Toaster position="buttom"></Toaster>
            <div className="navbar bg-[#D6A2E8] rounded-lg font-medium text-white text-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {NavLinks}
                </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
            <div className="avatar">
                <div className="w-12 rounded-full">
                <img src="https://i.ibb.co/yPLG6PW/user.jpg" />           
                </div>
            </div>
            <Link to="/login" className="px-4 py-2 text-base cursor-pointer hover:bg-sky-400 bg-transparent border border-s-white text-white rounded-lg ">Login</Link>
            <Link onClick={handleLogOut} className="px-4 py-2 text-base cursor-pointer hover:bg-sky-400 bg-transparent border border-s-white text-white rounded-lg ">Log Out</Link>
        
            </div>
            </div>
        </section>
    );
};
export default Navbar;