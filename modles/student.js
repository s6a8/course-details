import mongoose from "mongoose";

// Defining Schema
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },

  image: {
     type: String,
     required: true 
  },
  university: {
     type: String,
     required: true 
    },
  faculty: {
     type: String,
     required: true 
    },

  duration: {
     type: Number,
     required: true 
    },

  fees: {
     type: Number,
     default: 0 
    },
  certificate: {
     type: String,
     required: true 
    },

  eligibility: {
     type: String,
     required: true 
    },
});

//Model
const CourseModel = mongoose.model("course", courseSchema);
export default CourseModel;
