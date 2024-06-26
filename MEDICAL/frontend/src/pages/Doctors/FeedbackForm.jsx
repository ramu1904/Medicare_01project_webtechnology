import React from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
    return (
        <form action="">
            <div>
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
                    How would you rate the overall experience?</h3>


                <div>
                    {[...Array(5).keys()].map((_,index)=>{
                        index+=1
                            
                        return(
                            <button type="button" key={index}>
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>
                        )
                    })}
                </div>

            </div>
        </form>
    );
};

export default FeedbackForm;