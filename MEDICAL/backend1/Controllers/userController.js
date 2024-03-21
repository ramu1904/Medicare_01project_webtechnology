import User from "../models/UserSchema.js";
// import BookingSchema from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async(req,res)=>{
    const id = req.params.id

    try {
       
        const updateUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true})

        res.status(200).json({success:true, message:"Successfully Updated", data:updateUser})

    } catch (error) {
        res.status(500).json({success:false, message:"failed to update"})

    }
}



export const deleteUser = async(req,res)=>{
    const id = req.params.id

    try {
       
        await User.findByIdAndDelete(id)

        res.status(200).json({success:true, message:"Successfully deleted"})

    } catch (error) {
        res.status(500).json({success:false, message:"failed to delete"})

    }
}


export const getSingleUser = async(req,res)=>{
    const id = req.params.id

    try {
       
        const user = await User.findById(id).select("-password");

        res.status(200).json({success:true, message:"User Found", data:user})

    } catch (error) {
        res.status(404).json({success:false, message:"No User found"})

    }
}




export const getAllUser = async(req,res)=>{
    const id = req.params.id

    try {
       
        const users = await User.findById({}).select("-password");

        res.status(200).json({success:true, message:"Users Found", data:user})

    } catch (error) {

        res.status(404).json({success:false, message:"No found"})

    }
}


export const getUserProfile = async(req,res) => {
    const userId = req.userId

    try {
        
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({success:false, message:"user not found"})
        }

        const {password, ...rest} = user._doc

        res.status(200).json({success:true, message:"Profile info is getting" , data:{...rest}})

    } catch (error) {
        res.status(500).json({success:false, message:"something went wrong, cannot get"})
    }
}

export const getMyAppointments = async(req,res) => {
    try {

        //1 retieve appoinments from booking 
        const bookings = await Booking.find({user:req.userId})


        //2 extrect doctor ids from the appoinment booking
        const doctorIds = bookings.map(el=>el.doctor.id)

        //3 retrieve doctors using the doctors id
        const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password')

        res.status(200).json({success:true, message:"Appointment are getting",data:doctors})

    } catch (error) {
        res.status(500)
        .json({success:false, message:"Something went wrong , sorry cannot get an appoinment"})
    }
}