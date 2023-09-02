import { Schema, model } from 'mongoose';
import Joi from 'joi';
const CvSchema = new Schema({
    UserId:{
     type: Schema.ObjectId,
     required: true,
     select: false,
    },//id
    FullName: {
    type: String,
    required: true,
    },
    Email: {
    type: String,
    required: true,
    
    },
    Address: {
    type: String,
    required: true, },
    Phone:{
    type: String,
    required: true,
    }   
    ,
    Links: {
    type: Array,    
    required: false,
    },
      
    ///////////////c1
    Summary:{
        type: String,    
        required: true,  
    },/////////////////c2
    
    ////////////////c3
    WorkExperience:{
      type:Array,
      required:true
    },/////////////c4
    Degreesearned:
    {
      type:String,
      required:true
    },
    Graduationdates:
    {
      type:String,
      required:true      
    },
    
    educationalinstitutions:
    {
      type:String,
      required:true      
    },
    fieldofstudy:
    {
      type:String,
      required:true      
    },
    honors:{
    type: Array,
    required:true
  },
   
    /////////////c5

    Skills:{
     type: Array,
     required:true
    },
    
    ///////////////c6
    Certificates:{
        type:Array,
        required:true,
    },////////////c7
    Projects:{
        type:Array,
        required:true
    },
    
    Languages:{
      type:Array,
        required:true
    },
    Hobbies:{
        type:Array,
        required:false
    }
    });
    const Cv = model('Cv', CvSchema);
  // const validateSchema = Joi.object({
    //    Name: Joi.string().min(3).max(50).required(),
    //    Email: Joi.string().email().required(),
     //   Phone:Joi.number().max(20).min(4).required(),
       // ProfessionalSummary:Joi.string().required(),
     //   JobObjective:Joi.string().required(), 
       // Address:Joi.string().required(),  
       // LinkedIn:Joi.string().required(),                    
        //});*/
    export  { Cv };    