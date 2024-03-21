
import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = (user) => {

//part-03 30:36 thi generate token
  return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY ,{
    expiresIn:"15d",
  })
   };
  

export const register = async (req,res) => {
   
   const {email, password, name, role, photo, gender} = req.body
   

   
    try {  

        let user = null
        
   if(role==='patient'){
    user = await User.findOne({email})
   }
   else if(role==='doctor'){
    user = await Doctor.findOne({email})
   }

   //check if the user already exists
   if(user){
    return res.status(400).json({message:"user already exist"})
   }


   //hash password
   const salt =  await bcrypt.genSalt(10)
   const hashPassword = await bcrypt.hash(password, salt)

   if(role==='patient'){
    user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role
    })
   }

   
   if(role==='doctor'){
    user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role
    })
   }

   await user.save()

   res.status(200).json({success:true, message:"User successfully Created!!"})

    } catch (err) {
    console.error(err);  // Log the actual error for debugging purposes
    res.status(500).json({ success: false, message: "Internal Server Error" });
}
    
}



export const login = async(req,res) => {

const {email, password} = req.body;



   try {  

            let user = null

            const patient = await User.findOne({email})
            const doctor = await Doctor.findOne({email})

            if(patient){
                user = patient;
            }
            if(doctor){
                user = doctor;
            }


            console.log("User found : ", user)


            //check whether the password is corect user is axist or not
            if(!user){
              console.log("User not found for email :", email);
                return res.status(404).json({message:"User not found"});
            }

            //compare password
            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if(!isPasswordMatch) {
                return res.status(400).json({status:false, message:"Invalid Credentials"})
            }

           // get token
          const token = generateToken(user);

          const { password, role, appointments, ...rest } = user._doc;

          res
              .status(200)
              .json({ status: true, message: "successfully Login", token, data: { ...rest }, role });


            } catch (err) { 
                res.status(500).json({status:false, message:"Failed to Login Please Try again"}) 
            }            
}
