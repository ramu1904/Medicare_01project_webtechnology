


import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async(req,res)=>{
    const id = req.params.id

    try {
       
        const updateDoctor = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true})

        res.status(200).json({success:true, message:"Successfully Updated", data:updatedDoctor})

    } catch (error) {
        res.status(500).json({success:false, message:"failed to update"})

    }
}



export const deleteDoctor = async(req,res)=>{
    const id = req.params.id

    try {
       
        await Doctor.findByIdAndDelete(id)

        res.status(200).json({success:true, message:"Successfully deleted"})

    } catch (error) {
        res.status(500).json({success:false, message:"failed to delete"})

    }
}


export const getSingleDoctor = async(req,res)=>{
    

    try {

        const {query} = req.query

        if(query){
            doctors = await Doctor.find({isApproved:'approved', $or:[{name: { $regex: query, $options: "i" }},
                ],
            });
            } else{
                doctors = await Doctor.find({ isApproved: "approved"}).select("-password");
        }
       
        const doctors = await User.findById(id).select("-password");

        res.status(200).json({success:true, message:"User Found", data:user})

    } catch (error) {
        res.status(404).json({success:false, message:"No User found"})

    }
}




export const getAllDoctor = async(req,res)=>{
    const id = req.params.id

    try {
       
        const doctors = await User.findById({}).select("-password");

        res.status(200).json({success:true, message:"Users Found", data:doctors})

    } catch (error) {

        res.status(404).json({success:false, message:"No found"})

    }
};


export const getDoctorProfile = async(req,res) => {
    const userId = req.userId;

    try {
        const doctor = await Doctor.findById(userId);

        if(!doctor) {
            return res.status(404).json({success:false, message:"Doctor not found "})
        }

        const { password, ...rest} = doctor._doc;
        const appointments = await Booking.find({doctor:doctorId})

        res.status(200).json({success:true, message:"profile info is getting", data: {...rest, appointments},})

    } catch (error) {
        res.status(500)
        .json({success:false, message:"Something went wrong, cannot get"});
    }
};
