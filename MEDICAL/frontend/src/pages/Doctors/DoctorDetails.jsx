import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import Feedback from "./Feedback";
// import Dabout from "./Dabout";



const DoctorDetails = () => {

    const [tab,setTab] = useState('about')


    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto ">
                <div className="grid md:grid-cols-3 gap-[50px]">

                    <div className="md:col-span-2">
                        <div className="flex items-center gap-5">
                            <figure className="max-w-[200px] max-h-[200px]">
                                <img src={doctorImg} alt="" className="w-full" />
                            </figure>

                            <div>
                                <span className="bg-[#CCF0F3] text-primaryColor py-1 px-6 lg:py-2 lg:px-6 text-[12px]
                                leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ">
                                    Neurologist
                                </span>
                                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">Ramu Nayak</h3>
                                <div className="flex items-center gap-[6px]">
                                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:lading-7 
                                    font-semibold text-headingColor">
                                        <img src={starIcon} alt="" /> 4.8
                                    </span>
                                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400]">
                                        (272)
                                    </span>
                                </div>

                                <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] ">Ramu Nayak 
                                he is One of the Famous Neurologists in this field in the SouthIndia . Studied as a ComputerScienceEngineering in a
                                PES University Banglore Banashankari RR Campus</p>
                            </div>
                        </div>


                        <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                            <button
                                onClick={()=> setTab('about')}
                            className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                                About
                            </button>

                            <button 
                            onClick={()=> setTab('feedback')}
                            className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                                Feedback
                            </button>
                        </div>


                        <div className="mt-[50px]">
                            {
                                tab === 'about' && <></>
                            }

                            {
                                tab === 'feedback' && <Feedback />
                            }
                        </div>


                            {/* <div>
                                <SidePanel />
                            </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorDetails