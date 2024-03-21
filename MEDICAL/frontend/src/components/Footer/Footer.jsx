import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';

import { AiFillYoutube, AiFillGithub, AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

const socialLinks = [
    {
        path: "https://youtube.com/@MotiveMinted2003?si=yFmzCY8ONyzrv3XO",
        icon: <AiFillYoutube className="group-hover:text-white  w-7 h-8" />,
    },
    {
        path: "www.github.com",
        icon: <AiFillGithub className="group-hover:text-white w-7  h-8" />,
    },
    {
        path: "https://www.linkedin.com/in/praveen-koppal-11518626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: <AiFillLinkedin className="group-hover:text-white w-7  h-8 "/>,
    },
    {
        path: "https://instagram.com/__ramu19?igshid=NGVhN2U2NjQ0Yg==",
        icon: <AiFillInstagram className="group-hover:text-white  w-7 h-8" />,
    },
    {
        path: "https://www.facebook.com/profile.php?id=100090843347500",
        icon: <AiFillFacebook className="group-hover:text-white w-7 h-8" />,
    },
];

const quickLinks01 = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/",
        display: "About Us",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/",
        display: "Blog",
    },
];

const quickLinks02 = [
    {
        path: "/find-a-doctor",
        display: "Find a Doctor",
    },
    {
        path: "/",
        display: "Request an Appointment",
    },
    {
        path: "/",
        display: "Find a Location",
    },
    {
        path: "/",
        display: "Get a Opinion",
    },
];

const quickLinks03 = [
    {
        path: "/",
        display: "Donate",
    },
    {
        path: "/contact",
        display: "Contact Us",
    },
];




const Footer = () => {
   
const year = new Date().getFullYear()

return (
<section className="pb-16 pt-10">

    <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]  ">
            <div>
                <img src={logo} alt="" />
                <p className="text-[16px] leading-7 font-[400] text-textColor">CopyRight - {year} developed by Ramu all right reserved </p>

                <div className="flex items-center gap-3 mt-4">
                    {socialLinks.map((link, index)=>  (<Link 
                    to={link.path} 
                    key={index} 
                    className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center 
                    group hover:bg-primaryColor hover:border-none"> {link.icon}</Link> ))}
                </div>
            </div>

        {/*==================QUICK LINKS ========================== */}

                        <div>
                            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                                Quick Links
                            </h2>
        {/*==========quicklinks01========================== */}
                        <ul>
                            {quickLinks01.map((item,index)=>(
                            <li key={index} className="mb-4">
                                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                            </li>))}
                        </ul>
                        </div>


        {/*==========quicklinks02========================== */}

                                
                        <div>
                            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                                I want to :
                            </h2>
       
                        <ul>
                            {quickLinks02.map((item,index)=>(
                            <li key={index} className="mb-4">
                                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                            </li>))}
                        </ul>
                        </div>




        {/*==========quicklinks03========================== */}


                        <div>
                            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                                Support
                            </h2>
       
                        <ul>
                            {quickLinks03.map((item,index)=>(
                            <li key={index} className="mb-4">
                                <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                            </li>))}
                        </ul>
                        </div>

        </div>
    </div>
</section>
);
}

export default Footer