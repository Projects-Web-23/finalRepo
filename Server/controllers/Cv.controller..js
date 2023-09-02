import {Cv } from "../models/Cv.js";
import { User } from "../models/User.js";
const CvController = {
    create: async (req, res) => {
       
        try {
            if(!req.user._id)
            return res.status(400).json({ error: "You must login first" });
            const  UserId = req.user._id;
            // Check if the user already exists  
            let found=await User.findById(UserId);    
            if(!found)
            return res.status(400).json({ error: "The user doesn't exist" });
            
            let cv = new Cv({ ...req.body,UserId:UserId });
              await cv.save();
              res.json({cv});
        }catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while creating your Cv. Please try again." });}
        },
    findOne:  
    async(req, res) => {
        try {          
        
        const found= await Cv.find({UserId:req.user._id});
        if(!found)
        return res.status(400).json({ error: "THis user hasn't created any Cvs" });            
         return res.json({found});
        
      
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while fetching your Cv." });
        }
    },  
}
export default CvController;