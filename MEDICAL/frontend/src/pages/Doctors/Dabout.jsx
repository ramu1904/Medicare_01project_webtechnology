import React from "react";

const DoctorsAbout = () => {
    return <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center
            gap-2 ">About of
            <span className="text-primaryColor font-bold text-[24px] leading-9 ">
                Ramu Nayak 
            </span>
            </h3>
            <p className="text__para">
                Im Ramu Nayak im a fan of Rohitsharma i want to become  full stack
                web developer, im studying in a pes university in rr campus Banashankari
                so it is just a introduction
            </p>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center
            gap-2">Education</h3>

            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:tems-end md:gap-5
                mb-[30px]">
                    <div>
                        <span className="text-primaryColor text-[15px] leading-6 font-semibold">23 june, 2007</span>
                    </div>
                </li>
            </ul>
        </div>

    </div>
}